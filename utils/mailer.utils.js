const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST,
  port: process.env.MAILPORT,
  auth: {
    user: process.env.ADMINMAIL,
    pass: process.env.ADMINPASS,
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
    <p>To change password <a href="http://localhost:8999/updatepassword">click here</a></p>
  `;
  return { message, messageHTML };
}

function generateApproveMessage(formName, id, userid, role) {
  const subject = `${formName} Approved`
  const message = `The form '${formName}' with ID: ${id} has been approved by: ${role} with ID: ${userid}.`;
  const messageHTML = `
    <p>The form <strong>${formName}</strong> with ID: <strong>${id}</strong> has been approved by: <strong>${role}</strong> with ID: <strong>${userid}</strong>.</p>
  `;
  return {subject, message, messageHTML };
}

module.exports = {
  sendEmail,
  generateAccountCreationMessage,
  generateApproveMessage,
};
