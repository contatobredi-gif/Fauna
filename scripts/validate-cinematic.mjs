import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const out = path.resolve('docs/institutional-refinement-preview');
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
  const scroll = async(top) => {
    await evaluate(`window.scrollTo({top:${top},behavior:'instant'})`);
    await delay(700);
  };
  const viewport = async(width,height=950) => {
    await rpc('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<768});
    await delay(300);
  };
  const triggerCount=()=>evaluate(`import('/src/utils/motionConfig.ts').then(({ScrollTrigger})=>ScrollTrigger.getAll().filter(t=>t.vars.id==='fauna-cinematic-opening').length)`);
  await viewport(1440);
  await navigate('/');
  await delay(400);
  check('Primeira tela visual, sem marca gigante',await evaluate(`document.querySelector('main h1').textContent==='Uma nova forma de viver o ensino superior.' && !document.querySelector('.opening-brand')`));
  check('Três cenas locais identificadas como ilustração',await evaluate(`document.querySelectorAll('.visual-scene').length===3 && [...document.querySelectorAll('.visual-scene img')].every(i=>i.alt.includes('Ilustração conceitual'))`));
  await waitFor(`[...document.querySelectorAll('.visual-scene img')].every(i=>i.complete && i.naturalWidth>0)`);
  check('Três imagens carregadas e íntegras',true);
  await screenshot('arrival-desktop');
  await screenshot('header-initial');
  const headerHeight = await evaluate("document.querySelector('header').getBoundingClientRect().height");
  const distance=await evaluate(`document.querySelector('.institutional-journey').offsetHeight-innerHeight`);
  for (const progress of [.18,.24,.32,.4,.48,.6,.68,.76,.86,1,.76,.4,0]) {
    await scroll(distance*progress);
    const state=await evaluate(`[...document.querySelectorAll('.visual-scene')].map(scene=>({opacity:Number(getComputedStyle(scene).opacity),copy:Number(getComputedStyle(scene.querySelector('.visual-copy')).opacity),height:scene.querySelector('h1,h2').getBoundingClientRect().height}))`);
    check('Transição sem títulos sobrepostos '+progress,state.filter(s=>s.opacity*s.copy>.12).length<=1 && state.every(s=>s.height>30),state);
    if(progress===.32)await screenshot('transition-intermediate');
  }
  await scroll(distance*.5);
  check('Imersão legível',await evaluate(`Number(getComputedStyle(document.querySelector('[data-scene="immersion"]')).opacity)>.95 && Number(getComputedStyle(document.querySelector('[data-scene="immersion"] .visual-copy')).opacity)>.9`));
  check('Header com superfície opaca e contraste estável',await evaluate(`getComputedStyle(document.querySelector('header')).backgroundColor==='rgb(250, 248, 245)'`));
  await evaluate(`[...document.querySelectorAll('header nav a')].find(a=>a.textContent.trim()==='Cursos').focus()`);
  await waitFor(`document.querySelector('header nav').dataset.dropdown==='Cursos'`);
  check('Menu desktop abre durante a imersão',true);
  await rpc('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
  await rpc('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape'});
  await screenshot('immersion-desktop');
  await screenshot('header-scrolled');
  check('Altura do header constante no scroll',await evaluate("document.querySelector('header').getBoundingClientRect().height")===headerHeight);
  await scroll(distance);
  check('Presença legível',await evaluate(`getComputedStyle(document.querySelector('[data-scene="presence"]')).visibility==='visible' && Number(getComputedStyle(document.querySelector('[data-scene="presence"]')).opacity)>.95`));
  await screenshot('presence-desktop');
  await scroll(0);
  check('Retorno restaura chegada',await evaluate(`Number(getComputedStyle(document.querySelector('[data-scene="immersion"]')).opacity)<.02 && Number(getComputedStyle(document.querySelector('[data-scene="arrival"] .visual-copy')).opacity)>.95`));
  await evaluate(`document.querySelector('.visual-discover').click()`);
  await delay(1400);
  check('Link de descoberta alcança o manifesto',await evaluate(`document.querySelector('#primeiro-manifesto').getBoundingClientRect().top>=60 && document.querySelector('#primeiro-manifesto').getBoundingClientRect().top<innerHeight`));
  await screenshot('manifesto-desktop');
  check('Timeline única',await triggerCount()===1);
  await evaluate(`document.querySelector('header a[href="/cursos"]').click()`);
  await waitFor(`location.pathname==='/cursos' && !!document.querySelector('#catalogue-title')`);
  check('Navegação ao catálogo preservada',await evaluate(`document.querySelectorAll('main article').length===3`));
  check('Timeline limpa após navegação',await triggerCount()===0);
  await evaluate(`document.querySelector('header a[href="/"]').click()`);
  await waitFor(`!!document.querySelector('.institutional-journey')`);
  await delay(300);
  check('Timeline recriada sem duplicação',await triggerCount()===1);
  for(const width of [1440,768,375,390,430]){
    await viewport(width);
    await scroll(0);
    const layout=await evaluate(`({width:innerWidth,scroll:document.documentElement.scrollWidth,mode:document.querySelector('.institutional-journey').dataset.motion,h1:document.querySelector('main h1').getBoundingClientRect().right})`);
    check(`${width}px sem overflow`,layout.scroll<=layout.width+1 && layout.h1<=layout.width+1,layout);
    if(width<900){
      check(`${width}px mobile sem sticky`,await evaluate(`getComputedStyle(document.querySelector('.visual-stage')).position!=='sticky'`));
      await evaluate(`document.querySelector('[data-scene="presence"]').scrollIntoView({behavior:'instant',block:'start'})`);
      await delay(500);
      check(`${width}px presença em fluxo natural`,await evaluate(`getComputedStyle(document.querySelector('[data-scene="presence"]')).visibility==='visible'`));
    }
    if(width<768){
      await evaluate(`document.querySelector('[data-scene="immersion"]').scrollIntoView({behavior:'instant',block:'start'})`);
      await delay(700);
      await screenshot('immersion-mobile-'+width);
      check(width+'px título da imersão íntegro',await evaluate(`(() => {const h=document.querySelector('[data-scene="immersion"] h2');return h.scrollWidth<=h.clientWidth+1 && h.getBoundingClientRect().top>=72;})()`));
    }
    if(width===375){await scroll(0);await screenshot('arrival-mobile');await evaluate(`document.querySelector('#primeiro-manifesto').scrollIntoView({behavior:'instant',block:'center'})`);await screenshot('manifesto-mobile');}
  }
  await scroll(0);
  await evaluate(`document.querySelector('header button[aria-controls="menu-mobile"]').click()`);
  await waitFor(`!!document.querySelector('#menu-mobile')`);
  check('Menu acessível durante a experiência',await evaluate(`document.querySelector('#menu-mobile').getAttribute('role')==='dialog'`));
  await evaluate(`document.querySelector('#menu-mobile button[aria-label="Fechar menu"]').click()`);
  await viewport(1440);
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await scroll(0);
  check('Reduced motion sem timeline longa',await triggerCount()===0);
  check('Reduced motion conserva todas as cenas',await evaluate(`!document.querySelector('.institutional-journey').dataset.motion && [...document.querySelectorAll('.visual-scene')].every(e=>getComputedStyle(e).visibility==='visible')`));
  await screenshot('reduced-motion');
  await rpc('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
  await delay(300);
  check('Retorno à animação sem duplicação',await triggerCount()===1);
  for(const route of ['/cursos/direito','/cursos/enfermagem','/cursos/psicologia','/institucional/diretoria-docentes']){
    await navigate(route);
    check(`Rota interna preservada ${route}`,await evaluate(`!document.querySelector('.institutional-journey') && document.querySelectorAll('main h1').length===1`));
  }

  await viewport(1440);
  await navigate('/');
  await evaluate(`document.querySelector('.institutional-signature').scrollIntoView({behavior:'instant',block:'start'})`);
  await waitFor(`document.querySelector('.institutional-signature img').complete && document.querySelector('.institutional-signature img').naturalWidth>0`);
  check('Assinatura FAUNA após a experiência',await evaluate(`document.querySelector('#signature-title').textContent==='FAUNA'`));
  await screenshot('signature-desktop');
  check('Formação sem grade convencional de cards',await evaluate(`document.querySelectorAll('.institutional-course').length===3 && document.querySelector('#formation-title').textContent.includes('trajetória')`));
  for(const slug of ['direito','enfermagem','psicologia']){
    await evaluate(`document.querySelector('.course-${slug}').scrollIntoView({behavior:'instant',block:'center'})`);
    await waitFor(`document.querySelector('.course-${slug} img').complete && document.querySelector('.course-${slug} img').naturalWidth>0`);
    const course=await evaluate(`(() => {const article=document.querySelector('.course-${slug}');return{href:article.querySelector('a').getAttribute('href'),label:article.querySelector('h3').textContent,src:article.querySelector('img').getAttribute('src')};})()`);
    check(`Formação ${slug} íntegra e com rota correta`,course.href==='/cursos/'+slug&&course.src.includes('-concept.jpg'),course);
    if(slug==='direito')await screenshot('formation-desktop');
  }
  await evaluate(`document.querySelector('.institutional-invitation').scrollIntoView({behavior:'instant',block:'center'})`);
  check('Encerramento identificado como proposta editorial',await evaluate(`document.querySelector('.institutional-invitation').innerText.includes('Proposta editorial sujeita à validação institucional.')`));
  await screenshot('invitation-desktop');
  for(const width of [375,390,430,768,1440]){
    await viewport(width);
    for(const selector of ['.institutional-signature','.institutional-formation-intro','.course-direito','.course-enfermagem','.course-psicologia','.institutional-invitation']){
      await evaluate(`document.querySelector('${selector}').scrollIntoView({behavior:'instant',block:'center'})`);
      const bounds=await evaluate(`(() => {const section=document.querySelector('${selector}');return{width:innerWidth,scroll:document.documentElement.scrollWidth,clipped:[...section.querySelectorAll('h2,h3,p,a')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left < -1||r.right>innerWidth+1);}).map(e=>e.textContent)};})()`);
      check(`${width}px ${selector} sem cortes horizontais`,bounds.scroll<=bounds.width+1&&bounds.clipped.length===0,bounds);
    }
    if(width===375){
      await evaluate(`document.querySelector('.institutional-signature-copy').scrollIntoView({behavior:'instant',block:'center'})`);await screenshot('signature-mobile');
      await evaluate(`document.querySelector('.course-direito .institutional-course-copy').scrollIntoView({behavior:'instant',block:'center'})`);await screenshot('formation-mobile');
    }
  }

  // Reter só as imagens simula latência sem impedir a montagem do aplicativo.
  await rpc('Network.enable');
  await rpc('Network.setCacheDisabled',{cacheDisabled:true});
  await rpc('Fetch.enable',{patterns:[{urlPattern:'*/assets/cinematic/*',requestStage:'Request'}]});
  await rpc('Page.navigate',{url:'http://127.0.0.1:5173/'});
  await waitFor(`!!document.querySelector('main h1')`);
  await delay(1000);
  check('Imagens lentas: requisições retidas',delayedImages.length>0);
  const initialHeight=await evaluate(`document.querySelector('.visual-stage').getBoundingClientRect().height`);
  check('Imagens lentas: título legível e espaço reservado',await evaluate(`document.querySelector('main h1').getBoundingClientRect().height>50 && getComputedStyle(document.querySelector('.visual-copy')).visibility==='visible'`));
  await screenshot('slow-image-loading');
  for(const requestId of delayedImages.splice(0))await rpc('Fetch.continueRequest',{requestId});
  await rpc('Fetch.disable');
  await waitFor(`[...document.querySelectorAll('.visual-scene img')].every(i=>i.complete && i.naturalWidth>0)`);
  const finalHeight=await evaluate(`document.querySelector('.visual-stage').getBoundingClientRect().height`);
  check('Imagens lentas: carregam sem salto de layout',Math.abs(finalHeight-initialHeight)<1,{initialHeight,finalHeight});
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