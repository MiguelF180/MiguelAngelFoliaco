    function event(id,tipo,accion){
      if(id===document){
        
       id.addEventListener(tipo,accion);
      }
      else{
     document.querySelector(id).addEventListener(tipo,accion);
      }
   }
     function selector(id){
       return document.querySelector(id);
     }
