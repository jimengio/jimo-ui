import React, { FC, ReactNode } from "react";

import JimoButton from "@jimengio/jimo-basics/lib/jimo-button";

export interface ButtonProps {
  prepend?: ReactNode;
  text: string;
  className?: string;
  fillColor?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = props => {
  return <JimoButton {...props} />;
};

export default Button;
