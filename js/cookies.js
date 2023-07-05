// Verifica se o cookie foi aceito anteriormente
function checkCookieAccepted() {
    return localStorage.getItem("cookieAccepted");
}

// Função para ocultar a caixa de cookies e salvar a aceitação no LocalStorage
function acceptCookies() {
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.display = "none";

    // Salva a aceitação dos cookies no LocalStorage
    localStorage.setItem("cookieAccepted", true);
}

function rejectCookies() {
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.display = "none";

    // Salva a aceitação dos cookies no LocalStorage
    localStorage.setItem("cookieAccepted", true);
}

// Verifica se o cookie já foi aceito anteriormente
if (!checkCookieAccepted()) {
    // Exibe a caixa de cookies apenas se o cookie ainda não tiver sido aceito
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.display = "block";
} else {
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.display = "none";
}

// Evento de clique do botão "Aceitar"
var acceptButton = document.getElementById("acceptCookie");
var rejectButton = document.getElementById("rejectCookie");

acceptButton.addEventListener("click", acceptCookies);
rejectButton.addEventListener("click", rejectCookies);
