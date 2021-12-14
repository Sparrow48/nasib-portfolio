import React from "react";

import imageN from "../assets/nasib.png";

function Header() {
  return (
    <div className="flex justify-between px-6 mx-auto py-14 md:max-w-6xl">
      <div className="flex items-center justify-center w-full md:w-1/3">
        <img
          className="w-40 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110"
          src={imageN}
          alt="Profile_Logo"
        />
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center md:items-start">
          <h1>Hello! I am Md. Abu Nasib</h1>
          <h1>Front End Developer</h1>
          <p>
            I am a web developer with a strong interest in projects that
            requires both conceptual and analytical thinking. I develop
            responsive, optimized and efficient websites. Currently available
            for part time, full time or freelance opportunities.
          </p>
          <div>
            <a href="">Contact me</a>
            <a href="">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
