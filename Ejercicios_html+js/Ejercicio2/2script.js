
//const botonGuardarComentario = document.getElementById(botonGuardarComentario)
//botonGuardarComentario.addEventListener('click', guardarComentario)

function guardarComentario() {
    const comentario1 = document.getElementById('comentario1').value
    if (comentario1) {
        const lista = document.getElementById('listaComentarios')
        const nuevoComentario = document.createElement('li')
        nuevoComentario.textContent = comentario1

        nuevoComentario.ondblclick = function () {
            lista.removeChild(nuevoComentario)
        }

        lista.appendChild(nuevoComentario)
        document.getElementById('comentario1').value = ''
    }

}