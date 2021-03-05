let metros=selector("#metros")


event('#btn_metros','click',function(){
    
    selector("#resultado").innerHTML=`La medida en centimetros es ${metros.value*100}cm`
    
})