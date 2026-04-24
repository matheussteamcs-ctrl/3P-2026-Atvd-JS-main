const texto = document.getElementById('texto')

document.getElementById('cor').addEventListener('click', () => {
    texto.style.color = "red"
})

document.getElementById('fundo').addEventListener('click', () => {
    document.body.style.backgroundColor = "black"
})