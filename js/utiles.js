let caja = document.querySelector('#ingreso')
caja.focus();

function comprobarExpresion(frase){
    return /^[A-Za-z\s]*$/.test(frase)
}