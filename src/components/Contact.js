import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section id="contact" className="border-b-2 ">
      <div className="py-16 mx-5 md:mx-auto md:max-w-3xl">
        <div className="flex flex-col items-center space-y-10 ">
          <h1 className="text-3xl font-bold text-blue-700">Get In Touch</h1>
          <p className="pb-8 text-xl text-center">
            Whether you are interested in hiring me, to work on a project
            together or to discuss any other proposal, feel free to contact me
            anytime. I am very much looking forward to your message!
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
