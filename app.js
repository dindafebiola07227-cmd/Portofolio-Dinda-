/* Logika tampilan portofolio. Isi tulisan diambil dari content.js. */
(function(){
'use strict';
const P = PORTFOLIO;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const img = (src, alt, cls='') => `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.classList.add('broken')">`;
const ok = {};                       // status gambar: true kalau berhasil dimuat
function probe(src){ if(src in ok) return Promise.resolve(ok[src]);
  return new Promise(res => { const i = new Image(); i.onload = () => res(ok[src]=true); i.onerror = () => res(ok[src]=false); i.src = src; }); }

/* ---------- ISI STATIS ---------- */
document.title = `${P.nama} | Portofolio`;
$('#bigname').textContent = P.panggilan.toUpperCase();
$('#heroRole').textContent = P.peran;
$('#heroTag').textContent = P.tagline;
$('#heroCardText').textContent = `${P.nama}, mahasiswa D4 Teknik Informatika Politeknik Negeri Jember.`;
$('#cvBtn').href = P.kontak.cv;
$('#aboutTitle').innerHTML = `Halo, aku<br>${esc(P.panggilan)}.`;
$('#aboutText').innerHTML = P.tentang.map(t => `<p>${esc(t)}</p>`).join('');
const fcol = ['orange','teal','violet','pink'];
$('#facts').innerHTML = P.fakta.map((f,i) => `<div class="fact c-${fcol[i%4]}"><b>${esc(f.angka)}</b><span>${esc(f.label)}</span></div>`).join('');
const mq = P.marquee.map(t => `<span>${esc(t)}</span><span class="st">✦</span>`).join('');
$('#marquee').innerHTML = mq + mq + mq + mq;
$('#skills').innerHTML = P.keahlian.map(k => `<div class="skill c-${k.warna} reveal"><h3>${esc(k.kelompok)}</h3><div class="pills">${k.item.map(i=>`<span class="pill">${esc(i)}</span>`).join('')}</div></div>`).join('');

/* ---------- PROYEK ---------- */
$('#trProyek').innerHTML = P.proyek.map((p,i) => `
  <article class="card c-${p.warna}" data-open="proyek:${i}" tabindex="0" role="button" aria-label="Buka detail ${esc(p.judul)}">
    <div class="cover" data-letter="${esc(p.judul[0])}">${p.gambar[0] ? img(p.gambar[0], p.judul) : ''}<span class="badge">${esc(p.semester)}</span>${p.status==='segera' ? '<span class="soon">Coming soon</span>' : ''}</div>
    <div class="card-b">
      <h3>${esc(p.judul)}</h3><div class="sub">${esc(p.subjudul)}</div>
      <p>${esc(p.ringkasan)}</p><span class="more">${p.status==='segera' ? 'Lihat info →' : 'Lihat detail →'}</span>
    </div>
  </article>`).join('');

/* ---------- PERJALANAN (kartu menumpuk) ---------- */
const scol = ['yellow','orange','teal','violet','pink','orange'];
$('#stack').innerHTML = P.perjalanan.map((s,i) => `
  <article class="step c-${s.warna||scol[i%6]}" style="--i:${i}">
    <div class="num">${String(i+1).padStart(2,'0')}</div>
    <div class="when">${esc(s.waktu)}</div>
    <h3>${esc(s.judul)}</h3>
    <p>${esc(s.isi)}</p>
    <span class="tag">${esc(s.jenis)}</span>
  </article>`).join('');

/* ---------- KEPANITIAAN ---------- */
$('#trPanitia').innerHTML = P.kepanitiaan.map((k,i) => `
  <article class="pcard c-${k.warna}">
    <div class="polas" data-n="${k.foto.length ? Math.min(k.foto.length,3) : 3}" data-photos="${i}" role="button" tabindex="0" aria-label="Lihat foto ${esc(k.judul)}">
      ${Array.from({length: k.foto.length ? Math.min(k.foto.length,3) : 3}, (_,n) => `<div class="pola"><div class="ph">${k.foto[n] ? img(k.foto[n], k.judul) : ''}<span>Foto<br>menyusul</span></div></div>`).join('')}
    </div>
    <h3>${esc(k.judul)}</h3>
    <div class="ev">${esc(k.acara)} · ${esc(k.organisasi)}</div>
    ${k.tanggal ? `<div class="when-p">${esc(k.tanggal)}</div>` : ''}
    <ul>${k.deskripsi.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
    <button class="btn" data-photos="${i}">Lihat foto kegiatan <i>→</i></button>
  </article>`).join('');
/* Sembunyikan tulisan "Foto menyusul" kalau fotonya ada */
$$('.pola .ph').forEach(ph => { const im = $('img', ph); if(im){ probe(im.src).then(v => { if(v) $('span', ph).style.display='none'; }); } });

/* ---------- SERTIFIKAT ---------- */
$('#trSert').innerHTML = P.sertifikat.map((s,i) => `
  <article class="card scard c-${s.warna}" data-open="sert:${i}" tabindex="0" role="button" aria-label="Buka sertifikat ${esc(s.judul)}">
    <div class="cover">${img(s.gambar, s.judul)}<span class="badge">${esc(s.tanggal)}</span></div>
    <div class="card-b"><h3>${esc(s.judul)}</h3><div class="sub">${esc(s.penyelenggara)}</div><span class="more">Lihat sertifikat →</span></div>
  </article>`).join('');

/* ---------- KONTAK ---------- */
const K = P.kontak;
$('#contactSub').textContent = `Terbuka untuk kesempatan magang, proyek, dan kolaborasi. Aku berbasis di ${P.lokasi}.`;
$('#contactBtns').innerHTML = `
  <a class="btn btn-light" href="mailto:${esc(K.email)}">Email <i style="background:rgba(0,0,0,.08)">↗</i></a>
  <a class="btn btn-light" href="https://wa.me/${esc(K.whatsapp)}" target="_blank" rel="noopener">WhatsApp <i style="background:rgba(0,0,0,.08)">↗</i></a>
  <a class="btn btn-light" href="${esc(K.linkedin)}" target="_blank" rel="noopener">LinkedIn <i style="background:rgba(0,0,0,.08)">↗</i></a>
  <a class="btn btn-light" href="${esc(K.jobstreet)}" target="_blank" rel="noopener">Jobstreet <i style="background:rgba(0,0,0,.08)">↗</i></a>
  <a class="btn btn-ghost" style="background:transparent;color:#fff;border-color:#fff" href="${esc(K.cv)}" target="_blank" rel="noopener">Unduh CV</a>`;
$('#socialBtns').innerHTML = (P.sosmed||[]).map(x => `<a class="btn btn-soc" href="${esc(x.link)}" target="_blank" rel="noopener">${esc(x.nama)} <i>↗</i></a>`).join('');
$('#footText').textContent = `© ${new Date().getFullYear()} ${P.nama}`;

/* ---------- SLIDER FOTO UTAMA (otomatis, bisa digeser, bisa diketuk) ---------- */
(function(){
  const slides = P.hero || []; if(!slides.length) return;
  const frame = $('#hsFrame'), dots = $('#hsDots'), box = $('#heroSlider');
  frame.innerHTML = slides.map((s,i) => `<img src="${esc(s)}" alt="Foto ${esc(P.nama)} ${i+1}" class="${i===0?'on':''}" ${i===0?'':'loading="lazy"'} onerror="this.classList.add('broken')">`).join('');
  dots.innerHTML = slides.map((_,i) => `<button aria-label="Foto ${i+1}" class="${i===0?'on':''}"></button>`).join('');
  let cur = 0, timer = null;
  const imgs = $$('img', frame), dts = $$('button', dots);
  function go(i){ cur = (i + slides.length) % slides.length; imgs.forEach((m,n)=>m.classList.toggle('on',n===cur)); dts.forEach((d,n)=>d.classList.toggle('on',n===cur)); }
  function play(){ stop(); if(!reduced && slides.length>1) timer = setInterval(()=>go(cur+1), 4500); }
  function stop(){ clearInterval(timer); }
  dts.forEach((d,n) => d.addEventListener('click', e => { e.stopPropagation(); go(n); play(); }));
  let sx=0, down=false, moved=0;
  box.addEventListener('pointerdown', e => { down=true; sx=e.clientX; moved=0; stop(); });
  box.addEventListener('pointermove', e => { if(down) moved = Math.max(moved, Math.abs(e.clientX-sx)); });
  const up = e => { if(!down) return; down=false; const dx = e.clientX - sx;
    if(Math.abs(dx) > 40){ go(cur + (dx<0 ? 1 : -1)); }
    else if(moved < 8 && !e.target.closest('.hs-dots')){ openViewer(slides.map(s => ({src:s, cap:P.nama})), cur); }
    play(); };
  addEventListener('pointerup', up); box.addEventListener('pointercancel', () => { down=false; play(); });
  box.addEventListener('keydown', e => { if(e.key==='ArrowRight') go(cur+1); if(e.key==='ArrowLeft') go(cur-1); });
  play();
})();

/* ---------- REVEAL SAAT SCROLL KE BAWAH ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12});
$$('.reveal').forEach(el => io.observe(el));

/* ---------- PROGRESS BAR + SCROLLSPY ---------- */
const prog = $('#progress');
const secs = $$('main section[id]');
const links = $$('#navLinks a');
function onScroll(){
  const h = document.documentElement;
  prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  let cur = '';
  secs.forEach(s => { if(s.getBoundingClientRect().top < innerHeight*0.4) cur = s.id; });
  links.forEach(a => { const on = a.getAttribute('href') === '#'+cur; a.classList.toggle('on', on); if(on && a.scrollIntoView && innerWidth<900){ $('#navLinks').scrollTo({left:a.offsetLeft-60,behavior:'smooth'}); } });
}
addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* ---------- PARALLAX HERO ---------- */
const hero = $('#beranda');
if(!reduced){
  hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', ((e.clientX-r.left)/r.width-.5).toFixed(3));
    hero.style.setProperty('--my', ((e.clientY-r.top)/r.height-.5).toFixed(3)); });
}

