import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="flex justify-between pt-16 pb-5 mx-auto md:max-w-3xl">
      <div className="text-xl ">
        <p>&copy; 2021 Md. Abu Nasib. All Rights Reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="">
          <Icon icon="akar-icons:github-fill" width="36" height="36" />
        </a>
        <a href="">
          <Icon icon="logos:linkedin-icon" width="36" height="36" />
        </a>
        <a href="">
          <Icon icon="logos:google-gmail" width="36" height="36" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
