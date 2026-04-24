const input = document.getElementById('input')
const lista = document.getElementById('lista')

document.getElementById('add').addEventListener('click', () => {
    if (input.value !== "") {
    const li = document.createElement('li')
    li.textContent = input.value

    lista.appendChild(li)
    input.value = ""
    }
})