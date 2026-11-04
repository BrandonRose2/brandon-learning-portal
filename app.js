/* ================= Learning Portal engine ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const byId = id => G.find(g => g.id === id);
const TODAY = new Date().toLocaleDateString('en-CA');
const CAT_ORDER = ['Web Foundations','Full Stack','Programming & Data','APIs & Automation','E-commerce & Ads','Cloud & DevOps','Security','Mobile','Tools & Business'];
const vidUrl = v => v[4] || ('https://www.youtube.com/results?search_query=' + encodeURIComponent(v[0] + ' ' + v[1].split(' OR ')[0].replace(/\s*\(.*\)/,'')));
const chName = c => c.replace(/ OR /g, ' / ');

/* ---------- state ---------- */
const DEF = { xp:0, done:{}, qc:{}, best:{}, watched:{}, known:{}, iv:{}, proj:{}, streak:{last:'',n:0}, badges:{}, decoded:0, arenaBest:0, journey:0 };
let S;
try { S = Object.assign(JSON.parse(JSON.stringify(DEF)), JSON.parse(localStorage.getItem('lp2') || '{}')); } catch (e) { S = JSON.parse(JSON.stringify(DEF)); }
function save(){ try { localStorage.setItem('lp2', JSON.stringify(S)); } catch (e) {} }
(function(){ const y = new Date(Date.now() - 864e5).toLocaleDateString('en-CA');
  if (S.streak.last !== TODAY) { S.streak.n = S.streak.last === y ? S.streak.n + 1 : 1; S.streak.last = TODAY; save(); } })();

/* ---------- levels / xp ---------- */
const LEVELS = [[0,'Curious Beginner','🌱'],[150,'Code Apprentice','🔧'],[400,'Junior Dev','💻'],[900,'Mid-Level Dev','⚡'],[1700,'Senior Dev','🚀'],[2800,'Staff Engineer','🧠'],[4200,'Principal Engineer','🏗'],[6000,'CTO Mode','👑']];
function lvl(xp){ let i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i+1][0]) i++;
  const nx = LEVELS[i+1]; return { i, name:LEVELS[i][1], e:LEVELS[i][2], min:LEVELS[i][0], next: nx ? nx[0] : null }; }
function addXP(n, why){ const before = lvl(S.xp).i; S.xp += n; save(); toast(`+${n} XP${why ? ' · ' + why : ''}`);
  const L = lvl(S.xp); if (L.i > before) { confetti(); toast(`${L.e} LEVEL UP! You're now a ${L.name}`, 'big'); }
  hud(); checkBadges(); }

/* ---------- badges ---------- */
const nDone = () => Object.values(S.done).filter(Boolean).length;
const BADGES = [
  ['first','👣','First Steps','Complete 1 topic', () => nDone() >= 1],
  ['five','🔥','On a Roll','Complete 5 topics', () => nDone() >= 5],
  ['ten','🎯','Double Digits','Complete 10 topics', () => nDone() >= 10],
  ['twenty','🧩','Polymath','Complete 20 topics', () => nDone() >= 20],
  ['all','🏆','Portal Master','Complete every topic', () => nDone() >= G.length],
  ['perfect','💯','Perfect Score','Ace a topic quiz', () => G.some(g => S.best[g.id] === g.quiz.length)],
  ['cat','🥇','Category Champion','Finish a whole category', () => CAT_ORDER.some(c => { const t = G.filter(g => g.cat === c); return t.length && t.every(g => S.done[g.id]); })],
  ['streak3','📅','Hat Trick','3-day streak', () => S.streak.n >= 3],
  ['streak7','🗓','Week Warrior','7-day streak', () => S.streak.n >= 7],
  ['hunter','🕵️','Job Hunter','Decode a job listing', () => S.decoded >= 1],
  ['speed','⚡','Speed Demon','Score 8+ in Quiz Arena', () => S.arenaBest >= 8],
  ['memory','🧠','Memory Palace','Know 50 flashcards', () => Object.keys(S.known).length >= 50],
  ['big','🗺','Big-Picture Thinker','Finish the customer journey', () => S.journey >= JOURNEY.length - 1],
  ['builder','🏗','Builder','Finish a capstone project', () => PROJECTS.some(p => p.steps.every((s,i) => S.proj[p.id+':'+i]))]
];
function checkBadges(){ BADGES.forEach(([id,e,n,d,t]) => { if (!S.badges[id] && t()) { S.badges[id] = TODAY; save(); setTimeout(() => { toast(`${e} Badge unlocked: ${n}`, 'big'); confetti(); }, 400); } }); }