/* ---------- TRACK GESER KANAN-KIRI ---------- */
let justDragged = false;
$$('.track').forEach(tr => {
  const bar = $('#' + ({trProyek:'barProyek', trPanitia:'barPanitia', trSert:'barSert'})[tr.id]);
  const upd = () => { const max = tr.scrollWidth - tr.clientWidth; const w = Math.max(14, tr.clientWidth/tr.scrollWidth*100);
    bar.style.width = w + '%'; bar.style.marginLeft = (max>0 ? tr.scrollLeft/max*(100-w) : 0) + '%'; };
  tr.addEventListener('scroll', upd, {passive:true}); addEventListener('resize', upd); upd();
  let down=false, sx=0, sl=0, moved=0;
  tr.addEventListener('pointerdown', e => { if(e.pointerType!=='mouse') return; down=true; sx=e.clientX; sl=tr.scrollLeft; moved=0; });
  addEventListener('pointermove', e => { if(!down) return; const dx=e.clientX-sx; moved=Math.max(moved,Math.abs(dx)); if(moved>6){ tr.classList.add('drag'); tr.scrollLeft = sl-dx; } });
  addEventListener('pointerup', () => { if(!down) return; down=false; if(moved>6){ justDragged=true; setTimeout(()=>justDragged=false,60); } tr.classList.remove('drag');
    const kids=[...tr.children]; const c=tr.scrollLeft+tr.clientWidth/2; let best=kids[0]; kids.forEach(k=>{ if(Math.abs(k.offsetLeft+k.offsetWidth/2-c)<Math.abs(best.offsetLeft+best.offsetWidth/2-c)) best=k; });
    if(moved>6) tr.scrollTo({left:best.offsetLeft-(tr.clientWidth-best.offsetWidth)/2,behavior:'smooth'}); });
});
$$('.tr-ctrl').forEach(c => { const tr = $('#'+c.dataset.for);
  const go = d => { const w = tr.children[0].offsetWidth + 22; tr.scrollBy({left:d*w, behavior:'smooth'}); };
  $('.prev', c).onclick = () => go(-1); $('.next', c).onclick = () => go(1); });

