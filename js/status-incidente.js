const nameIncidente = document.getElementById("name-incidente")
const email = document.getElementById("email-incidente")
const branch_number = document.getElementById("ramal-incidente")
const company = document.getElementById("empresa-incidente")
const subject = document.getElementById("assunto-incidente")
const messages = document.getElementById("messages")
const createdAt = document.getElementById("createdAt")
const sendedBy = document.getElementById("sendedBy")
const newMessageDiv = document.getElementById("nova-mensagem")
const messageTextarea = document.getElementById("message-textarea")
const newMessageForm = document.getElementById("new-message-form")
const eyeImg = document.getElementById("eye-img")

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

    if (data.error) return alert('Código inválido')

    nameIncidente.innerHTML = data.user.name ? data.user.name : '***'
    email.innerHTML = data.user.email ? data.user.email : '***'
    branch_number.innerHTML = data.user.branch_number ? data.user.branch_number : '***'
    company.innerHTML = data.user.company ? data.user.company : '***'
    subject.innerHTML = data.subject ? data.subject : '***'

    data.messages.forEach(el => {

        let dateFormatted = new Date(el.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })

        let img = document.createElement('img');
        img.src = 'images/eye-incidente-logo.svg';
        img.alt = '';
        eyeImg.appendChild(img);

        let messageParagraph = document.createElement('p');
        messageParagraph.textContent = el.content;
        messages.appendChild(messageParagraph);

        let createdAtParagraph = document.createElement('p');
        createdAtParagraph.textContent = dateFormatted;
        createdAt.appendChild(createdAtParagraph);

        let senderParagraph = document.createElement('p');
        senderParagraph.textContent = el.sender;
        sendedBy.appendChild(senderParagraph);
    })
})


function showNewMessageDiv() {
    newMessageDiv.style.display = 'block'
}

newMessageForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await fetch(`http://localhost:3333/message/${id}`,
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                content: messageTextarea.value
            })
        }
    )

    location.reload()
})