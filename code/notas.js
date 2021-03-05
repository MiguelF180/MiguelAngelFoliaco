let mat=selector('#matematicas'),
    cast=selector('#castellano'),
    soc=selector("#sociales"),
    nombre=selector('#nombre')
    res,decicion;
    
    
    event('#nota','click',function(){
      if(mat.value>5||cast.value>5||soc.value>5){
        selector('#res').innerHTML=`El valor maximo de cada nota debe ser 5 puntos`
      }
      else{
        m=parseInt(mat.value)
        c=parseInt(cast.value)
        s=parseInt(soc.value)
        res=(m+c+s)/3;
        
        if(res>2.9){
          decicion="paso"
        }
        else{
          decicion="va a plan de mejoramiento"
        }
        
      }  
        selector("#res").innerHTML=`La nota del estudiante ${nombre} es ${res}y por lo tanto usted ${decicion}`
    })