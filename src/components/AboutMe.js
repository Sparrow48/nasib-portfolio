import React from "react";
import imageN from "../assets/nasib.png";

function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col items-center content-center px-6 py-16 mx-auto space-y-5 md:max-w-6xl"
    >
      <div className="flex items-center justify-center w-full md:w-1/3">
        <img
          className="w-40 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110"
          src={imageN}
          alt="Profile_Logo"
        />
      </div>
      <div className="text-xl italic font-bold tracking-wide md:max-w-xl">
        <p>
          Hello, I'm Md. Abu Nasib. I have completed my graduation from North
          South University in 2020. I have experience working as part of a team
          and individually. I am always eager to learn from anyone and everyone.
          I am always energetic and eager to learn new skills.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-2xl font-bold text-blue-400 ">MY ACTUAL STACK</h1>
        <div>
          <ul className="flex flex-wrap space-y-5 text-lg md:max-w-sm">
            <li className="flex px-2 m-1 mt-5 bg-gray-200 rounded-lg ">
              HTML5
            </li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">CSS3</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">REACT</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">JavaScript</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">REDUX</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">BootStrap</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">Tailwind</li>
            <li className="flex px-2 m-1 bg-gray-200 rounded-lg">Github</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Services I’m willing to provide.</h1>
      </div>
    </section>
  );
}

export default AboutMe;
