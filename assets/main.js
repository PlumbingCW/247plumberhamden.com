(function(){
  var de=document.documentElement;
  var drawer=document.getElementById('mobDrawer');
  var overlay=document.getElementById('mobOverlay');
  var burger=document.getElementById('hamburger');
  var closeBtn=document.getElementById('mobClose');
  function openMenu(){
    if(!drawer)return;
    drawer.classList.add('open');overlay.classList.add('open');
    burger.setAttribute('aria-expanded','true');
    de.style.overflow='hidden';
  }
  function closeMenu(){
    if(!drawer)return;
    drawer.classList.remove('open');overlay.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
    de.style.overflow='';
  }
  if(burger){burger.addEventListener('click',openMenu);}
  if(closeBtn){closeBtn.addEventListener('click',closeMenu);}
  if(overlay){overlay.addEventListener('click',closeMenu);}
  if(drawer){
    drawer.addEventListener('click',function(e){
      var t=e.target;
      while(t&&t!==drawer){if(t.tagName==='A'){closeMenu();return;}t=t.parentNode;}
    });
  }
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMenu();}});
  window.addEventListener('resize',function(){if(window.innerWidth>768){closeMenu();}});
  var items=document.querySelectorAll('.faq-item');
  Array.prototype.forEach.call(items,function(item){
    var q=item.querySelector('.faq-q');
    var a=item.querySelector('.faq-a');
    if(!q||!a)return;
    q.addEventListener('click',function(){
      var open=item.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
})();
