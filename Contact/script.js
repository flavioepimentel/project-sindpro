const API_LOCAWEB = "https://api.smtplw.com.br/v1/messages"



function getEmailSender() {
    return document.getElementById('email_sender').value
}

function getMessage() {
    return document.getElementById('textarea_email').value
}
function emailConstruction (email, mensage) {
    return {
    "subject": "Contato por WebSite", //"Titulo"
    "body": mensage, // Texto principal
    "from": email, //"remetente@dominio.com"
    "to": "flavio.ericksan@hotmail.com", // "destinatario@dominio2.com" | "contato@sindpro.net.br"
    "cc": [],
    "bcc": [],
    "headers": {
        "Content-Type": "text/plain"
    }
}
}

function sendEmail() {
    const email = getEmailSender()
    const mensage = getMessage()
    const emailBody = emailConstruction(email, mensage)
    fetch(API_LOCAWEB, emailBody).then(function (response) {
    console.log(response.blob());
  })
}



// content-type: application/json
/// x-auth-token: 7sd6g8f7sdg78fsdg7fsd



// RESPOSTA:
// Status: 201 Created
// Location: https://api.smtplw.com.br/v1/messages/25