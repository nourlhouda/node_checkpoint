const nodemailer = require("nodemailer");

// Create a transporter using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "email@example.com",
    pass: "email_password",
  },
});

// Define the email options
const mailOptions = {
  from: "email@example.com",
  to: "email@example.com",
  subject: "Test Email",
  text: "This is a test email sent from Node.js using nodemailer!",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred while sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
