import nodemailer from "nodemailer";

class EmailService  {
  constructor() {
      this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL_USER,       // Your Gmail address
              pass: process.env.EMAIL_APP_PASSWORD // App-specific password
          }
      });
  }

  // Send email wrapper function
  async sendEmail(to, subject, html) {
      try {
          const mailOptions = {
              from: process.env.EMAIL_USER,
              to,
              subject,
              html
          };

          const info = await this.transporter.sendMail(mailOptions);
          console.log('Email sent successfully:', info.messageId);
          return true;
      } catch (error) {
          console.error('Error sending email:', error);
          throw error;
      }
  }
}

// const sendEmail = async (options) => {
//   const transport = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const message = {
//     from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     html: options.message,
//   };

//   try{
//     await transport.sendMail(message);
//   }catch(error){
//     console.log('senemailerror', error);
    
//   }
  
// };

export default EmailService ;
