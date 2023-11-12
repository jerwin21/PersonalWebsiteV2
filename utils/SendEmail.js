import nodemailer from "nodemailer";

export async function SendEmail(name, email, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "johnerwin73@gmail.com",
      pass: "boqj yxnu ytyi orqh",
    },
  });

  const options = {
    from: email,
    to: "johnerwin73@gmail.com",
    subject: name,
    html: `<p>${message}</p>`,
  };

  console.log(options);

  return await transporter.sendMail(options);
}
