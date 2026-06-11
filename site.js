/* ============ Azerbaijan Travel Packages — homepage interactivity ============ */

/* ---------- data ---------- */
const PACKAGES = [
  {id:'weekend-baku', cat:'Cultural', title:'Weekend Baku Escape', dur:'2N / 3D', group:'1–6', price:'$349', per:'/ person',
   desc:'A fast, vivid first taste of Baku — Old City, Flame Towers and the seafront boulevard.'},
  {id:'baku-city', cat:'Cultural', title:'Baku City Package', dur:'3N / 4D', group:'1–6', price:'$499', per:'/ person',
   desc:'The capital in full — UNESCO Old City, modern Baku and a Gobustan day trip.'},
  {id:'baku-gabala', cat:'Cultural', title:'Baku + Gabala', dur:'4N / 5D', group:'1–8', price:'$699', per:'/ person',
   desc:'City and mountains — pair cosmopolitan Baku with the alpine resort town of Gabala.'},
  {id:'halal', cat:'Halal', title:'Azerbaijan Halal Tour', dur:'5N / 6D', group:'2–8', price:'$849', per:'/ person',
   desc:'Confirmed halal dining and prayer-friendly itinerary across Baku and the regions.'},
  {id:'complete', cat:'Cultural', title:'Azerbaijan Complete Tour', dur:'5N / 6D', group:'1–8', price:'$899', per:'/ person',
   desc:'Baku, Gabala and Shahdag in one — our most-booked all-rounder itinerary.'},
  {id:'ski', cat:'Ski', title:'Ski & Snow — Shahdag', dur:'5N / 6D', group:'2–8', price:'$799', per:'/ person',
   desc:'First snow or fresh powder at Shahdag, with cosy stays and city time in Baku.'},
  {id:'family', cat:'Family', title:'Azerbaijan Family Package', dur:'6N / 7D', group:'Family of 4', price:'$1,099', per:'/ family',
   desc:'Paced for kids — cable cars, mud volcanoes, parks and easy halal-friendly food.'},
  {id:'honeymoon', cat:'Honeymoon', title:'Honeymoon Package', dur:'5N / 6D', group:'Couple', price:'$1,299', per:'/ couple',
   desc:'Caspian seafronts, rooftop dinners and mountain backdrops — romantic and unique.'},
  {id:'grand', cat:'Cultural', title:'Grand Azerbaijan Tour', dur:'7N / 8D', group:'1–8', price:'$1,199', per:'/ person',
   desc:'The deep dive — Baku, Gabala, Sheki, Shahdag and Gobustan over eight days.'},
  {id:'group', cat:'Group', title:'Group Tour (8+)', dur:'5N / 6D', group:'8+ people', price:'$649', per:'/ person',
   desc:'Best per-person value for friends, clubs and extended families travelling together.'}
];
const CATS = ['All','Cultural','Honeymoon','Halal','Ski','Family','Group'];
const TAG_COLORS = {Cultural:'#0E3B3C',Honeymoon:'#B5392E',Halal:'#16514F',Ski:'#3a6ea5',Family:'#C2632A',Group:'#6b4e9e'};

const DESTINATIONS = [
  {id:'baku', name:'Baku', sub:'Caspian capital · UNESCO Old City', big:true},
  {id:'gabala', name:'Gabala', sub:'Alpine resort town'},
  {id:'shahdag', name:'Shahdag', sub:'Ski & snow'},
  {id:'sheki', name:'Sheki', sub:'Silk Road heritage'},
  {id:'gobustan', name:'Gobustan', sub:'Petroglyphs & mud volcanoes'},
  {id:'lahij', name:'Lahij', sub:'Coppersmith mountain village'}
];

const TESTIMONIALS = [
  {q:'They confirmed every halal restaurant before we left and replied on WhatsApp within minutes. Easiest international trip we have planned.', n:'Sara K.', c:'Dubai, UAE', col:'#16514F'},
  {q:'Booked our honeymoon and it felt completely bespoke — rooftop dinner in Baku, cable car in Gabala. Nobody back home had been!', n:'Aman & Priya', c:'Mumbai, India', col:'#B5392E'},
  {q:'The visa guidance alone was worth it. Clear steps, honest answers, and the ground guide in Baku was excellent.', n:'Thomas R.', c:'Manchester, UK', col:'#C2632A'}
];

/* ---------- render packages ---------- */
const pkgGrid = document.getElementById('pkgGrid');
const filtersEl = document.getElementById('filters');
let activeCat = 'All';

CATS.forEach(c=>{
  const b=document.createElement('button');
  b.className='chip'+(c==='All'?' active':'');
  b.textContent=c; b.dataset.cat=c;
  b.onclick=()=>{activeCat=c;[...filtersEl.children].forEach(x=>x.classList.toggle('active',x.dataset.cat===c));renderPackages();};
  filtersEl.appendChild(b);
});

