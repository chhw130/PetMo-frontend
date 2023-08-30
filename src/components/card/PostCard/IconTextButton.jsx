import React from "react";
import { StyledButton } from "../styled";

function IconTextButton({
  size,
  color,
  shape,
  iconLocation,
  Icon,
  children,
  ...rest
}: IconTextButtonProps) {
  return (
    <StyledButton size={size} color={color} shape={shape} {...rest}>
      {iconLocation === "left" && <Icon />}
      {children}
      {iconLocation === "right" && <Icon />}
    </StyledButton>
  );
}

export default IconTextButton;
