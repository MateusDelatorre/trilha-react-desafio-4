import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
  return <ButtonContainer title={title} disabled={disabled} onClick={onClick}></ButtonContainer>;
};

export default Button;

