const nameIncidente = document.getElementById("name-incidente")
const email = document.getElementById("email-incidente")
const branch_number = document.getElementById("ramal-incidente")
const company = document.getElementById("empresa-incidente")
const subject = document.getElementById("assunto-incidente")

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

window.addEventListener('load', async () => {


    const response = await fetch(`http://localhost:3333/chats/${id}`,
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        }
    )
    const data = await response.json()

    console.log(data)

    if (data.error) return alert('Código inválido')

    nameIncidente.innerHTML = data.user.name ? data.user.name : '***'
    email.innerHTML = data.user.email ? data.user.email : '***'
    branch_number.innerHTML = data.user.branch_number ? data.user.branch_number : '***'
    company.innerHTML = data.user.company ? data.user.company : '***'
    subject.innerHTML = data.subject ? data.subject : '***'
})