/* ---------- big picture: layers, journey, projects ---------- */
const LAYERS = [
  ['📣','Attract customers','Get attention and traffic', ['seo','meta-ads','google-ads','tiktok-ads','other-ads','google-analytics']],
  ['🖥','What people see & use','Websites, stores and apps', ['html','web-design','tailwind','javascript','react','shopify','react-native','ios','app-dev']],
  ['⚙️','The brains','Backend logic, APIs and AI', ['web-dev','full-stack','nodejs','python','rust','api','json','llms']],
  ['🗄','Where data lives','Databases and data collection', ['mysql','postgresql','web-scraping','dagster']],
  ['🔗','Connect & automate','Glue tools together so work runs itself', ['automations','twilio','slack','notion']],
  ['🚀','Ship & run it','Version, package, host and secure', ['git','terminal','ubuntu','docker','kubernetes','terraform','aws','azure','dns']],
  ['🛡','Protect it','Security wraps every layer', ['web-security','network-security']],
  ['🧰','Your workbench','Where you write and build', ['vscode','replit','xcode']],
  ['💼','Business model','How it all makes money', ['ecommerce','saas']]
];
const JOURNEY = [
  ['📱 Maya scrolls TikTok and sees your product video. You tested 10 hooks an LLM helped you draft; this one won.', ['tiktok-ads','llms']],
  ['🌐 She taps the link. DNS turns yourbrand.com into your store\'s server address, and HTTPS/TLS encrypts the connection. Cloudflare\'s WAF quietly blocks bots probing your checkout for weaknesses.', ['dns','network-security','web-security']],
  ['🛍 Your Shopify store loads: HTML for structure, Tailwind/CSS for the look, JavaScript for the slide-out cart, all laid out with conversion-focused web design.', ['shopify','html','tailwind','javascript','web-design','web-dev']],
  ['📊 The GA4 tag plus the TikTok and Meta pixels fire, recording the visit and which ad brought her.', ['google-analytics','tiktok-ads','meta-ads']],
  ['💳 She checks out. Shopify fires an orders/create webhook, a JSON payload, to your API.', ['ecommerce','shopify','api','json']],
  ['⚙️ Your Node.js (or Python) service, running in a Docker container on AWS, validates it and saves the order to PostgreSQL (or MySQL).', ['nodejs','python','docker','aws','postgresql','mysql']],
  ['🤖 An automation kicks off: Twilio texts Maya her confirmation, Slack pings your team, and Notion adds a card to the fulfillment board.', ['automations','twilio','slack','notion']],
  ['🕷 Overnight, a Python scraper checks competitor prices and an LLM turns the changes into a 5-bullet Slack digest.', ['web-scraping','python','llms','slack']],
  ['📈 Next morning: GA4 + ad dashboards show which ad, audience and keyword made money (ROAS). You move budget to winners and retarget Maya on Instagram, YouTube and Google.', ['google-analytics','meta-ads','google-ads','other-ads','seo']],
  ['🛠 You ship a new feature: write it in VS Code, commit with Git, push to GitHub. GitHub Actions builds the image and deploys it to Kubernetes / an Ubuntu server, which you manage from the terminal. Some workloads run on Azure for a client who requires it.', ['vscode','git','terminal','ubuntu','kubernetes','azure']],
  ['💼 Other brands want your setup. You package it as a monthly-subscription SaaS: a React web dashboard and a React Native / iOS companion app built in Xcode, first prototyped on Replit. You are now a full-stack builder.', ['saas','react','full-stack','react-native','ios','xcode','replit','app-dev']]
];
const PROJECTS = [
  { id:'pj-shop', e:'🛍', name:'Launch & scale a Shopify brand', proves:'E-commerce Manager · Growth Marketer · Shopify Developer',
    pitch:'Take a product from zero to tracked, automated sales.', steps:[
    ['Buy a domain and point it at Shopify (DNS: A + CNAME records).', ['dns','shopify']],
    ['Build the store: theme, product pages, conversion-focused layout; tweak Liquid/HTML/CSS.', ['shopify','web-design','html','tailwind']],
    ['Install GA4 + Meta, TikTok and Google pixels; verify purchase events fire.', ['google-analytics','meta-ads','tiktok-ads','google-ads']],
    ['Write product SEO (titles, descriptions, alt text) and generate 20 ad hooks with an LLM.', ['seo','llms']],
    ['Launch a $20/day test: Meta Advantage+, TikTok Spark Ads, Google Performance Max.', ['meta-ads','tiktok-ads','google-ads','other-ads']],
    ['Automate: order webhook → Twilio SMS + Slack alert + Notion fulfillment card.', ['automations','api','json','twilio','slack','notion']],
    ['Weekly review: ROAS, CAC, AOV, conversion rate. Kill losers, scale winners.', ['ecommerce','google-analytics']]
  ]},
  { id:'pj-lead', e:'🏢', name:'AI lead-response bot (property management)', proves:'Automation Engineer · AI Engineer · Solutions Engineer',
    pitch:'Answer every rental inquiry in under 60 seconds, 24/7.', steps:[
    ['Inquiry form on a simple web page (HTML + Tailwind).', ['html','tailwind']],
    ['Form posts JSON to a Python FastAPI (or Node/Express) endpoint protected by an API key.', ['python','nodejs','api','json']],
    ['Send the inquiry + listing data to an LLM to draft a personal reply with tour times.', ['llms']],
    ['Text the reply with Twilio; post the lead to a Slack channel for the leasing team.', ['twilio','slack']],
    ['Store every lead and reply in PostgreSQL for reporting.', ['postgresql']],
    ['Containerize with Docker, deploy to AWS, version everything in Git.', ['docker','aws','git']],
    ['Lock it down: secrets in env vars, HTTPS, rate limits, input validation, prompt-injection guardrails.', ['network-security','web-security']]
  ]},
  { id:'pj-saas', e:'💼', name:'Build & launch a micro-SaaS', proves:'Full-Stack Developer · Founder · Product Engineer',
    pitch:'A paid web app with real users and recurring revenue.', steps:[
    ['Prototype the idea fast on Replit; validate with 5 potential users.', ['replit','saas']],
    ['Build the React frontend and a Node.js API; data in PostgreSQL.', ['react','nodejs','postgresql','full-stack']],
    ['Add Stripe subscriptions via its REST API and webhooks.', ['api','json']],
    ['Develop in VS Code, Git branches + pull requests on GitHub.', ['vscode','git']],
    ['Ship with Docker to AWS or Azure; custom domain via DNS.', ['docker','aws','azure','dns']],
    ['Landing page SEO + GA4 conversion tracking + a small Google Ads test.', ['seo','google-analytics','google-ads']],
    ['Optional: React Native companion app.', ['react-native','app-dev']]
  ]},
  { id:'pj-scrape', e:'🕷', name:'Competitor price & market tracker', proves:'Data Engineer · Automation Specialist · Analyst',
    pitch:'Daily market intel delivered to Slack, with zero manual work.', steps:[
    ['Inspect target pages in the browser dev tools; find the data or hidden JSON API.', ['web-scraping','json','html']],
    ['Write a Python scraper (requests + BeautifulSoup, or Playwright for JS sites).', ['python','web-scraping']],
    ['Save daily snapshots to MySQL; write SQL to detect price changes.', ['mysql']],
    ['Have an LLM summarize the day\'s changes into plain English.', ['llms']],
    ['Post the digest to Slack and log it in Notion.', ['slack','notion','automations']],
    ['Schedule it with cron on an Ubuntu server you manage from the terminal.', ['ubuntu','terminal']]
  ]}
];
const PATHS = [
  ['pa-fs','🧱','Full-Stack Web Developer','The most common remote dev job', ['html','web-design','javascript','tailwind','json','git','react','nodejs','api','postgresql','mysql','full-stack','dns','docker']],
  ['pa-ai','🤖','AI & Automation Engineer','The hottest remote niche right now', ['python','json','api','llms','automations','web-scraping','twilio','slack','notion','dagster','replit','saas']],
  ['pa-ec','🛒','E-commerce & Growth','Marketing roles that pay for technical skills', ['ecommerce','shopify','seo','google-analytics','meta-ads','google-ads','tiktok-ads','other-ads','automations','llms']],
  ['pa-cloud','☁️','Cloud & DevOps','Keep systems running and secure', ['terminal','ubuntu','git','dns','network-security','web-security','docker','kubernetes','terraform','aws','azure']],
  ['pa-sec','🔐','Cybersecurity','A huge remote market with a talent shortage', ['terminal','ubuntu','dns','html','javascript','api','network-security','web-security','aws','azure','llms']],
  ['pa-mob','📱','Mobile App Developer','Ship apps to the App Store', ['app-dev','javascript','react','react-native','ios','xcode','api','json','git']]
];

