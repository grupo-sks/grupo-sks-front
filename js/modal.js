const incidenteForm = document.getElementById('incidente-form');
const modalForm = document.getElementById('modal-form');
const dialog = document.getElementById('dialog');

incidenteForm.addEventListener('submit', () => {
    dialog.showModal()
})

modalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = "status-do-incidente.html"
})