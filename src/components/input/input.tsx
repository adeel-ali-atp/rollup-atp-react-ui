import React, { FC, Fragment } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <>
      <label>
        <p>{label}</p>
      </label>
      <input
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
      <div>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Input;
