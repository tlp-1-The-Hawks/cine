const formRegister = document.querySelector('#formRegister')

formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const usuario = {
        name,
        email,
        password
    }

    const data = await fetch('/users', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: { 'Content-type': 'application/json' }
    })

    const responses = data.json()

    alert(responses.message)
})