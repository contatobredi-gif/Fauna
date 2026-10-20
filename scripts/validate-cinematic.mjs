import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const out = path.resolve('docs/cinematic-preview');
await mkdir(out, { recursive: true });
const profile = await mkdtemp(path.join(tmpdir(), 'fauna-cinematic-chrome-'));
const chrome = spawn(process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
], { windowsHide: true, stdio: 'ignore' });
let socket;
const results = [];
const errors = [];
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
    } else if (message.method === 'Runtime.exceptionThrown') {
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
  const scroll = async (top) => {
    await evaluate(`window.scrollTo({top:${top},behavior:'instant'})`);
    await delay(850);
  };
  const viewport = async (width, height = 950) => {
    await rpc('Emulation.setDeviceMetricsOverride', {width,height,deviceScaleFactor:1,mobile:width<768});
    await delay(300);
  };
  const triggerCount = () => evaluate(`import('/src/utils/motionConfig.ts').then(({ScrollTrigger})=>ScrollTrigger.getAll().filter(t=>t.vars.id==='fauna-cinematic-opening').length)`);
  await viewport(1440);
  await navigate('/');
  await delay(700);
  check('Desktop usa sequência sticky', await evaluate(`document.querySelector('.cinematic-opening').dataset.motion==='desktop'`));
  check('H1 único e identidade preservada', await evaluate(`document.querySelectorAll('main h1').length===1 && document.querySelector('h1').textContent.startsWith('FAUNA')`));
  check('Abertura sem imagens ou vídeo presumidos', await evaluate(`document.querySelectorAll('.cinematic-opening img,.cinematic-opening video').length===0`));
  await screenshot('opening-desktop');
  const distance=await evaluate(`document.querySelector('.cinematic-opening').offsetHeight-innerHeight`);
  await scroll(distance*0.36);
  await screenshot('transition-desktop');
  await scroll(distance);
  const manifesto=await evaluate(`(() => { const el=document.querySelector('.opening-manifesto'); return {opacity:getComputedStyle(el).opacity,visibility:getComputedStyle(el).visibility,title:el.querySelector('h2').textContent,details:getComputedStyle(el.querySelector('.opening-manifesto-details')).opacity}; })()`);
  check('Manifesto legível ao completar a transição', manifesto.visibility==='visible' && Number(manifesto.opacity)>0.95 && Number(manifesto.details)>0.9,manifesto);
  await screenshot('manifesto-desktop');
  await scroll(0);
  const matrix=await evaluate(`getComputedStyle(document.querySelector('.opening-brand')).transform`);
  check('Retorno da rolagem restaura a marca', matrix==='none'||Math.abs(Number(matrix.slice(7).split(',')[0])-1)<0.02,matrix);
  await evaluate(`document.querySelector('.opening-scroll').click()`);
  await delay(1700);
  check('Link de descoberta chega ao manifesto', await evaluate(`getComputedStyle(document.querySelector('.opening-manifesto')).visibility==='visible' && document.querySelector('.opening-manifesto-title').getBoundingClientRect().top>60`));
  check('Link de descoberta move o foco para o manifesto', await evaluate(`document.activeElement===document.querySelector('.opening-manifesto-title')`));
  await scroll(distance+450);
  check('Continuidade sem margem negativa ou sobreposição', await evaluate(`getComputedStyle(document.querySelector('#nossa-essencia')).marginTop==='0px'`));
  check('Uma timeline da abertura ativa', await triggerCount()===1);
  await evaluate(`document.querySelector('.opening-actions a[href="/cursos"]').click()`);
  await waitFor(`location.pathname==='/cursos' && !!document.querySelector('#catalogue-title')`);
  check('Página de cursos preservada', await evaluate(`document.querySelectorAll('main article').length===3`));
  check('Timeline desmontada ao navegar', await triggerCount()===0);
  await evaluate(`document.querySelector('header a[href="/"]').click()`);
  await waitFor(`!!document.querySelector('.cinematic-opening')`);
  await delay(400);
  check('Timeline recriada sem duplicação',await triggerCount()===1);

  for(const width of [375,430,768,1024,1440]){
    await viewport(width);
    await scroll(0);
    const fit=await evaluate(`(() => {const r=document.querySelector('.opening-brand').getBoundingClientRect();return{width:innerWidth,scroll:document.documentElement.scrollWidth,left:r.left,right:r.right,mode:document.querySelector('.cinematic-opening').dataset.motion};})()`);
    check(`${width}px sem overflow na marca`,fit.scroll<=fit.width+1 && fit.left>=-1 && fit.right<=fit.width+1,fit);
    if(width===375)await screenshot('opening-mobile');
    if(width<900){
      check(`${width}px sem sticky no mobile`,await evaluate(`getComputedStyle(document.querySelector('.opening-stage')).position!=='sticky'`));
      await evaluate(`document.querySelector('.opening-manifesto-title').scrollIntoView({behavior:'instant',block:'center'})`);
      await delay(800);
      check(`${width}px manifesto legível`,await evaluate(`[...document.querySelectorAll('.opening-manifesto-line')].every(el=>Number(getComputedStyle(el).opacity)>0.85)`));
      if(width===375)await screenshot('manifesto-mobile');
    }
  }
  await viewport(375,812);
  await scroll(0);
  await evaluate(`document.querySelector('header button[aria-controls="menu-mobile"]').click()`);
  await waitFor(`!!document.querySelector('#menu-mobile')`);
  check('Menu mobile continua acessível',await evaluate(`document.querySelector('#menu-mobile').getAttribute('role')==='dialog'`));
  await evaluate(`document.querySelector('#menu-mobile button[aria-label="Fechar menu"]').click()`);
  await viewport(1440);
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await scroll(0);
  await delay(300);
  check('Reduced motion: fluxo estático sem timeline',await triggerCount()===0);
  check('Reduced motion: marca e manifesto disponíveis',await evaluate(`!document.querySelector('.cinematic-opening').dataset.motion && getComputedStyle(document.querySelector('.opening-manifesto')).visibility==='visible'`));
  await evaluate(`document.querySelector('.opening-manifesto-title').scrollIntoView({behavior:'instant',block:'center'})`);
  await screenshot('reduced-motion');
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
  await scroll(0);
  await delay(400);
  check('Retorno do movimento sem duplicação',await triggerCount()===1);
  for(const route of ['/cursos/direito','/cursos/enfermagem','/cursos/psicologia','/institucional/diretoria-docentes']){
    await navigate(route);
    check(`Rota interna preservada ${route}`,await evaluate(`!document.querySelector('.cinematic-opening') && document.querySelectorAll('main h1').length===1`));
  }
  check('Sem exceções JavaScript',errors.length===0,errors);
  await writeFile(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));
  console.log('ARTIFACTS',out);
  console.log('TOTAL',results.length,'FAILURES',results.filter(r=>!r.pass).length);
  if(results.some(r=>!r.pass))process.exitCode=1;
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  if (socket?.readyState === 1) socket.close();
  chrome.kill();
}