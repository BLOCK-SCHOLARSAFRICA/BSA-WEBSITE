const express = require("express");
const bodyParser = require("body-parser");
const BrevoEmailService = require("./brevoMail"); // Example email service
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post("/api/contact-us", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    // Use email service to send the message
    const emailService = new BrevoEmailService();
    const template = `<h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `;
    await emailService.sendMail(subject, template);

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
