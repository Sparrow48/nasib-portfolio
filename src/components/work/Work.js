import React from "react";
import { Icon } from "@iconify/react";

function Work(props) {
  return (
    <div className="flex flex-col px-6 space-y-4 ">
      <div className="rounded ">
        <img
          className="transition duration-500 ease-in-out transform rounded hover:scale-105"
          src={props.image}
          alt=""
        />
      </div>
      <div className="flex space-x-5 ">
        <h1 className="text-3xl font-bold text-blue-700 ">{props.title}</h1>
        <a href={props.live} target="_blank">
          <Icon
            icon="fluent:live-24-regular"
            color="navy"
            width="29"
            height="29"
          />
        </a>
        <a href={props.github} target="_blank">
          <Icon icon="bi:github" color="navy" width="29" height="29" />
        </a>
      </div>
      <div>
        <p className="text-xl ">{props.para}</p>
      </div>
    </div>
  );
}

export default Work;
