
(function(){
 var h=document.querySelector('header');
 addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>8)},{passive:true});
 var b=document.querySelector('.burger'),m=document.getElementById('menu');
 b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
 m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded',false)})});
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
 document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
 var ask=document.getElementById('ask'),q=document.getElementById('askq');
 ask.querySelectorAll('.chip').forEach(function(c){c.addEventListener('click',function(){q.value=c.textContent;q.focus()})});
 ask.addEventListener('submit',function(e){e.preventDefault();var t=(ask.dataset.prefix||'')+(q.value||'');
  window.open('https://wa.me/'+ask.dataset.phone+'?text='+encodeURIComponent(t),'_blank','noopener')});
 q.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ask.requestSubmit()}});
 var f=document.getElementById('contactForm');
 f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),body='';d.forEach(function(v,k){body+=k+': '+v+'\n'});
  location.href='mailto:'+f.dataset.email+'?subject='+encodeURIComponent('Website enquiry – '+(d.get('company')||d.get('name')))+'&body='+encodeURIComponent(body)});
})();
