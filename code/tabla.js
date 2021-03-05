let multi=selector('#multiplicando'),
  numero=selector("#numero"),
  tabla=selector('#tabla');

event('#btn-tabla','click',function(){
  tabla.value="";
  for(let i=0;i<=multi.value;i++){
    tabla.value+=`${numero.value} x ${i} = ${numero.value*i} \n`;
  }
  
})

