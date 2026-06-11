/* ============ Contact page ============ */
const {PACKAGES, FAQS} = window.ATP_DATA;

// fill package select + prefill from ?pkg=
const formPkg = document.getElementById('formPackage');
PACKAGES.forEach(p=>{const o=document.createElement('option');o.textContent=p.title;formPkg.appendChild(o);});
const pre = window.ATP.qs('pkg');
if(pre){ formPkg.value = pre; }

// faq
document.getElementById('contactFaq').innerHTML = FAQS.map((f,i)=>`
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

// form validation
const form=document.getElementById('inquiryForm');
function setErr(input, valid){input.closest('.field').classList.toggle('error',!valid);}
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=form.name, phone=form.phone, email=form.email;
  const nameOk=name.value.trim().length>=2;
  const phoneOk=phone.value.replace(/\D/g,'').length>=7;
  const emailOk=!email.value.trim() || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim());
  setErr(name,nameOk);setErr(phone,phoneOk);setErr(email,emailOk);
  if(!(nameOk&&phoneOk&&emailOk)){const f=form.querySelector('.field.error input');if(f)f.focus();return;}
  form.style.display='none';
  document.getElementById('formSuccess').classList.add('show');
});
form.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>i.closest('.field').classList.remove('error')));
