const incidenteForm = document.getElementById('incidente-form');
const modalForm = document.getElementById('modal-form');
const dialog = document.getElementById('dialog');
const company = document.getElementById('empresa-select');
const subject = document.getElementById('assunto');
const message = document.getElementById('mensagem');
const name = document.getElementById('nome');
const email = document.getElementById('email');
const branch_number = document.getElementById('ramal');
const code = document.getElementById('code-incidente');

incidenteForm.addEventListener('submit', async () => {
    if (company.value === 'inválida') {
        return alert('Escolha uma empresa válida')
    }

    const response = await fetch('http://localhost:3333/chats',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                subject: subject.value,
                message: message.value,
                user: {
                    company: company.value,
                    name: name.value ? name.value : null,
                    email: email.value ? email.value : null,
                    branch_number: branch_number.value ? branch_number.value : null
                }
            })
        })

    const data = await response.json()

    if (!data.error) {
        code.value = data.token_user
        dialog.showModal()
    }
    else alert('Erro ao enviar solicitação')
})

modalForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await fetch(`http://localhost:3333/chats/${code.value}`,
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        }
    )
    const data = await response.json()

    if(data.error) alert('Código inválido')
    else window.location.href = "status-do-incidente.html?id=" + code.value
})

function showModal() {
    dialog.showModal()
}