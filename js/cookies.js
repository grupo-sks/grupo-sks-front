// Função para ocultar a caixa de cookies quando o botão "Aceitar" for clicado
function acceptCookies() {
    var cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.style.display = "none";
}

// Evento de clique do botão "Aceitar"
var acceptButton = document.getElementById("acceptCookie");
acceptButton.addEventListener("click", acceptCookies);
