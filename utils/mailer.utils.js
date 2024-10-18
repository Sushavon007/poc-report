const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST ,
  port: process.env.MAILPORT ,
  auth: {
    user: process.env.ADMINMAIL ,
    pass: process.env.ADMINPASS ,
  },
});

async function sendEmail(to, subject, text, html) {
  try {
    await transporter.sendMail({
      from: process.env.ADMINMAIL,
      to,
      subject,
      text,
      html,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}

function generateAccountCreationMessage(name, email, password) {
  const message = `Welcome, ${name}! Your account has been created. Your generated password is: ${password}`;
  const messageHTML = `
    <h3>Welcome, ${name}!</h3>
    <p>Your account has been successfully created. Here are your details:</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p>You can change this password after logging in.</p>
  `;
  return { message, messageHTML };
}

module.exports = { sendEmail, generateAccountCreationMessage };
