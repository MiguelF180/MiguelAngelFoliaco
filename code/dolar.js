  let n1=selector("#num1"),
      result=selector('#result'),
      modo=selector('#modo'),
      modocop=selector('#modocop'),
      modousd=selector('#modousd'),
      usdTitle=selector("#usdTitle"),
      usdSub=selector("#usdSubtitle"),
      copSub=selector("#copSubtitle"),
      valor=modo.attributes.cambio.value;
      
      
      
      
      
     event('#btn_dolar','click',function(){
       if(valor=="true"){
         
       result.innerHTML=`El valor en pesos colombianos es <b>${2500*n1.value}</b>`
       }
       else{
       result.innerHTML=`El valor en dolares USD es <b>${n1.value/2500}</b>`
        }
       
     }) 
     
     
     event('#modo','click',function(){
       if(valor=="true"){
       usdTitle.innerHTML="Conversion Pesos Colombianos"
       usdSub.innerHTML="Peso colombiano"
       copSub.innerHTML="Dolar"
       modo.style.background="rgb(48,154,255)"
       valor="false";
       modousd.style.display="none"
       modocop.style.display="block"
       }
       else{
       usdTitle.innerHTML="Conversion USD"
       usdSub.innerHTML="Dolar"
       copSub.innerHTML="Peso colombiano"
       modo.style.background="rgb(255,98,98)"
       valor="true";
       modousd.style.display="block"
       modocop.style.display="none"
         
       }
     })