const nodemailer = require("nodemailer");

const recipients = [
  "seeacing2018@gmail.com",
  "nerirevelacion@gmail.com",
  "luisfau@misena.edu.co",
  "lfuentesa@unicartagena.edu.co"
];

const sendEmail = async (req, res) => {
  let successful = [];
  let failed = [];

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "nerirevelacion@gmail.com",
      pass: "Sanfelipeneri10"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  await recipients.forEach(async (to, index) => {
    let mailOptions = {
      from: "Prueba 2",
      to: to,
      subject: "Saludos from Nodemailer",
      text: "Hola guapo",
      html: `
      <h3>Hola Guap@s</h3> 
      <p>Esto es un párrafo de prueba, enviado desde el aplicativo web creado para optimizar
      el envío de correos masivos</p>
      <a href="https://github.com/luisfuentech">Proyectos de Luis Fuentes :) </a>`
    };

    await send(transporter, mailOptions)
      .then(() => {
        console.log("Success");
        successful.push({ success: true, to });
      })
      .catch(err => {
        console.log("Failed", err);
        failed.push({ success: false, to, err });
      });

    console.log(successful);
    console.log(failed);
  });

  res.status(200).json({ Ok: "Email sent" });
};

async function send(transporter, mailOptions) {
  return await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve();
      }
    });
  });
}

module.exports = {
  sendEmail
};