/* ---------- POP-UP (muncul dari kartu yang dipencet) ---------- */
const layer = $('#layer');
let lastFocus = null;
function lockScroll(on){ document.body.style.overflow = on ? 'hidden' : ''; }
function closeLayer(){
  const m = $('.modal', layer); if(!m) return;
  const sheet = $('.m-sheet', m), back = $('.m-back', m);
  const done = () => { layer.innerHTML=''; lockScroll(false); document.removeEventListener('keydown', keyHandler); if(lastFocus && lastFocus.focus) lastFocus.focus(); };
  if(reduced || !sheet){ done(); return; }
  const o = m._origin;
  if(o && o.isConnected){ const a = flip(o, sheet); sheet.animate([{transform:'none',opacity:1},{transform:a,opacity:0}],{duration:360,easing:'ease-in',fill:'forwards'}); }
  else sheet.animate([{opacity:1},{opacity:0,scale:.9}],{duration:250,fill:'forwards'});
  back.animate([{opacity:1},{opacity:0}],{duration:360,fill:'forwards'}).onfinish = done;
}
function flip(origin, sheet){
  const r = origin.getBoundingClientRect(), s = sheet.getBoundingClientRect();
  const dx = r.left + r.width/2 - (s.left + s.width/2), dy = r.top + r.height/2 - (s.top + s.height/2);
  const sc = Math.min(1, Math.max(.25, Math.max(r.width/s.width, r.height/s.height)));
  return `translate(${dx}px,${dy}px) scale(${sc}) rotate(-6deg)`;
}
function keyHandler(e){ if(e.key==='Escape'){ if($('.viewer',layer)) closeViewer(); else closeLayer(); }
  if($('.viewer',layer) && e.key==='ArrowRight') viewer.go(1); if($('.viewer',layer) && e.key==='ArrowLeft') viewer.go(-1); }