/* ---------- UI helpers ---------- */
function toast(msg, cls=''){ const d = document.createElement('div'); d.className = 'toast ' + cls; d.textContent = msg; $('#toasts').appendChild(d); setTimeout(() => d.classList.add('out'), 2600); setTimeout(() => d.remove(), 3200); }
function copyText(t, btn){ const tmp = document.createElement('div'); tmp.innerHTML = t; const txt = tmp.innerText;
  navigator.clipboard.writeText(txt).then(() => { const o = btn.textContent; btn.textContent = 'Copied ✓'; setTimeout(() => btn.textContent = o, 1400); }).catch(() => { btn.textContent = 'Select text to copy'; }); }
function copyCode(btn){ copyText(esc(btn.nextElementSibling.innerText), btn); }
function confetti(){ const c = $('#fx'), x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
  const cols = ['#7c5cff','#22d3ee','#34d399','#fbbf24','#f472b6','#60a5fa'];
  const P = Array.from({length:140}, () => ({ x: innerWidth/2, y: innerHeight/3, vx:(Math.random()-.5)*16, vy:Math.random()*-14-4, s:Math.random()*7+4, c:cols[Math.random()*6|0], r:Math.random()*6 }));
  let f = 0; (function step(){ x.clearRect(0,0,c.width,c.height); P.forEach(p => { p.vy += .45; p.x += p.vx; p.y += p.vy; p.r += .2; x.save(); x.translate(p.x,p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6); x.restore(); });
    if (++f < 110) requestAnimationFrame(step); else x.clearRect(0,0,c.width,c.height); })(); }
const chipLink = id => { const g = byId(id); return g ? `<a class="tchip ${S.done[id]?'d':''}" href="#${id}">${g.e} ${g.t}</a>` : ''; };
const pct = ids => ids.length ? Math.round(100 * ids.filter(i => S.done[i]).length / ids.length) : 0;
const bar = (p, cls='') => `<div class="bar ${cls}"><i style="width:${p}%"></i></div>`;

/* ---------- sidebar ---------- */
function hud(){ const L = lvl(S.xp); const span = L.next ? L.next - L.min : 1; const p = L.next ? Math.min(100, Math.round(100*(S.xp-L.min)/span)) : 100;
  $('#hud').innerHTML = `<div class="hud-top"><span class="lvl-e">${L.e}</span><div><b>${L.name}</b><small>Level ${L.i+1} · ${S.xp} XP</small></div><span class="streak" title="Daily streak">🔥${S.streak.n}</span></div>
    ${bar(p,'xp')}<small class="muted">${L.next ? (L.next - S.xp) + ' XP to ' + LEVELS[L.i+1][1] : 'Max level reached!'}</small>`; }
function sidebar(filter=''){ const f = filter.toLowerCase(); let html = '';
  CAT_ORDER.forEach(c => { const t = G.filter(g => g.cat === c && (!f || (g.t+' '+g.tag+' '+g.kw.join(' ')).toLowerCase().includes(f)));
    if (!t.length) return; html += `<div class="cat">${c}</div>` + t.map(g => `<a class="topic" href="#${g.id}" data-id="${g.id}"><span>${g.e} ${g.t}</span><span class="dot ${S.done[g.id]?'done':''}"></span></a>`).join(''); });
  $('#toclist').innerHTML = html || '<p class="muted" style="padding:8px">No matches.</p>'; markActive(); }
