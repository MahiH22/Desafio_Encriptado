function cambioDisenio(){
    let centro = document.querySelector('#centro')
    centro.classList.remove('centrar-ena')
    centro.classList.add('centrar-off')

    let copiar = document.querySelector('#copiar');
    copiar.classList.remove('boton-claro2-off')
    copiar.classList.add('boton-claro2-ena')

    let bloque = document.querySelector('#block-text')
    bloque.classList.remove('segundo-off')
    bloque.classList.add('segundo-ena')
}
function ResetDisenio(){
    let centro = document.querySelector('#centro')
    centro.classList.remove('centrar-off')
    centro.classList.add('centrar-ena')

    let copiar = document.querySelector('#copiar');
    copiar.classList.remove('boton-claro2-ena')
    copiar.classList.add('boton-claro2-off')

    let bloque = document.querySelector('#block-text')
    bloque.classList.remove('segundo-ena')
    bloque.classList.add('segundo-off')
}
