function encriptado(frase){
    let nuevo = ''
    let agrega= ''
    let numeroCambio = 0
    for(x=0;x<frase.length;x++){
        agrega=encrip(frase.charAt(x))
        nuevo=nuevo+agrega
    }
    return nuevo
}
function encrip(letra){
    let letras = ['e','i','a','o','u']
    let cambio = ['enter','imes','ai','ober','ufat']
    let nuevo1 = letra
    letras.forEach(function(comparacion,index){
        if (letra==comparacion){
            nuevo1=cambio[index]
            return nuevo1
        }
    })
    return nuevo1
}
function desencriptando(frase){
    let letras = ['e','i','a','o','u']
    let cambio = ['enter','imes','ai','ober','ufat']
    let final=''
    let auxi=false
    for(let x=0;x<frase.length;x++){
        auxi=false
        for(let y=0;y<letras.length;y++){
            if(frase.charAt(x)==letras[y]){
                final=final+letras[y]
                x=x+(cambio[y].length-1)
                auxi=true
            }
        }
        if(!auxi){
            final=final+frase.charAt(x)
        }
    }
    return final
}
