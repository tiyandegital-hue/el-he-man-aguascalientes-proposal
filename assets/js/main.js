document.addEventListener('DOMContentLoaded',function(){
var toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('nav.main');
if(toggle&&nav){toggle.addEventListener('click',function(){var open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});}
document.querySelectorAll('.faq-q').forEach(function(btn){btn.addEventListener('click',function(){var item=btn.closest('.faq-item');var open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');});});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
function showConfirm(form,summaryEl,fields){
  var c=form.parentElement.querySelector('.confirm');
  if(c){c.classList.add('show');c.scrollIntoView({behavior:'smooth',block:'center'});}
}
var qf=document.getElementById('quote-form');
if(qf){
  var params=new URLSearchParams(location.search);
  var svc=params.get('servicio');
  if(svc){var sel=document.getElementById('servicio-interes');if(sel){sel.value=svc;}
    var chip=document.querySelector('.chip input[value="'+svc+'"]');}
  qf.addEventListener('submit',function(e){e.preventDefault();
    var name=document.getElementById('q-nombre').value.trim();
    var syms=Array.from(qf.querySelectorAll('.chip input:checked')).map(function(i){return i.value;});
    var sum=document.getElementById('quote-summary');
    if(sum){sum.textContent=(name?name+', ':'')+'recibimos tu solicitud'+(syms.length?' ('+syms.join(', ')+')':'')+'. Te contactaremos por tel\u00e9fono o correo para confirmar tu cita y darte la cotizaci\u00f3n antes de cualquier trabajo.';}
    var c=qf.parentElement.querySelector('.confirm');if(c){c.classList.add('show');c.scrollIntoView({behavior:'smooth',block:'center'});}
  });
}
var cf=document.getElementById('contact-form');
if(cf){cf.addEventListener('submit',function(e){e.preventDefault();
  var c=cf.parentElement.querySelector('.confirm');if(c){c.classList.add('show');c.scrollIntoView({behavior:'smooth',block:'center'});}
});}
});
