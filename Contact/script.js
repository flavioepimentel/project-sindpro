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
    console.log(email, mensage)
}