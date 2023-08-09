import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-8"
    >
      {/* getform.io */}
      <form
        method="POST"
        action="https://getform.io/f/33cd0b21-2aca-4251-92c5-b1eaabfbb721"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below to contact me or send me an email directly-
            brandontanruien@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id="message"
          rows="10"
          placeholder="Message"
        />
        <button className="text-white border-2 hover:bg-slate-300 hover:border-slate-300 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
