import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      name="contactPage"
      className="w-full min-h-screen bg-gradient-to-b from-[#000B18] to-[#00172D] flex justify-center items-center p-8"
    >
      {/* getform.io */}
      <form
        method="POST"
        name="contact"
        className="flex flex-col max-w-[600px] w-full"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 md:text-xl">
            Submit the form below to contact me or send me an email directly at
            brandontanruien@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id="message"
          rows="10"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          className="text-white border-2 hover:bg-slate-300 hover:border-slate-300 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
