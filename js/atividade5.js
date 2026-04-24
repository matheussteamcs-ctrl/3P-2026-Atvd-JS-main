const input = document.getElementById('input')
const botao = document.getElementById('add')
const lista = document.getElementById('lista')

botao.addEventListener('click', () => {
  if (input.value !== "") {

    const li = document.createElement('li')
    li.textContent = input.value

    li.addEventListener('click', () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through"
          ? "none"
          : "line-through"
    })

    const btnRemover = document.createElement('button')
    btnRemover.textContent = "Remover"

    btnRemover.addEventListener('click', (e) => {
      e.stopPropagation()
      li.remove()
    })

    li.appendChild(btnRemover)
    lista.appendChild(li)

    input.value = ""
  }
})