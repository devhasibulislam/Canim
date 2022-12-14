/* external import */
const nodemailer = require("nodemailer");

/* internal import */
const console = require("./console.util");

const emailConfirmationToken = (userEmail, token, protocol, host, slug) => {
  const transporter = nodemailer.createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: userEmail,
    subject: `Validation code to confirm ${
      (slug === "sign-up" && "Signing up") ||
      (slug === "reset-password" && "Forgot password")
    }`,
    text: `Thank you for ${
      (slug === "sign-up" && "Signing up") ||
      (slug === "reset-password" && "Forgot password")
    }.
    Please, confirm by clicking here: ${protocol}://${host}/user/${slug}?token=${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.errorMessage(error.name);
    } else {
      console.successMessage(`Email sent to: ${info.envelope.to[0]}`);
    }
  });
};

module.exports = emailConfirmationToken;
