import { SendEmail } from "@utils/SendEmail";

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();

    let response = await SendEmail(name, email, message);

    console.debug(response);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.log("we got an error!");
    console.log(error);
    return new Response(`Email failed to send: ${error} `, { status: 500 });
  }
};
