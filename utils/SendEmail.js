import nodemailer from "nodemailer";

function formatMessage(name, from, message) {
  const html = `
    <p>${name} is contacting you through JohnErwin.dev!</p>
    <br/>
    <p>They said: ${message}</p>
    <br/>
    <p>You can get back to them at: ${from}</p>
  `;
  return html;
}

function formatSubject(name, from) {
  const subject = `Contact Form  - ${name} (${from})`;
  return subject;
}

export async function SendEmail(name, email, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: email,
    to: "johnerwin73@gmail.com",
    subject: formatSubject(name, email),
    html: formatMessage(name, email, message),
  };

  console.log(options);

  return await transporter.sendMail(options);
}
