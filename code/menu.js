 event('#btn-menu','click',function(){
    
    let menu=selector('#menu'),
        btn=selector('#btn-menu');
    
    menu.classList.toggle('activate');
    btn.classList.toggle('color')
    
 })