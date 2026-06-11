/* ============ Azerbaijan Travel Packages — shared chrome (header/footer) ============ */
(function(){
  const HOME='Azerbaijan Travel Packages — Homepage.html';
  const page=document.body.dataset.page||'';
  const WA='https://wa.me/9940000000';

  const flameDefs=`
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="flameGrad" x1="0.15" y1="1" x2="0.85" y2="0">
      <stop offset="0" stop-color="#C2392A"/><stop offset="0.45" stop-color="#E2613C"/><stop offset="1" stop-color="#F0B53C"/>
    </linearGradient>
    <symbol id="flame" viewBox="0 0 100 120">
      <path class="fOuter" d="M50,116 C28,116 14,100 14,76 C14,58 26,52 33,39 C40,26 41,12 58,5 C53,21 62,28 67,43 C73,60 86,60 86,80 C86,102 70,116 50,116 Z"/>
      <path class="fInner" d="M49,99 C39,99 33,91 33,81 C33,72 40,68 45,58 C49,66 56,71 59,80 C61,90 57,99 49,99 Z"/>
    </symbol>
    <pattern id="butaPat" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M52,84 C38,84 30,73 30,58 C30,47 38,43 43,33 C48,23 49,14 60,9 C56,20 64,25 67,35 C71,47 80,48 80,60 C80,75 68,84 56,84 Z" fill="none" stroke="rgba(240,181,60,0.22)" stroke-width="1.4"/>
      <circle cx="55" cy="60" r="3" fill="rgba(226,97,60,0.4)"/>
    </pattern>
  </defs></svg>`;

  const waGlyph='<svg viewBox="0 0 24 24" width="18" height="18" fill="#073b25"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3l-.6-.3s-1.4-.7-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.5-.3-.4-.6-.8-.8-1.1-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5v-.4c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4z"/></svg>';

  const links=[
    {k:'packages', t:'Packages', h:'Tour Packages.html'},
    {k:'destinations', t:'Destinations', h:HOME+'#destinations'},
    {k:'honeymoon', t:'Honeymoon', h:HOME+'#honeymoon'},
    {k:'visa', t:'Visa Help', h:HOME+'#visa'},
    {k:'contact', t:'Contact', h:'Contact.html'}
  ];
  const navLinks=links.map(l=>`<a href="${l.h}"${l.k===page?' class="active" style="color:var(--ember);opacity:1"':''}>${l.t}</a>`).join('');
  const mLinks=links.map(l=>`<a href="${l.h}" class="ml">${l.t}</a>`).join('');

  const header=`
  <header class="nav" id="nav">
    <div class="wrap">
      <a href="${HOME}" class="brand">
        <svg class="bmk"><use href="#flame"/></svg>
        <span><span class="nm">Azerbaijan</span><br><span class="ds">Travel Packages</span></span>
      </a>
      <nav class="nav-links">${navLinks}</nav>
      <div class="nav-actions">
        <a href="tel:+9940000000" class="nav-phone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
        </a>
        <a href="${WA}" class="btn btn-wa">${waGlyph} WhatsApp Us</a>
        <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="scrim" id="scrim"></div>
  <aside class="mobile-menu" id="mobileMenu">
    <div class="mm-head">
      <span class="brand"><svg class="bmk"><use href="#flame"/></svg></span>
      <button class="hamburger open" id="mmClose" aria-label="Close"><span></span><span></span><span></span></button>
    </div>
    ${mLinks}
    <a href="Contact.html" class="btn btn-primary btn-lg">Get Free Quote</a>
  </aside>`;

  const footer=`
  <footer class="foot">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <a href="${HOME}" class="brand"><svg class="bmk"><use href="#flame" class="on-dark"/></svg><span><span class="nm">Azerbaijan</span><br><span class="ds">Travel Packages</span></span></a>
          <p class="foot-about">Your trusted, English-first gateway to the Land of Fire. Curated tours, visa guidance and 24/7 WhatsApp support.</p>
          <div class="foot-soc">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="#FBF7EF" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#FBF7EF" stroke="none"/></svg></a>
            <a href="${WA}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="#FBF7EF"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3l-.6-.3s-1.4-.7-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.5-.3-.4-.6-.8-.8-1.1-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5v-.4c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="#FBF7EF" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="#FBF7EF"/></svg></a>
          </div>
        </div>
        <div>
          <h4>Packages</h4>
          <ul>
            <li><a href="Package Detail.html?id=weekend-baku">Weekend Baku Escape</a></li>
            <li><a href="Package Detail.html?id=complete">Complete Azerbaijan Tour</a></li>
            <li><a href="Package Detail.html?id=honeymoon">Honeymoon Packages</a></li>
            <li><a href="Package Detail.html?id=halal">Halal Tours</a></li>
            <li><a href="Package Detail.html?id=ski">Ski &amp; Snow — Shahdag</a></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="Tour Packages.html">All Packages</a></li>
            <li><a href="${HOME}#destinations">Destinations</a></li>
            <li><a href="${HOME}#visa">Visa Help</a></li>
            <li><a href="${HOME}#testimonials">Reviews</a></li>
            <li><a href="Contact.html">Get a Quote</a></li>
          </ul>
        </div>
        <div class="foot-contact">
          <h4>Talk to us</h4>
          <a href="${WA}" style="color:var(--saffron);font-weight:700">WhatsApp: +994 00 000 00 00</a>
          <span class="lab">Email</span>
          hello@azerbaijantravelpackages.com
          <span class="lab">Hours</span>
          9AM – 9PM IST / GST, daily
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Azerbaijan Travel Packages. All rights reserved.</span>
        <div class="pay-badges">
          <span class="pay-badge">SSL Secure</span>
          <span class="pay-badge">Stripe</span>
          <span class="pay-badge">Razorpay</span>
          <span class="pay-badge">Visa · MC</span>
        </div>
      </div>
    </div>
  </footer>
  <a href="${WA}" class="fab-wa" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="#073b25"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3l-.6-.3s-1.4-.7-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.5-.3-.4-.6-.8-.8-1.1-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.3-.5v-.4c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4z"/></svg></a>
  <div class="mobile-cta">
    <a href="tel:+9940000000" class="btn btn-call">Call</a>
    <a href="${WA}" class="btn btn-wa">WhatsApp</a>
    <a href="Contact.html" class="btn btn-primary">Get Quote</a>
  </div>`;

  // inject
  document.body.insertAdjacentHTML('afterbegin', flameDefs+header);
  document.body.insertAdjacentHTML('beforeend', footer);

  // header hide on scroll
  const nav=document.getElementById('nav');let lastY=0;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;nav.classList.toggle('scrolled',y>20);
    if(y>lastY&&y>240)nav.classList.add('hidden');else nav.classList.remove('hidden');lastY=y;
  },{passive:true});

  // mobile menu
  const mm=document.getElementById('mobileMenu'),scrim=document.getElementById('scrim');
  const open=()=>{mm.classList.add('open');scrim.classList.add('open');};
  const close=()=>{mm.classList.remove('open');scrim.classList.remove('open');};
  document.getElementById('hamburger').onclick=open;
  document.getElementById('mmClose').onclick=close;
  scrim.onclick=close;
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));

  // reveal observer (global)
  window.bindReveal=function(){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
  };
  window.bindReveal();
})();
