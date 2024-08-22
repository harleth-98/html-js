const titulo = document.getElementById('titulo')

titulo.addEventListener('mouseover', function () {
    titulo.style.color = 'red';
})

titulo.addEventListener('mouseout', function () {
    titulo.style.color = 'black'
})
function cambioColor(color) {
    const texto = document.getElementById('texto');
    texto.style.color = color;
}
