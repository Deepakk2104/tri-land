/* ============ Tour Packages catalogue ============ */
const {PACKAGES, CATS, TAG_COLORS} = window.ATP_DATA;
const grid=document.getElementById('pkgGrid');
const filtersEl=document.getElementById('filters');
const countEl=document.getElementById('catCount');
const searchEl=document.getElementById('catSearch');
const sortEl=document.getElementById('catSort');
let activeCat='All', q='', sortKey='popular';

const durNights=p=>p.nights;

CATS.forEach(c=>{
  const b=document.createElement('button');
  b.className='chip'+(c==='All'?' active':'');
  b.textContent=c;b.dataset.cat=c;
  b.onclick=()=>{activeCat=c;[...filtersEl.children].forEach(x=>x.classList.toggle('active',x.dataset.cat===c));render();};
  filtersEl.appendChild(b);
});

searchEl.addEventListener('input',()=>{q=searchEl.value.trim().toLowerCase();render();});
sortEl.addEventListener('change',()=>{sortKey=sortEl.value;render();});

function sortList(list){
  const s=[...list];
  if(sortKey==='price-asc')s.sort((a,b)=>a.priceNum-b.priceNum);
  else if(sortKey==='price-desc')s.sort((a,b)=>b.priceNum-a.priceNum);
  else if(sortKey==='rating')s.sort((a,b)=>b.rating-a.rating);
  else if(sortKey==='duration')s.sort((a,b)=>durNights(a)-durNights(b));
  else s.sort((a,b)=>(b.popular?1:0)-(a.popular?1:0)||b.reviews-a.reviews);
  return s;
}

function render(){
  let list=PACKAGES.filter(p=>(activeCat==='All'||p.cat===activeCat)
    &&(!q||(p.title+' '+p.desc+' '+p.cat).toLowerCase().includes(q)));
  list=sortList(list);
  countEl.innerHTML=`Showing <b>${list.length}</b> ${list.length===1?'package':'packages'}${activeCat!=='All'?` in <b>${activeCat}</b>`:''}${q?` for “<b>${q}</b>”`:''}`;
  grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="pkg-empty">No packages match — try clearing filters or message us and we’ll build one.</div>';return;}
  list.forEach(p=>{
    const a=document.createElement('a');
    a.className='pkg-card';
    a.href='Package Detail.html?id='+p.id;
    a.innerHTML=`
      <div class="pkg-photo">
        <image-slot id="catpkg-${p.id}" shape="rect" fit="cover" placeholder="Drop a ${p.title} photo"></image-slot>
        <span class="pkg-tag" style="background:${window.ATP.hexA(TAG_COLORS[p.cat]||'#0E3B3C',.85)}">${p.cat}</span>
        ${p.popular?'<span class="pkg-tag" style="left:auto;right:14px;background:rgba(226,97,60,.92)">Popular</span>':''}
      </div>
      <div class="pkg-body">
        <div class="pkg-meta">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ${p.dur}</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3.2 3.2 0 0 1 0 6"/><path d="M18 20a6 6 0 0 0-3-5"/></svg> ${p.group}</span>
          <span style="color:#C98A00"><svg width="13" height="13" viewBox="0 0 24 24" fill="#F0B53C" stroke="#F0B53C"><path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7 14 2 9.2l6.9-.9z"/></svg> ${p.rating.toFixed(1)}</span>
        </div>
        <h3 class="pkg-title">${p.title}</h3>
        <p class="pkg-desc">${p.desc}</p>
        <div class="pkg-foot">
          <div class="pkg-price"><span class="from">From</span><div><span class="amt"><b>${p.price}</b></span> <span class="per">${p.per}</span></div></div>
          <span class="pkg-inquire">View trip <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </div>
      </div>`;
    grid.appendChild(a);
  });
  if(window.bindReveal)window.bindReveal();
}
render();
