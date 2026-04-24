const lista = document.getElementById('lista')
const input = document.getElementById('input')

    document.getElementById('add').addEventListener('click', () => {
      if (input.value !== "") {
        const li = document.createElement('li')
        li.textContent = input.value

        li.addEventListener('click', () => {
          li.style.textDecoration = "line-through"
        })

        const btn = document.createElement('button')
        btn.textContent = "Remover"

        btn.addEventListener('click', () => {
          li.remove()
        })

        li.appendChild(btn)
        lista.appendChild(li)

        input.value = ""
      }
    })