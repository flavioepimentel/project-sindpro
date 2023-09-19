// var addresses = "";//between the speech mark goes the receptient. Seperate addresses with a ;
// var body = ""//write the message text between the speech marks or put a variable in the place of the speech marks
// var subject = ""//between the speech marks goes the subject of the message
// var href = "mailto:" + addresses + "?"
//          + "subject=" + subject + "&"
//          + "body=" + body;
// var wndMail;
// wndMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
// if(wndMail)
// {
//     wndMail.close();
// }


const nodemailer = require('nodemailer')

function getEmailSender() {
    return document.getElementById('email_sender').value
}

function getMessage() {
    return document.getElementById('textarea_email').value
}

const html = `<h1>Hello Word</h1>`


function sendEmail() {
    const email = getEmailSender()
    const mensage = getMessage()
    return (email, mensage)
}


const API_LOCAWEB = "https://api.smtplw.com.br/v1/messages"
// content-type: application/json
/// x-auth-token: 7sd6g8f7sdg78fsdg7fsd

const obj = {
    "subject": "Contato por WebSite", //"Titulo"
    "body": mensage, // Texto principal
    "from": email, //"remetente@dominio.com"
    "to": "contato@sindpro.net", // "destinatario@dominio2.com"
    "cc": [],
    "bcc": [],
    "headers": {
        "Content-Type": "text/plain"
    }
}


// RESPOSTA:
// Status: 201 Created
// Location: https://api.smtplw.com.br/v1/messages/25