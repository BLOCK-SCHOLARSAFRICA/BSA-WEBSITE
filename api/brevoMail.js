// const axios = require("axios");

// class BrevoEmailService {
//   constructor() {
//     this.apiUrl = "https://api.brevo.com/v3/smtp/email";
//     this.apiKey = process.env.BREVO_API_KEY;
//   }

//   createPayload(templateName) {
//     return {
//       sender: {
//         name: "New Email- Block Scholars AFRICA",
//         email: "blockscholarsafrica@gmail.com",
//       },
//       to: [
//         {
//           email: "blockscholarsafrica@gmail.com",
//           // name: receiverName,
//         },
//       ],
//       subject: "Hello",
//       textContent: templateName,
//     };
//   }

//   async sendMail(templateName) {
//     const emailPayload = this.createPayload(templateName);

//     try {
//       const response = await axios.post(this.apiUrl, emailPayload, {
//         headers: {
//           accept: "application/json",
//           "api-key": this.apiKey,
//           "content-type": "application/json",
//         },
//       });
      

//       return response;
//     } catch (error) {
//       if (axios.isAxiosError && axios.isAxiosError(error)) {
//         throw new Error(`Error sending email: ${error.message}`);
//       } else {
//         throw new Error(
//           "An unexpected error occurred while sending the email."
//         );
//       }
//     }
//   }
// }

// module.exports = BrevoEmailService;
