import React, { useState } from "react";
import "./contact.styles.scss";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { themeState } from '../../atoms/themeState';
import { useRecoilValue } from 'recoil';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const theme = useRecoilValue(themeState);

  const { register, errors, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  let templateParams = {
    from_name: getValues("name"),
    to_name: "user_csdQtDEEHHEjrSfmMfk8Rz",
    email: getValues("email"),
    message: getValues("message"),
  };

  const onSubmit = (data) => {
    setSending(true);
    console.log(data);
    console.log(getValues("message"));
    console.log(templateParams);
    emailjs
      .send("gmail", "template_7Y1aKv5g", data, "user_csdQtDEEHHEjrSfmMfk8R")
      .then(
        (result) => {
          toast.success("👍 Your message has been sent!");
          setSending(false);
          reset();
        },
        (error) => {
          error.text === "The g-recaptcha-response parameter not found"
            ? toast.error("⚠️ Please make sure you check the Captcha box.")
            : toast.error("⚠️ ERROR (technical speak): " + error.text);

          setSending(false);
          reset();
        }
      );
  };

  return (
    <>
      <div className="w-full mx-auto max-w-3xl bg-dark rounded-lg shadow p-8 text-gray-700 border border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                name="email"
                ref={register({ required: true })}
                className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Your email"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Your name
              </label>
              <span className="error__message text-red-500">{errors.email && "Email is required"}</span>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                name="name"
                ref={register({ required: true })}
                className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Your name
              </label>
              <span className="error__message text-red-500">{errors.name && "Name is required"}</span>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                className="bg-primary autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                name="message"
                placeholder="Message..."
                ref={register({ required: true })}
              />
              <label
                htmlFor="message"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              ></label>
              <span className="error__message text-red-500">{errors.message && "Message is required"}</span>
            </div>
          </div>
          <div
            className={`mb-6 gcaptcha ${getValues("email") ? `` : `hidden`}`}
          >
            <div
              className="g-recaptcha"
              data-theme={theme}
              data-sitekey="6LetJbAZAAAAAKhIDCmYzsQ5i2jTd4iRBKfKIjn_"
            ></div>
          </div>
          <div className="row flex flex-row flex-wrap w-full">
            <div className="w-full md:w-1/4 flex">
              <input
                className="m-2 w-full shadow bg-gray-700 text-gray-400 focus:outline-none font-bold py-2 px-4 md:ml-0 rounded text-primary border-gray-700 cursor-pointer"
                type="button"
                value="Reset"
                onClick={() => reset()}
              />
            </div>
            <div className="w-full md:w-3/4 flex">
              <input
                className={`m-2 w-full shadow focus:outline-none font-bold py-2 px-4 md:mr-0 rounded border-gray-700 cursor-pointer ${
                  sending
                    ? `cursor-wait bg-gray-700 text-secondary`
                    : `bg-quartary text-primary hover:bg-opacity-50`
                }`}
                type="submit"
                value={sending ? `Sending...` : `Send`}
              />
            </div>
          </div>
        </form>
        <ToastContainer draggable={false} position={"bottom-right"} />
      </div>
    </>
  );
};

export default Contact;
