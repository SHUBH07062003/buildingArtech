// backend/routes/contact.js
import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Setup transporter using your Gmail or SMTP service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourgmail@gmail.com",       // replace with your Gmail
        pass: "your-app-password",         // use App Password (not normal password)
      },
    });

    const mailOptions = {
      from: email,
      to: "yourgmail@gmail.com",          // where you want to receive messages
      subject: `New Contact from ${name}`,
      text: `You got a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