function markActive(){ const id = location.hash.slice(1) || 'home'; document.querySelectorAll('.topic,.navl').forEach(a => a.classList.toggle('active', a.dataset.id === id)); }

/* ---------- HOME ---------- */
function homeView(){ const L = lvl(S.xp); const left = G.filter(g => !S.done[g.id]);
  const seed = [...TODAY].reduce((a,c) => a + c.charCodeAt(0), 0); const m = left.length ? left[seed % left.length] : null;
  return `<div class="hero"><div><h1>Hey Brandon 👋</h1><p class="lead">Learn it, connect it, then show employers you can use it. Every quiz, video and flashcard earns XP.</p></div>
    <div class="stats"><div><b>${L.e} ${L.name}</b><small>${S.xp} XP</small></div><div><b>${nDone()}/${G.length}</b><small>topics done</small></div><div><b>🔥 ${S.streak.n}</b><small>day streak</small></div><div><b>${Object.keys(S.badges).length}/${BADGES.length}</b><small>badges</small></div></div></div>
  ${m ? `<div class="mission"><div><div class="kicker">🎯 Today's mission</div><h2>${m.e} ${m.t}</h2><p>${m.tag}</p></div><a class="btn big" href="#${m.id}">Start mission →</a></div>` : ''}
  <div class="quick">
    <a href="#map" class="qcard q1"><span>🗺</span><b>The Big Picture</b><small>See how every topic fits together in one business</small></a>
    <a href="#decoder" class="qcard q2"><span>🕵️</span><b>Job Decoder</b><small>Paste a job listing and get your study plan</small></a>
    <a href="#arena" class="qcard q3"><span>⚡</span><b>Quiz Arena</b><small>Timed rounds with combo multipliers</small></a>
    <a href="#projects" class="qcard q4"><span>🏗</span><b>Capstone Projects</b><small>Portfolio builds that combine many topics</small></a>
  </div>
  <h2 class="sec">🛤 Career paths</h2><div class="paths">${PATHS.map(([id,e,n,d,ids]) => `<a class="pathc" href="#paths"><div><span class="pe">${e}</span><b>${n}</b><small>${d}</small></div>${bar(pct(ids))}<small class="muted">${pct(ids)}% · ${ids.length} topics</small></a>`).join('')}</div>
  ${CAT_ORDER.map(c => { const t = G.filter(g => g.cat === c); return `<h2 class="sec">${c} <small class="muted">${t.filter(g=>S.done[g.id]).length}/${t.length}</small></h2><div class="tiles">${t.map(g => `<a class="tile ${S.done[g.id]?'d':''}" href="#${g.id}"><span class="te">${g.e}</span><b>${g.t}</b><small>${g.lvl}</small>${S.done[g.id]?'<i class="ck">✓</i>':''}</a>`).join('')}</div>`; }).join('')}
  <h2 class="sec">🏅 Badges</h2><div class="badges">${BADGES.map(([id,e,n,d]) => `<div class="badge ${S.badges[id]?'on':''}" title="${d}"><span>${e}</span><b>${n}</b><small>${d}</small></div>`).join('')}</div>
  <p class="muted fine">Progress is saved in this browser.</p>`; }

/* ---------- TOPIC ---------- */
let cur = { id:null, tab:'learn', mode:'eli5', q:null, fc:null };
const TABS = [['learn','📖 Learn'],['world','🌎 Real world'],['connect','🔗 Connects'],['try','🛠 Try it'],['watch','🎬 Watch'],['quiz','🧠 Quiz'],['cards','🃏 Flashcards'],['interview','💼 Interview']];
function topicView(g){ const i = G.indexOf(g), nx = G[(i+1) % G.length];
  return `<div class="t-head"><div class="t-emoji">${g.e}</div><div><div class="kicker">${g.cat} · ${g.lvl}</div><h1>${g.t} ${S.done[g.id]?'<span class="donebadge">✓ Completed</span>':''}</h1><p class="lead">${g.tag}</p></div></div>
  <div class="role"><b>🗺 Its role in the big picture:</b> ${g.role} <a href="#map">See the map →</a></div>
  <div class="joblens"><div><div class="jl-h">🎯 How it shows up in job listings</div><div class="chips">${g.jobs.map(j => `<span class="chip">${j}</span>`).join('')}</div></div>
    <div class="resume"><div class="jl-h">📝 Resume bullet <small class="muted">(edit to match what you actually built)</small></div><p>${g.res}</p><button class="btn sm" onclick="copyText(byId('${g.id}').res,this)">Copy</button></div></div>
  <div class="tabs">${TABS.map(([k,l]) => `<button class="tab ${cur.tab===k?'on':''}" onclick="setTab('${k}')">${l}</button>`).join('')}</div>
  <div id="panel" class="panel">${panel(g)}</div>
  <div class="complete">${S.done[g.id] ? `<button class="btn ghost" onclick="toggleDone('${g.id}')">Undo complete</button>` : `<button class="btn big" onclick="toggleDone('${g.id}')">🏁 Mark topic complete · +50 XP</button>`}
    <a class="btn ghost" href="#${nx.id}">Next: ${nx.e} ${nx.t} →</a></div>`; }
function panel(g){ switch (cur.tab) {
  case 'learn': return `<div class="seg"><button class="${cur.mode==='eli5'?'on':''}" onclick="setMode('eli5')">🧒 Explain like I'm 5</button><button class="${cur.mode==='pro'?'on':''}" onclick="setMode('pro')">👔 Explain like a pro</button></div>
    <div class="explain">${cur.mode==='eli5' ? g.eli5 : g.pro}</div><div class="why"><b>💰 Why employers care:</b> ${g.why}</div>
    <h3>Core concepts <small class="muted">tap each to open</small></h3><div class="acc">${g.con.map(([t,d]) => `<details><summary>${t}</summary><p>${d}</p></details>`).join('')}</div>`;
  case 'world': return `<div class="cards">${g.ex.map(([ind,t,d]) => `<div class="card"><span class="tag">${ind}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`;
  case 'connect': return `<p class="muted">Nothing is learned in isolation. Here's how <b>${g.t}</b> plugs into other topics in the portal:</p>
    <div class="links">${g.link.filter(([id]) => byId(id)).map(([id,why]) => { const o = byId(id); return `<a class="lk" href="#${id}"><span class="lke">${o.e}</span><div><b>${g.t} + ${o.t}</b><p>${why}</p></div>${S.done[id]?'<i class="ck">✓</i>':''}</a>`; }).join('')}</div>
    <div class="callout">Want the full picture? Walk through the <a href="#map">customer journey on the Big Picture map</a>, or build a <a href="#projects">capstone project</a> that uses this topic.</div>`;
  case 'try': return `<p>${g.code.i}</p><pre><button class="copy" onclick="copyCode(this)">Copy</button><code>${esc(g.code.s)}</code></pre><div class="callout">🚀 <b>Level up:</b> ${g.code.n}</div>`;
  case 'watch': return `<p class="muted">Watch in order. Each link opens YouTube; if it's a search, the video is the top result. Mark each one watched for XP.</p>` + g.vid.map((v,i) => { const k = g.id+':'+i;
    return `<div class="video ${S.watched[k]?'w':''}"><a href="${vidUrl(v)}" target="_blank" rel="noopener" class="vlink"><div class="play">▶</div><div><b>${v[0]}</b><span>${chName(v[1])} · ${v[2]}</span><p>${v[3]}</p></div></a><button class="btn sm ${S.watched[k]?'on':''}" onclick="watch('${k}')">${S.watched[k]?'✓ Watched':'Mark watched · +15'}</button></div>`; }).join('') +
    `<h3>Free resources</h3><ul>${g.links.map(([t,u]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul>`;
  case 'quiz': return quizView(g);
  case 'cards': return cardsView(g);
  case 'interview': return `<div class="callout">🎤 Answer out loud first, then reveal. Tie answers to something you built, using STAR: <b>S</b>ituation, <b>T</b>ask, <b>A</b>ction, <b>R</b>esult.</div>` + g.iv.map(([q,a],i) => { const k = g.id+':'+i;
    return `<div class="ivq"><div class="ivh">${q}</div>${S.iv[k] ? `<div class="iva">${a}</div>` : `<button class="btn sm" onclick="reveal('${k}')">Reveal a strong answer · +5</button>`}</div>`; }).join('');
} }
function setTab(t){ cur.tab = t; if (t === 'quiz') cur.q = { i:0, score:0, pick:null }; if (t === 'cards') { const g = byId(cur.id); cur.fc = { order: shuffle(g.fc.map((_,i) => i)), i:0, flip:false, got:0 }; } route(true); }
function setMode(m){ cur.mode = m; $('#panel').innerHTML = panel(byId(cur.id)); }
function rp(){ $('#panel').innerHTML = panel(byId(cur.id)); }
function toggleDone(id){ S.done[id] = !S.done[id]; save(); if (S.done[id]) { confetti(); addXP(50, 'Topic complete'); } else { S.xp = Math.max(0, S.xp - 50); save(); hud(); } sidebar($('#search').value); route(true); }
function watch(k){ if (!S.watched[k]) { S.watched[k] = 1; save(); addXP(15, 'Video watched'); } rp(); }
function reveal(k){ S.iv[k] = 1; save(); addXP(5, 'Interview prep'); rp(); }

/* quiz */
function quizView(g){ const q = cur.q || (cur.q = { i:0, score:0, pick:null });
  if (q.i >= g.quiz.length) { const s = q.score, n = g.quiz.length; return `<div class="qend"><div class="big-e">${s===n?'🏆':s>=n-1?'🎉':'💪'}</div><h2>${s} / ${n}</h2><p>${s===n?'Perfect! You own this topic.':s>=n-1?'So close. One more round?':'Review the Learn tab and try again. Repetition is how it sticks.'}</p><p class="muted">Best: ${S.best[g.id]||0}/${n}</p><button class="btn" onclick="setTab('quiz')">Retry quiz</button> <button class="btn ghost" onclick="setTab('cards')">Flashcards →</button></div>`; }
  const [qq,opts,a,x] = g.quiz[q.i];
  return `<div class="quiz"><div class="qprog">${g.quiz.map((_,j) => `<i class="${j<q.i?'p':j===q.i?'c':''}"></i>`).join('')}<span>Score ${q.score}</span></div><h3>${qq}</h3>
  <div class="opts">${opts.map((o,j) => `<button class="opt ${q.pick==null?'':j===a?'right':j===q.pick?'wrong':'dim'}" ${q.pick!=null?'disabled':''} onclick="pick(${j})"><span>${'ABCD'[j]}</span>${o}</button>`).join('')}</div>
  ${q.pick!=null ? `<div class="xbox ${q.pick===a?'ok':'no'}"><b>${q.pick===a?'✅ Correct!':'❌ Not quite.'}</b> ${x}</div><button class="btn" onclick="nextQ()">${q.i+1<g.quiz.length?'Next question →':'See results'}</button>` : ''}</div>`; }
function pick(j){ const g = byId(cur.id), q = cur.q; q.pick = j; if (j === g.quiz[q.i][2]) { q.score++; const k = g.id+':'+q.i; if (!S.qc[k]) { S.qc[k] = 1; save(); addXP(10, 'Correct answer'); } } rp(); }
function nextQ(){ const g = byId(cur.id), q = cur.q; q.i++; q.pick = null;
  if (q.i >= g.quiz.length) { if (q.score > (S.best[g.id]||0)) { S.best[g.id] = q.score; save(); } if (q.score === g.quiz.length) confetti(); checkBadges(); } rp(); }

/* flashcards (topic + global deck share this) */
function fcCard(front, back, f, idx, total, ns){
  return `<div class="fcwrap"><div class="qprog"><span>Card ${idx+1} / ${total} · Got it: ${f.got}</span></div>
  <div class="flip ${f.flip?'on':''}" onclick="${ns}Flip()"><div class="face front"><div>${front}</div><small>tap to flip</small></div><div class="face back"><div>${back}</div></div></div>
  <div class="fcbtns"><button class="btn ghost" onclick="${ns}Ans(0)">😅 Still learning</button><button class="btn" onclick="${ns}Ans(1)">💪 Got it</button></div></div>`; }
function cardsView(g){ const f = cur.fc || (cur.fc = { order: shuffle(g.fc.map((_,i) => i)), i:0, flip:false, got:0 });
  if (f.i >= f.order.length) return `<div class="qend"><div class="big-e">🃏</div><h2>Deck done: ${f.got}/${f.order.length} known</h2><button class="btn" onclick="setTab('cards')">Shuffle & go again</button> <button class="btn ghost" onclick="setTab('quiz')">Take the quiz →</button></div>`;
  const [fr,bk] = g.fc[f.order[f.i]]; return fcCard(fr, bk, f, f.i, f.order.length, 't'); }
function tFlip(){ cur.fc.flip = !cur.fc.flip; document.querySelector('.flip').classList.toggle('on'); }
function tAns(ok){ const g = byId(cur.id), f = cur.fc; if (ok) { f.got++; const k = g.id+':'+f.order[f.i]; if (!S.known[k]) { S.known[k] = 1; save(); addXP(2, 'Card learned'); } } f.i++; f.flip = false; rp(); }

/* ---------- MAP ---------- */
let jstep = -1;
function mapView(){ const hl = jstep >= 0 ? JOURNEY[jstep][1] : [];
  return `<h1>🗺 The Big Picture</h1><p class="lead">Every topic is one piece of a single machine: an online business. Tap any piece to see its role, or play the customer journey to watch them work together.</p>
  <div class="journey"><div class="jtext">${jstep < 0 ? '▶️ <b>Customer journey:</b> follow one shopper, Maya, from a TikTok ad to repeat customer. Watch which topics light up at each step.' : `<b>Step ${jstep+1}/${JOURNEY.length}</b> ${JOURNEY[jstep][0]}<div class="chips" style="margin-top:8px">${hl.map(chipLink).join('')}</div>`}</div>
    <div class="jbtns">${jstep > 0 ? '<button class="btn ghost" onclick="jgo(-1)">← Back</button>' : ''}<button class="btn" onclick="jgo(1)">${jstep < 0 ? 'Start journey' : jstep < JOURNEY.length-1 ? 'Next step →' : 'Restart ↺'}</button></div></div>
  <div class="layers">${LAYERS.map(([e,n,d,ids]) => `<div class="layer"><div class="lh"><span>${e}</span><div><b>${n}</b><small>${d}</small></div></div><div class="nodes">${ids.map(id => { const g = byId(id); if (!g) return '';
      return `<button class="node ${hl.includes(id)?'hl':''} ${S.done[id]?'d':''}" onclick="nodeInfo('${id}')">${g.e} ${g.t}</button>`; }).join('')}</div></div>`).join('')}</div>
  <div id="nodeinfo"></div>
  <div class="callout">💡 <b>Interview tip:</b> when someone asks "tell me about a system you built," describe it layer by layer like this map: how users arrive, what they see, the backend, the data, the automations, and how it's deployed. That's how senior engineers explain systems.</div>`; }
function jgo(d){ jstep = jstep + d; if (jstep >= JOURNEY.length) jstep = 0; if (jstep > S.journey) { S.journey = jstep; save(); if (jstep === JOURNEY.length-1) { confetti(); addXP(40, 'Journey complete'); } } route(true); }
function nodeInfo(id){ const g = byId(id); $('#nodeinfo').innerHTML = `<div class="ni"><div class="ni-h"><span>${g.e}</span><div><b>${g.t}</b><small>${g.cat}</small></div><a class="btn sm" href="#${id}">Open guide →</a></div><p>${g.role}</p><div class="chips">${g.link.slice(0,6).map(([o]) => chipLink(o)).join('')}</div></div>`;
  $('#nodeinfo').scrollIntoView({ behavior:'smooth', block:'nearest' }); }

/* ---------- PROJECTS & PATHS ---------- */
function projectsView(){ return `<h1>🏗 Capstone Projects</h1><p class="lead">Employers hire proof. Each project stitches many topics into one portfolio piece you can demo in an interview and link on your resume. Check off steps as you go (+20 XP each).</p>` +
  PROJECTS.map(p => { const n = p.steps.filter((s,i) => S.proj[p.id+':'+i]).length; return `<div class="proj"><div class="ph"><span class="pe">${p.e}</span><div><h2>${p.name}</h2><p>${p.pitch}</p><small class="muted">Proves you can be a: ${p.proves}</small></div></div>${bar(Math.round(100*n/p.steps.length))}
    <ol class="steps">${p.steps.map(([t,ids],i) => { const k = p.id+':'+i; return `<li class="${S.proj[k]?'d':''}"><label><input type="checkbox" ${S.proj[k]?'checked':''} onchange="projStep('${k}',this.checked)"> ${t}</label><div class="chips">${ids.map(chipLink).join('')}</div></li>`; }).join('')}</ol></div>`; }).join(''); }
function projStep(k, on){ S.proj[k] = on ? 1 : 0; save(); if (on) addXP(20, 'Project step'); route(true); }
function pathsView(){ return `<h1>🛤 Career Paths</h1><p class="lead">Ordered routes through the portal, matched to the remote roles you're applying for. Do them top to bottom.</p>` +
  PATHS.map(([id,e,n,d,ids]) => `<div class="proj"><div class="ph"><span class="pe">${e}</span><div><h2>${n}</h2><p>${d}</p></div><b class="pp">${pct(ids)}%</b></div>${bar(pct(ids))}
    <div class="pathsteps">${ids.map((t,i) => { const g = byId(t); return g ? `<a href="#${t}" class="ps ${S.done[t]?'d':''}"><i>${S.done[t]?'✓':i+1}</i>${g.e} ${g.t}</a>` : ''; }).join('<span class="arr">→</span>')}</div></div>`).join(''); }

/* ---------- ARENA ---------- */
let A = null, AT = null;
function arenaView(){ if (!A) return `<h1>⚡ Quiz Arena</h1><p class="lead">10 questions, 15 seconds each. Answer correctly in a row to build a combo: XP multiplies up to ×5.</p>
  <div class="arena-setup"><label>Question pool: <select id="apool"><option value="all">🌍 All topics</option><option value="done">✅ Topics I've completed</option>${CAT_ORDER.map(c => `<option>${c}</option>`).join('')}</select></label>
  <button class="btn big" onclick="arenaStart()">Start round ⚡</button></div><p class="muted">Personal best: ${S.arenaBest}/10</p>`;
  if (A.i >= A.pool.length) return `<div class="qend"><div class="big-e">${A.score>=8?'⚡':'🎮'}</div><h2>${A.score} / ${A.pool.length}</h2><p>Best combo: ×${A.maxc}</p><p class="muted">Personal best: ${S.arenaBest}</p><button class="btn" onclick="A=null;route(true)">Play again</button></div>`;
  const { g, q } = A.pool[A.i], [qq,opts,a,x] = q;
  return `<div class="arena"><div class="ahud"><span>Q ${A.i+1}/${A.pool.length}</span><span>Score ${A.score}</span><span class="combo ${A.combo>1?'hot':''}">Combo ×${Math.min(Math.max(A.combo,1),5)}</span></div><div class="timer"><i id="tbar" style="width:${A.t/15*100}%"></i></div>
  <div class="kicker">${g.e} ${g.t}</div><h3>${qq}</h3><div class="opts">${opts.map((o,j) => `<button class="opt ${A.pick==null?'':j===a?'right':j===A.pick?'wrong':'dim'}" ${A.pick!=null?'disabled':''} onclick="apick(${j})"><span>${'ABCD'[j]}</span>${o}</button>`).join('')}</div>
  ${A.pick!=null ? `<div class="xbox ${A.pick===a?'ok':'no'}"><b>${A.pick===a?'✅ Correct!':A.pick===-1?'⏰ Time\'s up.':'❌ Nope.'}</b> ${x}</div><button class="btn" onclick="anext()">Next →</button>` : ''}</div>`; }
function arenaStart(){ const f = $('#apool').value; const pool = [];
  G.forEach(g => { if (f === 'all' || (f === 'done' ? S.done[g.id] : g.cat === f)) g.quiz.forEach(q => pool.push({ g, q })); });
  if (pool.length < 4) { toast('Not enough questions in that pool yet. Complete more topics or pick another.'); return; }
  A = { pool: shuffle(pool).slice(0,10), i:0, score:0, combo:0, maxc:0, pick:null, t:15 }; route(true); tick(); }
function tick(){ clearInterval(AT); AT = setInterval(() => { if (!A || A.pick != null) return clearInterval(AT); A.t--; const b = $('#tbar'); if (b) b.style.width = (A.t/15*100) + '%'; if (A.t <= 0) apick(-1); }, 1000); }
function apick(j){ clearInterval(AT); const a = A.pool[A.i].q[2]; A.pick = j;
  if (j === a) { A.score++; A.combo++; A.maxc = Math.max(A.maxc, A.combo); addXP(3 * Math.min(A.combo,5), A.combo > 1 ? `Combo ×${Math.min(A.combo,5)}` : 'Arena'); } else A.combo = 0; route(true); }
function anext(){ A.i++; A.pick = null; A.t = 15; if (A.i >= A.pool.length) { if (A.score > S.arenaBest) { S.arenaBest = A.score; save(); } if (A.score >= 8) confetti(); checkBadges(); route(true); } else { route(true); tick(); } }

/* ---------- GLOBAL DECK ---------- */
let D = null;
function deckView(){ if (!D) return `<h1>🃏 Flashcard Deck</h1><p class="lead">Rapid-fire review across topics. Great for 10 minutes before an interview.</p>
  <div class="arena-setup"><label>Deck: <select id="dpool"><option value="all">🌍 Everything</option><option value="new">🆕 Cards I haven't learned yet</option>${CAT_ORDER.map(c => `<option>${c}</option>`).join('')}</select></label><button class="btn big" onclick="deckStart()">Shuffle & start</button></div>
  <p class="muted">${Object.keys(S.known).length} of ${G.reduce((n,g) => n + g.fc.length, 0)} cards learned.</p>`;
  if (D.i >= D.cards.length) return `<div class="qend"><div class="big-e">🧠</div><h2>${D.got}/${D.cards.length} known</h2><button class="btn" onclick="D=null;route(true)">New deck</button></div>`;
  const c = D.cards[D.i], g = byId(c.id); return `<div class="kicker">${g.e} ${g.t}</div>` + fcCard(g.fc[c.n][0], g.fc[c.n][1], D, D.i, D.cards.length, 'd'); }
function deckStart(){ const f = $('#dpool').value, cards = [];
  G.forEach(g => g.fc.forEach((_,n) => { const k = g.id+':'+n; if (f === 'all' || (f === 'new' ? !S.known[k] : g.cat === f)) cards.push({ id:g.id, n }); }));
  if (!cards.length) { toast('No cards in that deck. You know them all!'); return; } D = { cards: shuffle(cards).slice(0,30), i:0, flip:false, got:0 }; route(true); }
function dFlip(){ D.flip = !D.flip; document.querySelector('.flip').classList.toggle('on'); }
function dAns(ok){ const c = D.cards[D.i]; if (ok) { D.got++; const k = c.id+':'+c.n; if (!S.known[k]) { S.known[k] = 1; save(); addXP(2, 'Card learned'); } } D.i++; D.flip = false; route(true); }

/* ---------- JOB DECODER ---------- */
function decoderView(){ return `<h1>🕵️ Job Decoder</h1><p class="lead">Paste a job listing. You'll see which portal topics it asks for, how ready you are, what to study first, and a skills summary to adapt for your application.</p>
  <textarea id="jd" placeholder="Paste the full job description here…"></textarea><div style="margin:10px 0 24px"><button class="btn big" onclick="decode()">Decode this job 🔍</button></div><div id="jdout"></div>`; }
function decode(){ const txt = ($('#jd').value || '').toLowerCase(); if (!txt.trim()) { toast('Paste a job description first'); return; }
  const hits = G.map(g => { let n = 0; const found = []; g.kw.forEach(k => { const re = new RegExp('(^|[^a-z0-9])' + k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '(?![a-z0-9])','g'); const m = txt.match(re); if (m) { n += m.length; found.push(k); } }); return { g, n, found }; }).filter(h => h.n).sort((a,b) => b.n - a.n);
  if (!hits.length) { $('#jdout').innerHTML = '<div class="callout">No portal topics detected. Is this a non-technical role? Try another listing.</div>'; return; }
  const ready = hits.filter(h => S.done[h.g.id]), todo = hits.filter(h => !S.done[h.g.id]), cov = Math.round(100 * ready.length / hits.length);
  const summary = hits.map(h => '• ' + h.g.res.replace(/<[^>]+>/g,'')).join('\n');
  S.decoded++; save(); addXP(25, 'Job decoded');
  $('#jdout').innerHTML = `<div class="cov"><div class="ring" style="--p:${cov}"><b>${cov}%</b><small>ready</small></div><div><h2>${hits.length} skills detected</h2><p>You've completed ${ready.length}. ${todo.length ? 'Study the ones below in this order (most-mentioned first).' : 'You\'ve covered every skill they asked for. Go apply! 🚀'}</p></div></div>
  ${todo.length ? `<h3>📚 Your study plan for this job</h3><div class="plan">${todo.map((h,i) => `<a class="ps" href="#${h.g.id}"><i>${i+1}</i>${h.g.e} ${h.g.t}<small>mentioned ${h.n}× · ${h.found.slice(0,3).join(', ')}</small></a>`).join('')}</div>` : ''}
  ${ready.length ? `<h3>✅ Already covered</h3><div class="chips">${ready.map(h => chipLink(h.g.id)).join('')}</div>` : ''}
  <h3>📝 Draft skills summary for this application</h3><p class="muted">Starter bullets for your resume or cover letter. Keep only what you can back up, and make each one specific to your real experience.</p>
  <pre class="wrap"><button class="copy" onclick="copyCode(this)">Copy</button><code>${esc(summary)}</code></pre>`; }

/* ---------- router ---------- */
function route(keep){ const id = location.hash.slice(1) || 'home'; const g = byId(id);
  if (g) { if (cur.id !== id) { cur = { id, tab:'learn', mode:cur.mode, q:null, fc:null }; keep = false; } }
  if (id !== 'arena') { clearInterval(AT); }
  const views = { map:mapView, projects:projectsView, paths:pathsView, arena:arenaView, deck:deckView, decoder:decoderView };
  $('#main').innerHTML = g ? topicView(g) : (views[id] || homeView)();
  $('#side').classList.remove('open'); markActive(); if (!keep) window.scrollTo(0,0); }
$('#search').addEventListener('input', e => sidebar(e.target.value));
window.addEventListener('hashchange', () => route(false));
hud(); sidebar(); route(); checkBadges();
