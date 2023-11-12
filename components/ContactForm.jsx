import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [emailFormState, setEmailFormState] = useState();

  const sendEmail = async (e) => {
    try {
      setEmailFormState("submitting");
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name: e.fullName,
          email: e.email,
          message: e.message,
        }),
      });

      if (response.ok) {
        setEmailFormState("success");
        reset();
      } else {
        setEmailFormState("error");
        console.error(
          `Email API request failed with status ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);
      setEmailFormState("error");
    }
  };

  let content;

  if (emailFormState === "success") {
    content = <p>Success! Your email has been sent.</p>;
  } else if (emailFormState === "submitting") {
    content = <p>Submitting your request...</p>;
  } else if (emailFormState === "error") {
    content = <p>Oops! Something went wrong.</p>;
  } else {
    content = (
      <form
        className="flex flex-col algin-middle"
        onSubmit={handleSubmit(sendEmail)}
      >
        {/* register your input into the hook by invoking the "register" function */}

        <input
          className="bg-yellow-300 border-b-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          defaultValue=""
          placeholder="your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-left text-lg text-red-400">
            {errors.email.message}
          </p>
        )}

        <input
          className="bg-yellow-300 border-b-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          defaultValue=""
          placeholder="your full name"
          {...register("fullName", {
            required: "Full name is required",
            maxLength: {
              value: 100,
              message: "Full name cannot exceed 100 characters",
            },
          })}
        />

        {errors.fullName && (
          <p className="text-left text-lg text-red-400">
            {errors.fullName.message}
          </p>
        )}

        <textarea
          className="bg-yellow-300 border-2 border-dotted border-black p-1 m-1 text-xl sm:text-2xl"
          rows={4}
          placeholder="your message..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="text-left text-lg text-red-400">
            {errors.message.message}{" "}
          </p>
        )}
        <input className="hover:underline" type="submit" />
      </form>
    );
  }

  return <div>{content}</div>;
};

export default ContactForm;
