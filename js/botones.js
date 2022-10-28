let encriptar = document.querySelector('#encriptar')
let desencriptar = document.querySelector('#desencriptar')
let copiar = document.querySelector('#copiar')
let ingreso = document.querySelector('#ingreso')
let salida = document.querySelector('#salida')

let aux


encriptar.addEventListener('click',function(evento){
    evento.preventDefault();
    if(copiar.classList.contains('boton-claro2-off')){
        cambioDisenio()
    }
    if(ingreso.value==''||!comprobarExpresion(ingreso.value)){
        ResetDisenio();
    }
    CambioMensaje(ingreso.value);
    aux = encriptado(ingreso.value);
    aux.toString.toLowerCase;
    salida.value = aux
    ingreso.value = ''
})

desencriptar.addEventListener('click',function(evento){
    evento.preventDefault();
    if(copiar.classList.contains('boton-claro2-off')){
        cambioDisenio()
    }
    if(ingreso.value==''||!comprobarExpresion(ingreso.value)){
        ResetDisenio();
    }
    aux=desencriptando(ingreso.value)
    aux.toString.toString;
    salida.value= aux
    ingreso.value = ''
})

copiar.addEventListener('click',function(evento){
    evento.preventDefault();
    salida.select();
    document.execCommand('copy')
})

salida.addEventListener('input',function(evento){
    let centro = document.querySelector('#centro')
    console.log(salida.value)

}) 

