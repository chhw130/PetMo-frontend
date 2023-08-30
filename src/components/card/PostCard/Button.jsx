import React from "react";
import { StyledButton } from "../styled";

function Button({ size, color, shape, children, ...rest }: ButtonProps) {
  return (
    <StyledButton size={size} color={color} shape={shape} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
