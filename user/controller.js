const nodemailer = require("nodemailer");
const { Email } = require("../email/index");

const manyRecipients = [
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "McDonald's <McDonalds@news.mcdonalds.com.co>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Twitter <info@twitter.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "McDonald's <McDonalds@news.mcdonalds.com.co>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Espanol.Free-eBooks.net <noticias@espanol.free-ebooks.net>",
  "Facebook Business <advertise-noreply@support.facebook.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Twitter <info@twitter.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "McDonald's <McDonalds@news.mcdonalds.com.co>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "mobifriends <mobifriends@mobifriends.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook Business <advertise-noreply@support.facebook.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Luis Alberto Fuentes Auraad <luiefuentes9@hotmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Falabella.com <newsletter@co.falabella.com>",
  "Facebook <notification@facebookmail.com>",
  "Falabella.com <newsletter@co.falabella.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Coursera <no-reply@m.mail.coursera.org>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "Facebook <notification@facebookmail.com>",
  "mobifriends <mobifriends@mobifriends.com>",
  "Facebook <notification@facebookmail.com>"
];

const recipients = [
  "nerirevelacion@gmail.com",
  "seecing2018@gmail.com",
  "luisfau@misena.edu.co"
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
  for (let i = 0; i < 2; i++) {
    console.log(`Fase ${i + 1}`);
    await sender(
      "outlook",
      "smtp.office365.com",
      "seeac.ingenieriasas@outlook.com",
      "Outlook@seeac2019",
      res
    );
  }
};

const deleteAll = async (req, res) => {
  await Email.deleteMany({ to: { $exists: true } });
  console.log("Delete");

  res.status(200).json({ msg: "Hola guapo" });
};

const sendAny = async (req, res) => {
  const { service } = req.params;
  console.log("TCL: sendAny -> service", service);

  let successful = [];
  let failed = [];

  let mailOptions = {
    from: "Mail test",
    subject: "Greetings from Nodemailer",
    text: "Hey baby!",
    html: `
    <h3>Hola Guap@s</h3> 
    <p>Esto es un párrafo de prueba, enviado desde el aplicativo web</p>`
  };

  if (service == "gmail") {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "nerirevelacion@gmail.com",
        pass: "Sanfelipeneri10"
      },
      tls: {
        rejectUnauthorized: false
      },
      secure: false
    });
  } else {
    var transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "seeac.ingenieriasas@outlook.com",
        pass: "Outlook@seeac2019"
      },
      tls: {
        rejectUnauthorized: false
      },
      secureConnection: false
    });
  }

  console.log("TCL: sendAny -> transporter", transporter);

  for (const [index, recipient] of recipients.entries()) {
    mailOptions.to = recipient;
    console.log("TCL: sendAny -> recipient", recipient);

    const email = new Email();
    email.from = transporter.options.auth.user;
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
      console.log("Failed");
      email.sent = false;
      await email.save();
      failed.push({ success: false, to: recipient });
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
    <p>Esto es un párrafo de prueba, enviado desde el aplicativo web</p>`
  };

  service == "gmail"
    ? (transporter.secure = false)
    : (transporter.secureConnection = false);

  for (const [index, recipient] of recipients.entries()) {
    mailOptions.to = recipient;

    const mailSent = await Email.findOne({ to: recipient });

    if (mailSent == null) {
      console.log("Eres nuevo");

      var email = new Email();
      email.from = user;
      email.to = recipient;

      try {
        const response = await send(transporter, mailOptions);

        if (response.accepted) {
          console.log("Success");
          email.sent = true;
          await email.save();
          successful.push({ success: true, to: response.envelope.to[0] });
        } else {
          console.log("Failed");
          email.sent = false;
          await email.save();
          failed.push({ success: false, to: response.envelope.to[0] });
        }
      } catch (error) {
        email.sent = false;
        await email.save();
        failed.push({ success: false, to: recipient.envelope.to[0] });
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
        console.log("Error:", error, "To:", mailOptions.to);
        return reject(error);
      } else {
        console.log("Info:", info);
        return resolve(info);
      }
    });
  });
}

let objectInfo = {
  accepted: ["luisfau@misena.edu.co"],
  rejected: [],
  envelopeTime: 326,
  messageTime: 519,
  messageSize: 645,
  response: "250 2.0.0 OK  1563915956 e128sm14676406vkh.10 - gsmtp",
  envelope: { from: "", to: ["luisfau@misena.edu.co"] },
  messageId: "<4cd7762b-7cf2-dbbe-6edb-4582f50a9349@Gilberto>"
};

module.exports = {
  sendGmail,
  sendOutlook,
  deleteAll,
  sendAny
};
