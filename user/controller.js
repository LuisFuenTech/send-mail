const nodemailer = require("nodemailer");
const { Email } = require("../email/index");

const recipients = [
  "seeacing2018@gmail.com",
  "nerirevelacion@gmail.com",
  "lfuentesa@unicartagena.edu.co",
  "luisfau@misesa.edu.co"
];

const sendGmail = async (req, res) => {
  sender(
    "gmail",
    "smtp.gmail.com",
    "nerirevelacion@gmail.com",
    "Sanfelipeneri10",
    res
  );
};

const sendOutlook = async (req, res) => {
  sender(
    "outlook",
    "smtp-mail.outlook.com",
    "seeac.ingenieriasas@outlook.com",
    "Outlook@seeac2019",
    res
  );
};

const deleteAll = async (req, res) => {
  await Email.deleteMany({ to: { $exists: true } });
  console.log("Delete");

  res.status(200).json({ msg: "Hola guapo" });
};

async function sender(service, host, user, pass, res) {
  let successful = [];
  let failed = [];

  let transporter = nodemailer.createTransport({
    host: host,
    port: 587,
    auth: {
      user: user,
      pass: pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: "Mail test",
    subject: "Greetings from Nodemailer",
    text: "Hey baby!",
    html: `
    <h3>Hola Guap@s</h3> 
    <p>Esto es un párrafo de prueba, enviado desde el aplicativo web creado para optimizar
    el envío de correos masivos</p>`
  };

  service == "gmail"
    ? (transporter.secure = false)
    : (transporter.secureConnection = false);

  for (const [index, recipient] of recipients.entries()) {
    mailOptions.to = recipient;

    const mailSent = await Email.findOne({ to: recipient });

    if (mailSent == null) {
      console.log("Eres nuevo");

      const email = new Email();
      email.from = user;
      email.to = recipient;

      try {
        const response = await send(transporter, mailOptions);

        if (response) {
          console.log("Success");
          email.sent = true;
          await email.save();
          successful.push({ success: true, to: response });
        } else {
          console.log("Failed");
          email.sent = false;
          await email.save();
          failed.push({ success: false, to: response });
        }
      } catch (error) {
        email.sent = false;
        await email.save();
        failed.push({ success: false, to: recipient });
      }
    } else if (mailSent.sent) {
      console.log("Ya te enviaron", { to: mailSent.to, sent: mailSent.sent });
    } else {
      console.log("Te voy a enviar");

      try {
        const response = await send(transporter, mailOptions);

        if (response) {
          console.log("Success");
          await Email.findOneAndUpdate(
            { to: recipient },
            { sent: true },
            { new: true }
          );
          successful.push({ success: true, to: response });
        } else {
          console.log("Failed");
          failed.push({ success: false, to: response });
        }
      } catch (error) {
        email.sent = false;
        failed.push({ success: false, to: response });
      }
    }
  }

  console.log("Success:", successful);
  console.log("Failure", failed);

  res.status(200).json({
    service,
    status: "Emails sent",
    Success: successful,
    Failure: failed
  });
}

function send(transporter, mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error, "To:", info.envelope.to[0]);
        return reject(info.envelope.to[0]);
      } else {
        console.log("Info:", info.envelope.to[0]);
        return resolve(info.envelope.to[0]);
      }
    });
  });
}

module.exports = {
  sendGmail,
  sendOutlook,
  deleteAll
};
