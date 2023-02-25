import React from "react";

function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-white border-b">
      <div className="justify-between hidden px-4 pt-6 pb-4 mx-auto text-lg font-bold text-gray-800 uppercase md:flex md:max-w-5xl lg:max-w-6xl ">
        <div>
          <a href="/" className="navbar-item">
            Nasib
          </a>
        </div>
        <div className="flex justify-center gap-5">
          <a href="#about" className="navbar-item">
            about
          </a>
          <a href="#experience" className="navbar-item">
            experience
          </a>
          <a href="#portfolio" className="navbar-item">
            portfolio
          </a>
          <a href="#contact" className="navbar-item">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
