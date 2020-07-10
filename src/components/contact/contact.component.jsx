import React, { useState } from "react";
import './contact.styles.scss';
import { useSetRecoilState } from "recoil";
import { Waypoint } from "react-waypoint";
import { activeSectionState } from "../../atoms/activeSectionState";

const Contact = () => {
  const setActiveSection = useSetRecoilState(activeSectionState);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  const handleMessageInput = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const PAYLOAD = {
      name: nameInput,
      email: emailInput,
      message: messageInput
    }
    alert(JSON.stringify(PAYLOAD));

  }



  return (
    <>
      <section
        id="contact"
        className="bg-primary flex items-center justify-center flex-wrap text-primary"
      >
        <Waypoint onEnter={() => setActiveSection("contact")} />
        <div className="container flex flex-col m-auto pt-20 pb-0 px-4 lg:px-20">
          <h2 className="text-secondary mb-10 lg:mb-0 text-3xl">
            <span className="border-b-2 border-quartary">Contact Me</span>
          </h2>
        </div>
        <div className="container flex flex-col m-auto pt-20 pb-10 px-4 lg:px-20">
          <form
            onSubmit={handleSubmit}
            id="contact-me"
            className="w-full mx-auto max-w-3xl bg-dark rounded-lg shadow p-8 text-gray-700 border border-gray-700"
          >
            <div className="flex flex-wrap mb-6">
              <div className="relative w-full appearance-none label-floating">
                <input
                  className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                  id="name"
                  type="text"
                  value={nameInput}
                  onChange={handleNameInput}
                  placeholder="Your name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Your name
                </label>
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="relative w-full appearance-none label-floating">
                <input
                  className="bg-primary tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                  id="email"
                  type="text"
                  placeholder="Your email"
                  value={emailInput}
                  onChange={handleEmailInput}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Your email
                </label>
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="relative w-full appearance-none label-floating">
                <textarea
                  className="bg-primary autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                  id="message"
                  type="text"
                  placeholder="Message..."
                  value={messageInput}
                  onChange={handleMessageInput}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >
                  Message...
                </label>
              </div>
            </div>

            <div className="">
              <button
                className="w-full shadow bg-quartary focus:outline-none font-bold py-2 px-4 rounded text-primary border-gray-700"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