function openModal(html, origin, color){
  lastFocus = document.activeElement;
  const m = document.createElement('div'); m.className = 'modal ' + (color?'c-'+color:''); m._origin = origin;
  m.innerHTML = `<div class="m-back"></div><div class="m-sheet" role="dialog" aria-modal="true">${html}<button class="m-close" aria-label="Tutup">✕</button></div>`;
  layer.appendChild(m); lockScroll(true);
  const sheet = $('.m-sheet', m);
  $('.m-back', m).onclick = closeLayer; $('.m-close', m).onclick = closeLayer; $('.m-close', m).focus();
  document.addEventListener('keydown', keyHandler);
  if(!reduced && origin){ sheet.animate([{transform:flip(origin, sheet),opacity:.1},{transform:'none',opacity:1}],{duration:620,easing:'cubic-bezier(.2,1.25,.3,1)'}); }
  return m;
}
function projectHTML(p){
  const gal = p.gambar.length ? `<div class="gal">${p.gambar.map((g,i)=>`<button data-gal="${i}" aria-label="Perbesar gambar ${i+1}">${img(g,p.judul)}</button>`).join('')}</div>` : '';
  return `<div class="m-top"><span class="badge">${esc(p.semester)}</span><h3>${esc(p.judul)}</h3><p>${esc(p.subjudul)}</p></div>
  <div class="m-body">
    <div class="meta"><span>${esc(p.periode)}</span><span>${esc(p.peran)}</span></div>
    <p>${esc(p.ringkasan)}</p>
    <ul>${p.detail.map(d=>`<li>${esc(d)}</li>`).join('')}</ul>
    ${p.teknologi.length ? `<div class="pills">${p.teknologi.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div>` : ''}
    ${gal}
    <div class="row">${p.link ? `<a class="btn btn-solid" href="${esc(p.link)}" target="_blank" rel="noopener">Buka halaman proyek <i>↗</i></a>` : '<span class="chip">Segera hadir ✦ tautan proyek menyusul</span>'}</div>
  </div>`;
}
function certHTML(s){
  return `<div class="m-top"><span class="badge">${esc(s.tanggal)}</span><h3>${esc(s.judul)}</h3><p>${esc(s.penyelenggara)}</p></div>
  <div class="m-body">${img(s.gambar, s.judul, 'm-img')}
    <div class="row"><a class="btn btn-solid" href="${esc(s.link)}" target="_blank" rel="noopener">Buka sertifikat (PDF) <i>↗</i></a></div></div>`;
}

/* ---------- PEMBUKA FOTO: BISA DIGESER, DIMIRINGKAN, DI-ZOOM ---------- */
const viewer = { list:[], i:0, go(){} };
function closeViewer(){
  const v = $('.viewer', layer); if(!v) return;
  const back = $('.v-back', v), card = $('.v-card', v);
  const done = () => { v.remove(); if(!$('.modal', layer)) lockScroll(false); if(!$('.modal', layer)) document.removeEventListener('keydown', keyHandler); };
  if(reduced){ done(); return; }
  card && card.animate([{opacity:1},{opacity:0,transform:'scale(.6) rotate(8deg)'}],{duration:300,fill:'forwards'});
  back.animate([{opacity:1},{opacity:0}],{duration:300,fill:'forwards'}).onfinish = done;
}
function openViewer(list, index=0){
  lastFocus = lastFocus || document.activeElement;
  viewer.list = list; viewer.i = index;
  const v = document.createElement('div'); v.className = 'viewer';
  v.innerHTML = `<div class="m-back v-back"></div><div class="v-stage"></div>
    <p class="v-hint">Geser fotonya ✦ ketuk dua kali untuk zoom</p>
    <button class="v-x" aria-label="Tutup">✕</button>
    <div class="v-ui"><button data-d="-1" aria-label="Sebelumnya">←</button><span class="v-count"></span><button data-d="1" aria-label="Berikutnya">→</button></div>`;
  layer.appendChild(v); lockScroll(true); document.addEventListener('keydown', keyHandler);
  $('.v-back', v).onclick = closeViewer; $('.v-x', v).onclick = closeViewer;
  const stage = $('.v-stage', v), count = $('.v-count', v);
  let card, x=0, y=0, rot=0, scale=1, drag=false, px=0, py=0, t0=0;
  const apply = (extra='') => { card.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg) scale(${scale}) ${extra}`; };
  function show(dir=0){
    stage.innerHTML = '';
    const it = viewer.list[viewer.i];
    card = document.createElement('div'); card.className = 'v-card';
    if(it){ card.innerHTML = `<img src="${esc(it.src)}" alt="${esc(it.cap||'')}" draggable="false"><div class="v-cap">${esc(it.cap||'')}</div>`; }
    else { card.innerHTML = `<div class="v-empty">Foto kegiatan akan ditambahkan di sini ✦</div>`; }
    stage.appendChild(card); x=y=rot=0; scale=1;
    if(dir && !reduced) card.animate([{transform:`translateX(${dir*60}vw) rotate(${dir*14}deg)`,opacity:0},{transform:'none',opacity:1}],{duration:480,easing:'cubic-bezier(.2,1.2,.3,1)'});
    count.textContent = viewer.list.length ? `${viewer.i+1} / ${viewer.list.length}` : '';
    $$('.v-ui button', v).forEach(b => b.style.display = viewer.list.length>1 ? '' : 'none');
    bind();
  }
  viewer.go = d => { if(viewer.list.length<2) return; viewer.i = (viewer.i + d + viewer.list.length) % viewer.list.length; show(d); };
  $$('.v-ui button', v).forEach(b => b.onclick = () => viewer.go(+b.dataset.d));
  function bind(){
    card.addEventListener('pointerdown', e => { drag=true; px=e.clientX; py=e.clientY; t0=Date.now(); card.setPointerCapture(e.pointerId); card.style.transition='none'; });
    card.addEventListener('pointermove', e => {
      if(drag){ x += e.clientX-px; y += e.clientY-py; px=e.clientX; py=e.clientY; rot = x/18; apply(); }
      else if(e.pointerType==='mouse' && scale===1 && !reduced){ const r=card.getBoundingClientRect(); const rx=((e.clientY-r.top)/r.height-.5)*-14, ry=((e.clientX-r.left)/r.width-.5)*18; card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`; }
    });
    const end = () => { if(!drag) return; drag=false;
      if(Math.abs(x) > 110 && viewer.list.length>1){ const d = x>0 ? -1 : 1; card.animate([{transform:card.style.transform},{transform:`translate(${x*4}px,${y}px) rotate(${rot*3}deg)`,opacity:0}],{duration:260,fill:'forwards'}).onfinish = () => viewer.go(d); }
      else { card.style.transition='transform .7s cubic-bezier(.2,1.6,.3,1)'; x=y=0; rot=0; if(scale!==1) apply(); else card.style.transform='none'; } };
    card.addEventListener('pointerup', end); card.addEventListener('pointercancel', end);
    card.addEventListener('pointerleave', e => { if(!drag && scale===1) card.style.transform='none'; });
    card.addEventListener('dblclick', () => { scale = scale===1 ? 1.8 : 1; card.style.transition='transform .5s cubic-bezier(.2,1.4,.3,1)'; x=y=rot=0; apply(); });
    card.addEventListener('wheel', e => { e.preventDefault(); scale = Math.min(3, Math.max(.7, scale - e.deltaY*0.0015)); card.style.transition='none'; apply(); }, {passive:false});
  }
  show(0);
}
function panitiaList(i){
  const k = P.kepanitiaan[i];
  return Promise.all(k.foto.map(f => probe(f))).then(r => k.foto.filter((f,n)=>r[n]).map(f => ({src:f, cap:k.judul + (k.acara && k.acara!==k.judul ? ' · ' + k.acara : '')})));
}

