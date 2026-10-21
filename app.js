const page=document.currentScript.dataset.page,app=document.getElementById('app');
const get=f=>fetch(f+'?t='+Date.now(),{cache:'no-store'}).then(r=>r.json());
const esc=s=>String(s??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
if(page==='index')get('content/pages/home.json').then(d=>app.innerHTML=`<h1>${esc(d.title)}</h1>${d.image?`<img src="${esc(d.image)}">`:''}<p>${esc(d.intro)}</p>`);
if(page==='about')get('content/pages/about.json').then(d=>app.innerHTML=`<h1>${esc(d.title)}</h1>${d.image?`<img src="${esc(d.image)}">`:''}<p>${esc(d.body)}</p>`);
if(page==='events')get('content/events/events.json').then(d=>app.innerHTML='<h1>Upcoming Events</h1>'+(d.events||[]).map(e=>`<div class="card"><h3>${esc(e.name)}</h3><b>${esc(e.date)}</b> · ${esc(e.location)}<p>${esc(e.details)}</p></div>`).join(''));
