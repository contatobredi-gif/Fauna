import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const out = path.resolve('docs/homepage-images-preview');
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


  const areas=[['signature','.institutional-signature','/assets/cinematic/fachada-fauna'],...['direito','enfermagem','psicologia'].map(id=>[id,'.course-'+id,'/assets/institutional/'+id+'-fauna'])];
  await viewport(1440);await navigate('/');
  check('Cinematic sequence preserved',await evaluate(`[...document.querySelectorAll('.visual-scene img')].map(i=>i.getAttribute('src')).join(',')==='/assets/cinematic/fachada-fauna.jpg,/assets/cinematic/recepcao-fauna.jpg,/assets/cinematic/corredor-fauna.jpg,/assets/cinematic/biblioteca-fauna.jpg,/assets/cinematic/sala-estudos-fauna.jpg'`));
  check('Single opening timeline',await triggerCount()===1);
  for(const width of [1440,390]) {
    await viewport(width,width===1440?950:844);
    for(const [name,selector,expected] of areas) {
      await evaluate(`document.querySelector('${selector}').scrollIntoView({behavior:'instant',block:'center'})`);
      await waitFor(`document.querySelector('${selector} img').complete&&document.querySelector('${selector} img').naturalWidth>0`);await delay(800);
      const state=await evaluate(`(()=>{const area=document.querySelector('${selector}');const i=area.querySelector('img');return{src:i.getAttribute('src'),currentSrc:i.currentSrc,alt:i.alt,focus:getComputedStyle(i).objectPosition,link:area.querySelector('a').getAttribute('href'),overflow:document.documentElement.scrollWidth>innerWidth+1};})()`);
      check(width+' '+name+' image and layout',state.src===expected+'.jpg'&&!state.overflow,state);
      if(name!=='signature') check(width+' '+name+' course link',state.link==='/cursos/'+name);
      const box=await evaluate(`(()=>{const r=document.querySelector('${selector}').getBoundingClientRect();return{x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1}})()`);
      await evaluate(`document.querySelector('header').style.visibility='hidden'`);
      const {data}=await rpc('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:box});
      await evaluate(`document.querySelector('header').style.visibility=''`);
      await writeFile(path.join(out,name+(width===1440?'-desktop':'-mobile')+'.png'),Buffer.from(data,'base64'));
    }
  }
  check('No console errors',errors.length===0,errors);
  await writeFile(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));
  console.log('TOTAL',results.length,'FAILURES',results.filter(r=>!r.pass).length);
  if(results.some(r=>!r.pass))process.exitCode=1;
} catch(error){console.error(error);process.exitCode=1;}
finally{if(socket?.readyState===1)socket.close();chrome.kill();}
