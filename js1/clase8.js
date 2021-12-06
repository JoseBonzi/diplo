let oculto = true; // var global para saber si está oculto o no
function hideDiv() {
    var textDiv = document.getElementById('txtus') // obtenemos el div que contiene el <p>
    var textSection = document.getElementById('us') // obtenemos la <section> que engloba al <div> y al <p>
    var text = document.getElementsByClassName('text-us')[0]  // obtenemos el elemento <p> directamente, que contiene el texto.
    if(!oculto){ // si oculto == false, es decir, está MOSTRADO, pasa por este bloque y se le agregan atributos que oculte el contenido. 
        textSection.classList.add('hidden-div') // se le agrega la clase 'hidden-div' a la <section>, la cual tiene un height = 62px con un translation de animación.
        if(textSection.classList.contains('showed-div')){ // si la sección ya tiene agregada la clase 'showed-div', se la elimina para que no genere bugs.
            textSection.classList.remove('showed-div') // se elimina.
        }
        text.style.color = 'transparent' // se le agrega el style de color = 'transparent' al texto.
        text.style.transition = 'color 0s ease' // se le agrega una transición de cambio de color de 0 segundos (así desaparece), con animación ease.
        oculto = true // se setea la variable global a que está OCULTO.
    } else { 
        textSection.classList.add('showed-div') // se le agrega la clase 'showed-div' a la <section>, la cual tiene un height = 300px con un transalation de animación.
        if(textSection.classList.contains('hidden-div')){ // si la se <section> ya tiene la clase 'hidden-div', se la elimina para que no genere bugs.
            textSection.classList.remove('hidden-div') // se elimina
        }
        text.style.color = 'black' // se le agrega style de color = balck al texto.
        text.style.transition = 'color 6s ease' // se le agrega una transición de cambio de color de 6 segundos (así aparece), con animación ease.
        oculto = false // se setea la variable global a que esta OCULTO.
    }
}
 
