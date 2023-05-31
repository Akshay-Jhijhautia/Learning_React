import React, { useState } from "react";

interface Props {
  children: string;
  handleClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, handleClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
