import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const out = path.resolve('docs/cinematic-images-preview');
await mkdir(out, { recursive: true });
const profile = await mkdtemp(path.join(tmpdir(), 'fauna-cinematic-chrome-'));
const chrome = spawn(process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
], { windowsHide: true, stdio: 'ignore' });
let socket;
const results = [];
const errors = [];
const delayedImages = [];
let session;
let id = 0;
const pending = new Map();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  let active;
  for (let i = 0; i < 100; i++) {
    try { active = (await readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')).trim().split('\n'); break; } catch { await delay(100); }
  }
  if (!active) throw new Error('Chrome não disponibilizou o protocolo de depuração.');
  socket = new WebSocket(`ws://127.0.0.1:${active[0]}${active[1]}`);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (message.id) {
      const entry = pending.get(message.id);
      if (entry) { pending.delete(message.id); message.error ? entry.reject(new Error(JSON.stringify(message.error))) : entry.resolve(message.result); }
    } else if (message.method === 'Fetch.requestPaused') {
      delayedImages.push(message.params.requestId);
    } else if (message.method === 'Runtime.consoleAPICalled' && ['error','warning'].includes(message.params.type)) { errors.push(JSON.stringify(message.params.args)); } else if (message.method === 'Runtime.exceptionThrown') {
      errors.push(message.params.exceptionDetails.text + ' ' + (message.params.exceptionDetails.exception?.description ?? ''));
    }
  };
  const rpc = (method, params = {}, sessionId = session) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const { targetId } = await rpc('Target.createTarget', { url: 'about:blank' }, null);
  session = (await rpc('Target.attachToTarget', { targetId, flatten: true }, null)).sessionId;
  await rpc('Page.enable');
  await rpc('Runtime.enable');
  const evaluate = async (expression) => {
    const response = await rpc('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text);
    return response.result.value;
  };
  const waitFor = async (expression) => {
    for (let i = 0; i < 80; i++) { if (await evaluate(expression)) return; await delay(100); }
    throw new Error(`Timeout: ${expression}`);
  };
  const check = (name, value, detail) => {
    results.push({ name, pass: Boolean(value), ...(detail ? { detail } : {}) });
    console.log(`${value ? 'PASS' : 'FAIL'} ${name}${detail ? ' ' + JSON.stringify(detail) : ''}`);
  };
  const navigate = async (route) => {
    await rpc('Page.navigate', { url: 'http://127.0.0.1:5173' + route });
    await waitFor(`!!document.querySelector('main h1') && document.readyState === 'complete'`);
    await evaluate('document.fonts.ready');
    await delay(150);
  };
  const screenshot = async (name) => {
    const { data } = await rpc('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    await writeFile(path.join(out, name + '.png'), Buffer.from(data, 'base64'));
  };
  const scroll = async(top) => {
    await evaluate(`window.scrollTo({top:${top},behavior:'instant'})`);
    await delay(700);
  };
  const viewport = async(width,height=950) => {
    await rpc('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<768});
    await delay(300);
  };
  const triggerCount=()=>evaluate(`import('/src/utils/motionConfig.ts').then(({ScrollTrigger})=>ScrollTrigger.getAll().filter(t=>t.vars.id==='fauna-cinematic-opening').length)`);

  const ids=['arrival','reception','immersion','library','presence'];
  await viewport(1440);
  await navigate('/');
  await waitFor(`[...document.querySelectorAll('.visual-scene img')].every(i=>i.complete&&i.naturalWidth>0)`);
  check('Scene layers isolate disclosure stacking',await evaluate(`[...document.querySelectorAll('.visual-scene')].every(s=>getComputedStyle(s).isolation==='isolate')`));
  check('Five images loaded',await evaluate(`document.querySelectorAll('.visual-scene img').length===5`));
  check('Correct disclosures',await evaluate(`document.querySelector('[data-scene="arrival"] .visual-disclosure').textContent.includes('fotografia real') && [...document.querySelectorAll('.visual-scene')].slice(1).every(s=>s.textContent.includes('Não representa instalações reais'))`));
  const distance=await evaluate(`document.querySelector('.institutional-journey').offsetHeight-innerHeight`);
  for(const [index,scene] of ids.entries()) {
    await scroll(distance*(index+.45)/5.2);
    const state=await evaluate(`(() => {const s=document.querySelector('[data-scene="${scene}"]'); return {opacity:+getComputedStyle(s).opacity,scale:getComputedStyle(s.querySelector('img')).transform};})()`);
    check('Desktop scene '+scene,state.opacity>.99,state);
    await screenshot(scene+'-desktop');
  }
  for(const progress of [.15,.2,.35,.4,.55,.6,.75,.8,1,.8,.6,.4,.2,0]) {
    await scroll(distance*progress);
    check('Forward/reverse '+progress,await evaluate(`[...document.querySelectorAll('.visual-scene')].filter(s=>+getComputedStyle(s).opacity * +getComputedStyle(s.querySelector('.visual-copy')).opacity>.12 && s.querySelector('h1,h2')).length<=1`));
  }
  check('Reverse restores opening',await evaluate(`+getComputedStyle(document.querySelector('[data-scene="arrival"] .visual-copy')).opacity>.99 && +getComputedStyle(document.querySelector('[data-scene="reception"]')).opacity<.01`));
  await evaluate(`[...document.querySelectorAll('header nav a')].find(a=>a.textContent.trim()==='Cursos').focus()`);
  await waitFor(`document.querySelector('header nav').dataset.dropdown==='Cursos'`);
  check('Desktop menu',true);
  await evaluate(`document.querySelector('header a[href="/cursos"]').click()`);
  await waitFor(`location.pathname==='/cursos' && !!document.querySelector('#catalogue-title')`);
  check('Navigation and timeline cleanup',await triggerCount()===0);
  await navigate('/');
  check('Single timeline on return',await triggerCount()===1);
  await evaluate(`document.querySelector('.visual-discover').click()`);
  await delay(1500);
  check('Discover link',await evaluate(`document.activeElement.id==='primeiro-manifesto'`));
  for(const width of [375,390,430,768]) {
    await viewport(width,844); await scroll(0);
    check(width+' no overflow',await evaluate(`document.documentElement.scrollWidth<=innerWidth+1`));
    check(width+' natural flow',await evaluate(`getComputedStyle(document.querySelector('.visual-stage')).position!=='sticky'`));
    for(const scene of ids) {
      await evaluate(`document.querySelector('[data-scene="${scene}"]').scrollIntoView({behavior:'instant',block:'start'})`); await delay(700);
      check(width+' scene '+scene,await evaluate(`getComputedStyle(document.querySelector('[data-scene="${scene}"]')).visibility==='visible'`));
      if(width===390) await screenshot(scene+'-mobile');
    }
  }
  await viewport(390,844); await scroll(0);
  await evaluate(`document.querySelector('header button[aria-controls="menu-mobile"]').click()`);
  await waitFor(`!!document.querySelector('#menu-mobile')`);
  check('Mobile menu',await evaluate(`document.querySelector('#menu-mobile').getAttribute('role')==='dialog'`));
  await evaluate(`document.querySelector('#menu-mobile button[aria-label="Fechar menu"]').click()`);
  await viewport(1440);
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await delay(400);await scroll(0);
  check('Reduced motion',await triggerCount()===0 && await evaluate(`[...document.querySelectorAll('.visual-scene')].every(s=>getComputedStyle(s).visibility==='visible' && getComputedStyle(s.querySelector('img')).transform==='none')`));
  await screenshot('reduced-motion');
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});await delay(300);
  check('Motion restored',await triggerCount()===1);
  check('No console warnings/errors or exceptions',errors.length===0,errors);
  await writeFile(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));
  console.log('TOTAL',results.length,'FAILURES',results.filter(r=>!r.pass).length);
  if(results.some(r=>!r.pass))process.exitCode=1;
} catch(error) { console.error(error); process.exitCode=1; }
finally { if(socket?.readyState===1)socket.close(); chrome.kill(); }
