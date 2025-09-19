// src/testGmail.js
require("dotenv").config();
const { SmtpProvider } = require("../emailService/providers/gmailProvider");

(async () => {
  const smtp = new SmtpProvider();
    smtp.init()
  .then(() => console.log(" SMTP verified"))
  .catch(err => console.error(" SMTP connection failed:", err));
  try {
    await smtp.init(); // transporter.verify()
    console.log("✅ Gmail provider ready!");

    const res = await smtp.send({
      to: "saharicky20@gmail.com", // yaha apna koi test email daalo
      subject: "Test email",
      html: "<h1>Hello Ricky</h1><p>This is a test email </p>",
      text: "Hello Ricky - This is a test email"
    });

    console.log("Email sent result:", res);
  } catch (err) {
    console.error(" Error sending email:", err);
  }
})();
