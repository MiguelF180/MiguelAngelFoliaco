  let select = selector('#interes'),
      result=selector('#result'),
      valor=selector('#valor'),
      noneto=selector('#noneto')
   
  for(let i=5;i<=100;i+=5){
    select.innerHTML+=`<option value="${i/100}">${i}%</option>`
  }
  
  event("#calcular","click",function(){
     let x=select.value*valor.value;
     let y=valor.value-x;
     result.value=x;
     noneto.value=y;
  })
  
  