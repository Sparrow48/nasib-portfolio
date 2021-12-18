import React from "react";
import { Icon } from "@iconify/react";

function Work(props) {
  return (
    <div className="flex flex-col px-6 space-y-4 ">
      <div className="rounded h-80">
        <img
          className="object-cover transition duration-500 ease-in-out transform rounded h-80 hover:scale-105 "
          src={props.image}
          alt=""
        />
      </div>
      <div className="flex space-x-5 ">
        <a
          className="text-3xl font-bold text-blue-700 "
          href={props.live}
          target="_blank"
          rel="noreferrer"
        >
          {props.title}
        </a>
        <a href={props.live} target="_blank" rel="noreferrer">
          <Icon
            icon="fluent:live-24-regular"
            color="navy"
            width="29"
            height="29"
          />
        </a>
        <a href={props.github} target="_blank" rel="noreferrer">
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
