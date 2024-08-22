

const comentario = document.getElementById('comentario')
const contador = document.getElementById('contador')
const maxCaracteres = 200

comentario.addEventListener('input', function () {
    const longitudTexto = comentario.value.length;
    if (longitudTexto > maxCaracteres); {
        comentario.value = comentario.value.substring(0, maxCaracteres)
    }
    contador.textContent = `${comentario.value.length}/${maxCaracteres} caracteres`
})
function guardarComentarios() {
    const comentario = document.getElementById('comentario').value
    if (comentario) {
        const lista = document.getElementById('comentariosGuardados')
        const guardadoNuevo = document.createElement('li')
        guardadoNuevo.textContent = comentario

        guardadoNuevo.ondblclick = function () {
            lista.removeChild(guardadoNuevo)
        }
        lista.appendChild(guardadoNuevo)
        document.getElementById('comentario').value = ''
        document.getElementById('usuario').value = ''
    }
}
