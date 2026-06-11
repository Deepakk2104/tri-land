/* ============ Package Detail ============ */
const {PACKAGES, INCLUSIONS, EXCLUSIONS, FAQS, TAG_COLORS} = window.ATP_DATA;
const id = window.ATP.qs('id') || 'complete';
const p = window.ATP.byId(id) || PACKAGES[0];

document.title = `${p.title} — Azerbaijan Travel Packages`;

// header / hero
document.getElementById('crumbTitle').textContent = p.title;
document.getElementById('dCat').textContent = p.cat + ' Package';
document.getElementById('dTitle').textContent = p.title;
document.getElementById('dTagline').textContent = p.desc;

// gallery (1 large + 4 small)
const gallery = document.getElementById('gallery');
const labels = ['Hero','View','Detail','Scene','Local'];
for(let i=0;i<5;i++){
  const d=document.createElement('div');
  if(i===0)d.className='g0';
  d.innerHTML=`<image-slot id="gal-${p.id}-${i}" shape="rect" fit="cover" placeholder="${i===0?p.title+' hero photo':'Photo'}"></image-slot>`;
  gallery.appendChild(d);
}

// meta pills
document.getElementById('dMeta').innerHTML = `
  <span class="d-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ${p.dur}</span>
  <span class="d-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3.2 3.2 0 0 1 0 6"/><path d="M18 20a6 6 0 0 0-3-5"/></svg> ${p.group}</span>
  <span class="d-pill"><span class="star">★</span> ${p.rating.toFixed(1)} · ${p.reviews} reviews</span>
  <span class="d-pill" style="background:${window.ATP.hexA(TAG_COLORS[p.cat]||'#0E3B3C',.1)};border-color:${window.ATP.hexA(TAG_COLORS[p.cat]||'#0E3B3C',.3)}">${p.cat}</span>`;

// overview
document.getElementById('dOverview').textContent = p.longDesc;

// highlights
document.getElementById('dHighlights').innerHTML = p.highlights.map(h=>`
  <div class="hl"><span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4L19 6"/></svg></span> ${h}</div>`).join('');

// itinerary
document.getElementById('dItinerary').innerHTML = p.itinerary.map((it,i)=>`
  <div class="tl-item">
    <div class="tl-num">${i+1}</div>
    <div class="tl-day">Day ${i+1}</div>
    <h4>${it.t}</h4>
    <p>${it.d}</p>
  </div>`).join('');

// inclusions
const liInc = s => `<li><svg viewBox="0 0 24 24" fill="none" stroke="#0E3B3C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4L19 6"/></svg>${s}</li>`;
const liExc = s => `<li><svg viewBox="0 0 24 24" fill="none" stroke="#B5392E" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>${s}</li>`;
document.getElementById('dIncl').innerHTML = INCLUSIONS.map(liInc).join('');
document.getElementById('dExcl').innerHTML = EXCLUSIONS.map(liExc).join('');

// faq
document.getElementById('dFaq').innerHTML = FAQS.map((f,i)=>`
  <div class="faq-item${i===0?' open':''}">
    <button class="faq-q"><span>${f.q}</span><span class="ic">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join('');
document.querySelectorAll('.faq-item').forEach(item=>{
  const a=item.querySelector('.faq-a');
  if(item.classList.contains('open'))a.style.maxHeight=a.scrollHeight+'px';
  item.querySelector('.faq-q').addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(o=>{o.classList.remove('open');o.querySelector('.faq-a').style.maxHeight=null;});
    if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
  });
});

// sidebar
document.getElementById('bkPrice').textContent = p.price;
document.getElementById('bkPer').textContent = 'per ' + p.per.replace('/ ','');
document.getElementById('bkDur').textContent = p.dur;
document.getElementById('bkGroup').textContent = p.group;
document.getElementById('bkRating').innerHTML = `<span style="color:#C98A00">★</span> ${p.rating.toFixed(1)} (${p.reviews})`;
document.getElementById('bkCat').textContent = p.cat;
document.getElementById('bkInquire').href = 'Contact.html?pkg=' + encodeURIComponent(p.title);

// related (same cat first, then fill)
const related = PACKAGES.filter(x=>x.id!==p.id)
  .sort((a,b)=>(b.cat===p.cat?1:0)-(a.cat===p.cat?1:0)||b.reviews-a.reviews)
  .slice(0,3);
document.getElementById('related').innerHTML = related.map(r=>`
  <a class="pkg-card" href="Package Detail.html?id=${r.id}">
    <div class="pkg-photo">
      <image-slot id="rel-${r.id}" shape="rect" fit="cover" placeholder="Drop a ${r.title} photo"></image-slot>
      <span class="pkg-tag" style="background:${window.ATP.hexA(TAG_COLORS[r.cat]||'#0E3B3C',.85)}">${r.cat}</span>
    </div>
    <div class="pkg-body">
      <div class="pkg-meta"><span>${r.dur}</span><span style="color:#C98A00">★ ${r.rating.toFixed(1)}</span></div>
      <h3 class="pkg-title">${r.title}</h3>
      <p class="pkg-desc">${r.desc}</p>
      <div class="pkg-foot">
        <div class="pkg-price"><span class="from">From</span><div><span class="amt"><b>${r.price}</b></span> <span class="per">${r.per}</span></div></div>
        <span class="pkg-inquire">View <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </div>
  </a>`).join('');

if(window.bindReveal)window.bindReveal();
window.scrollTo(0,0);
