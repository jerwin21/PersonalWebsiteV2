import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();

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

    const response = await transporter.sendMail(options);
    console.log(response);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.log("we got an error!");
    console.log(error);
    return new Response(`Email failed to send: ${error} `, { status: 500 });
  }
};
