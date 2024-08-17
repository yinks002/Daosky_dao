import React, { MouseEventHandler } from "react";
import styles from "../../styles/button.module.css";

type ButtonType = {
  text: string;
  state: string;
  onClickFunc: MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ text, state, onClickFunc }: ButtonType) => {
  return (
    <button
      onClick={onClickFunc}
      className={
        state === "solid"
          ? styles.solidBtn
          : state === "outlined"
          ? styles.outlinedBtn
          : ""
      }
    >
      {text}
    </button>
  );
};

export default Button;
