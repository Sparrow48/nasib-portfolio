import React from "react";
import emailjs from "emailjs-com";
import toastr from "toastr";


function Form() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_Service_Id}`,
        `${process.env.REACT_APP_Template_Id}`,
        e.target,
        `${process.env.REACT_APP_User_Id}`
      )
      .then(
        (result) => {
          toastr.success("Message sent!")
        },
        (error) => {
          console.log('MESSAGES SENDING ERROR =>', error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-6 md:mb-6 md:w-1/2 md:mr-6">
            <label className="text-xl font-bold uppercase" htmlFor="name">
              Name
              <input
                type="text"
                name="from_name"
                placeholder="Type your name"
                className="w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-gray-100 border border-gray-200 rounded focus:border focus:border-gray-500 focus:outline-none "
                required
              />
            </label>
          </div>
          <div className="w-full mb-6 md:mb-6 md:w-1/2 ">
            <label className="text-xl font-bold uppercase" htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-gray-100 border border-gray-200 rounded focus:border focus:border-gray-500 focus:outline-none "
                required
              />
            </label>
          </div>
        </div>
        <div className="w-full mb-6 md:mb-6 md:mr-6">
          <label className="text-xl font-bold uppercase" htmlFor="name">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Mail Subject"
              className="w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-gray-100 border border-gray-200 rounded focus:border focus:border-gray-500 focus:outline-none "
              required
            />
          </label>
        </div>
        <div className="w-full mb-6 md:mb-10 md:mr-6">
          <label className="text-xl font-bold uppercase" htmlFor="name">
            Message
            <textarea
              name="message"
              className="w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-gray-100 border border-gray-200 rounded focus:border focus:border-gray-500 focus:outline-none "
              rows="10"
            ></textarea>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="px-2 py-2 text-xl text-white bg-blue-500 rounded-2xl hover:bg-blue-800">
            Send Mail
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
