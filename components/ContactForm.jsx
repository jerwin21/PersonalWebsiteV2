import { useForm } from "react-hook-form";
import { SendEmail } from "@utils/SendEmail";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    await console.log(data);
  }

  const sendEmail = async (e) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: e.fullName,
          email: e.email,
          message: e.message,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        className="flex flex-col algin-middle"
        onSubmit={handleSubmit(sendEmail)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="bg-yellow-300 border-b-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          defaultValue=""
          placeholder="your email"
          {...register("email", { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="bg-yellow-300 border-b-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          defaultValue=""
          placeholder="your full name"
          {...register("fullName", { required: true })}
        />

        <textarea
          className="bg-yellow-300 border-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          rows={4}
          placeholder="your message..."
          {...register("message", { required: true })}
        />

        <input className="hover:underline" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
