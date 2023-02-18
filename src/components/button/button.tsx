import React, { FC } from "react";

import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