/* ---------- KLIK (pakai delegasi supaya semua kartu bekerja) ---------- */
document.addEventListener('click', e => {
  if(justDragged){ e.preventDefault(); e.stopPropagation(); return; }
  const gal = e.target.closest('[data-gal]');
  if(gal){ const m = $('.modal', layer); const p = m && m._proj; if(p) openViewer(p.gambar.map(g=>({src:g,cap:p.judul})), +gal.dataset.gal); return; }
  const mi = e.target.closest('.m-img');
  if(mi){ openViewer([{src:mi.src, cap:mi.alt}], 0); return; }
  const ph = e.target.closest('[data-photos]');
  if(ph){ const i = +ph.dataset.photos; panitiaList(i).then(l => openViewer(l, 0)); return; }
    const op = e.target.closest('[data-open]');
  if(op){ const [t,i] = op.dataset.open.split(':');
    if(t==='proyek'){ const p=P.proyek[+i]; const m=openModal(projectHTML(p), op, p.warna); m._proj=p; }
    if(t==='sert'){ const s=P.sertifikat[+i]; openModal(certHTML(s), op, s.warna); }
  }
});
document.addEventListener('keydown', e => { if((e.key==='Enter'||e.key===' ') && e.target.matches('[data-open],[data-photos]') && !e.target.matches('button')){ e.preventDefault(); e.target.click(); } });
})();
