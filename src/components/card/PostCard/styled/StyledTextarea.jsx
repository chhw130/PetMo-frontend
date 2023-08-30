import styled, { css, DefaultTheme } from "styled-components";

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  ${({ theme: { color, fontSize } }: { theme: DefaultTheme }) => {
    return css`
      ${{
        color: color.black,
        resize: "none",
        overflow: "hidden",
      }}

      &::placeholder, &::-webkit-input-placeholder, &::-ms-input-placeholder {
        color: ${color.gray600};
        font-size: ${fontSize.body1};
      }
    `;
  }}
`;

export default StyledTextarea;
