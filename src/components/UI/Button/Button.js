import React from "react";

import cls from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${cls["button"]} ${props.className}`}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;
