event(document,'DOMContentLoaded',function(){
     let body=selector('#load'),
         der=selector('#der'),
         izq=selector('#izq')
     
     setTimeout(function(){
       der.style.background="#ff5677"
       izq.style.background="rgb(132,161,255)"
       
     },500)
     setTimeout(function(){
       der.style.background="rgb(111,255,152)"
       izq.style.background="rgb(111,255,152)"
       
     },1000)
     setTimeout(function() {
       der.style.width="0px"
       izq.style.width="0px"
       body.classList.remove('load')
     }, 1300);
})