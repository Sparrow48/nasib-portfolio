import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-white border-b">
      <div className="justify-between hidden px-4 pt-8 pb-2 mx-auto text-lg font-bold text-gray-800 uppercase md:flex md:max-w-5xl lg:max-w-6xl ">
        <div>
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            Nasib
          </NavLink>
        </div>
        <div className="flex justify-center gap-5">
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            about
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            portfolio
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/">
            contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
