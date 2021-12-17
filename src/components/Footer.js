import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="flex flex-col items-center py-8 mx-5 space-y-5 md:pb-5 md:space-y-0 md:justify-between md:mx-auto md:flex-row md:max-w-3xl">
      <div className="flex space-x-4 md:order-2">
        <a href="https://github.com/Sparrow48" rel="noreferrer" target="_blank">
          <Icon icon="akar-icons:github-fill" width="36" height="36" />
        </a>
        <a
          href="https://www.linkedin.com/in/nasib48/"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon="logos:linkedin-icon" width="36" height="36" />
        </a>
        <a href="mailto: abunasib48@gmail.com" rel="noreferrer" target="_blank">
          <Icon icon="logos:google-gmail" width="36" height="36" />
        </a>
      </div>
      <div className="text-xl ">
        <p>&copy; 2021 Md. Abu Nasib. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
