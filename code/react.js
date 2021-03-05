let ladoA=selector("#ladoA")
let ladoB=selector("#ladoB")
let rect=selector("#rectangulo")
let rect_p=selector("#rect_p")

event('#btn-rect','click',function(){
   rect_p.innerHTML=ladoA.value*ladoB.value+"cm";
  
   if(ladoA.value>=450||ladoB.value>=450){
    rect.style.width=`0px`
    rect.style.hieght=`0px`
    rect.style.width=`450px`
    rect.style.hieght=`450px`
    ladoA.value="";
    ladoB.value="";
     
   }
   else{
    rect.style.width=`0px`
    rect.style.hieght=`0px`
    rect.style.width=`${ladoA.value}px`
    rect.style.hieght=`${ladoB.value}px`
    ladoA.value="";
    ladoB.value="";
   }
})