function renderPackages(){
  const list = PACKAGES.filter(p=>activeCat==='All'||p.cat===activeCat);
  pkgGrid.innerHTML='';
  if(!list.length){pkgGrid.innerHTML='<div class="pkg-empty">No packages in this category yet — message us and we’ll build one.</div>';return;}
  list.forEach(p=>{
    const card=document.createElement('a');
    card.className='pkg-card';
    card.href='Package Detail.html?id='+p.id;
    card.innerHTML=`
      <div class="pkg-photo">
        <image-slot id="pkg-${p.id}" shape="rect" fit="cover" placeholder="Drop a ${p.title} photo"></image-slot>
        <span class="pkg-tag" style="background:${hexA(TAG_COLORS[p.cat]||'#0E3B3C',.85)}">${p.cat}</span>
        <div class="pkg-fav" title="Save"><svg viewBox="0 0 24 24" fill="none" stroke="#E2613C" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
      </div>
      <div class="pkg-body">
        <div class="pkg-meta">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ${p.dur}</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3.2 3.2 0 0 1 0 6"/><path d="M18 20a6 6 0 0 0-3-5"/></svg> ${p.group}</span>
        </div>
        <h3 class="pkg-title">${p.title}</h3>
        <p class="pkg-desc">${p.desc}</p>
        <div class="pkg-foot">
          <div class="pkg-price"><span class="from">From</span><div><span class="amt"><b>${p.price}</b></span> <span class="per">${p.per}</span></div></div>
          <span class="pkg-inquire">View trip <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </div>
      </div>`;
    pkgGrid.appendChild(card);
  });
  bindReveal();
}
function hexA(hex,a){const n=parseInt(hex.slice(1),16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;}

/* ---------- render destinations ---------- */
const destGrid=document.getElementById('destGrid');
DESTINATIONS.forEach(d=>{
  const el=document.createElement('div');
  el.className='dest'+(d.big?' big':'');
  el.innerHTML=`<image-slot id="dest-${d.id}" shape="rect" fit="cover" placeholder="Drop a ${d.name} photo"></image-slot>
    <div class="ov"><div class="dn">${d.name}</div><div class="dsub">${d.sub}</div></div>`;
  destGrid.appendChild(el);
});

/* ---------- render testimonials ---------- */
const testiGrid=document.getElementById('testiGrid');
TESTIMONIALS.forEach(t=>{
  const initials=t.n.split(/[ &]/).filter(Boolean).slice(0,2).map(w=>w[0]).join('');
  const el=document.createElement('div');
  el.className='tcard reveal';
  el.innerHTML=`<div class="stars">★★★★★</div>
    <p class="quote">“${t.q}”</p>
    <div class="who"><div class="ava" style="background:${t.col}">${initials}</div><div><div class="n">${t.n}</div><div class="c">${t.c}</div></div></div>`;
  testiGrid.appendChild(el);
});

/* ---------- fill form package select ---------- */
const formPkg=document.getElementById('formPackage');
PACKAGES.forEach(p=>{const o=document.createElement('option');o.textContent=p.title;formPkg.appendChild(o);});

renderPackages();

/* ---------- header hide on scroll ---------- */
const nav=document.getElementById('nav');
let lastY=0;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  nav.classList.toggle('scrolled',y>20);
  if(y>lastY && y>240){nav.classList.add('hidden');}else{nav.classList.remove('hidden');}
  lastY=y;
},{passive:true});

/* ---------- mobile menu ---------- */
const mm=document.getElementById('mobileMenu'), scrim=document.getElementById('scrim');
function openMenu(){mm.classList.add('open');scrim.classList.add('open');}
function closeMenu(){mm.classList.remove('open');scrim.classList.remove('open');}
document.getElementById('hamburger').onclick=openMenu;
document.getElementById('mmClose').onclick=closeMenu;
scrim.onclick=closeMenu;
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

/* ---------- form validation ---------- */
const form=document.getElementById('inquiryForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  let ok=true;
  const name=form.name, phone=form.phone;
  setErr(name, name.value.trim().length>=2);
  const digits=phone.value.replace(/\D/g,'');
  setErr(phone, digits.length>=7);
  ok = name.value.trim().length>=2 && digits.length>=7;
  if(!ok){const f=form.querySelector('.field.error input');if(f)f.focus();return;}
  form.style.display='none';
  document.getElementById('formSuccess').classList.add('show');
  document.getElementById('formSuccess').scrollIntoView===undefined;
});
function setErr(input, valid){input.closest('.field').classList.toggle('error',!valid);}
form.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>i.closest('.field').classList.remove('error')));

/* ---------- favourites toggle (delegated) ---------- */
document.addEventListener('click',e=>{
  const fav=e.target.closest('.pkg-fav');
  if(fav){const path=fav.querySelector('path');const on=fav.dataset.on==='1';fav.dataset.on=on?'0':'1';path.setAttribute('fill',on?'none':'#E2613C');}
});

/* ---------- scroll reveal ---------- */
function bindReveal(){
  const io=new IntersectionObserver((ents)=>{
    ents.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}
bindReveal();
