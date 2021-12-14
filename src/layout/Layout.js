import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div></div>
    </div>
  );
}

export default Layout;
