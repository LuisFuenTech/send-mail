const nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use SSL
    auth: {
      user: "seeacing2018@gmail.com",
      pass: "Mail@seeac2019"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  // Definimos el email
  var mailOptions = {
    from: "Prueba 2 Luis Fuentes <seeacing2018@gmail.com>",
    to: "info@seeacingenieriasas.com, seeacing2018@gmail.com",
    subject: "Saludos from Nodemailer",
    text: "Hola guapo",
    html: `
    <h3>Hola Guap@s</h3> 
    <p>Esto es un párrafo de prueba, enviado desde el aplicativo web creado para optimizar
    el envío de correos masivos</p>
    <a href="https://github.com/luisfuentech">Proyectos de Luis Fuentes :) </a>`
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    } else {
      console.log("Email sent");
      res.status(200).json({ Ok: "Email sent" });
    }
  });
};

module.exports = {
  sendEmail
};
