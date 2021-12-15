import React from "react";

import imageN from "../assets/nasib.png";

function Header() {
  return (
    <div className="border-b ">
      <div className="flex flex-col items-center px-6 py-24 mx-auto md:py-48 md:flex-row md:max-w-6xl">
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img
            className="w-40 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110"
            src={imageN}
            alt="Profile_Logo"
          />
        </div>
        <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <h1 className="text-xl md:text-2xl">
              Hello! I am{" "}
              <span className="font-medium hover:text-regal-blue">
                Md. Abu Nasib
              </span>
            </h1>
            <h1 className="text-3xl font-bold md:text-5xl text-regal-blue font-header">
              Front End Developer
            </h1>
            <p className="items-center text-xl text-justify md:text-2xl">
              I am a web developer with a strong interest in projects that
              requires both conceptual and analytical thinking. I develop
              responsive, optimized and efficient websites. Currently available
              for part time, full time or freelance opportunities.
            </p>
            <div className="flex space-x-4 text-xl">
              <a
                href="#"
                className="px-3 py-2 text-blue-800 border-2 border-indigo-600 rounded-xl hover:bg-indigo-300 hover:border-opacity-0"
              >
                Contact me
              </a>
              <a
                href="#"
                className="px-3 py-2 text-blue-800 border-2 border-indigo-600 rounded-xl hover:bg-indigo-300 hover:border-opacity-0"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
