import React, { useRef } from "react";
import { StyledTextarea } from "../styled";

function Textarea({ children, ...rest }: TextareaProps) {
  const textarea = useRef<HTMLTextAreaElement>(null);

  const autoChangeHeight = () => {
    if (textarea.current === null) return;
    textarea.current.style.height = "auto";
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  };

  return (
    <StyledTextarea
      ref={textarea}
      onChange={(e) => {
        autoChangeHeight();
        if (rest.onChange) {
          rest.onChange(e);
        }
      }}
      {...rest}
    >
      {children}
    </StyledTextarea>
  );
}

export default Textarea;
