const nodemailer = require("nodemailer");

module.exports = async function ({ name, message, phone, whatsapp, email, subjectMatter }) {

  let transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user: "contato@lfmcontabilidade.com.br", 
      pass: "4fw/2Ok!bRpg",
    },
  });

  let info = await transporter.sendMail({
    from: `"${name}" <contato@lfmcontabilidade.com.br>`, 
    to: "lfmcontabilidade@terra.com.br",
    subject: subjectMatter,
    text: message,
    html: `
      <b>Email</b><p>${email}</p>
      <b>Whatsapp</b><p>${whatsapp || "Não informado"}</p>
      <b>Telefone</b><p>${phone || "Não informado"}</p>
      <b>Assunto</b><p>${subjectMatter}</p>
      <b>Mensagem</b><p>${message}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}