import styled, { css } from "styled-components";

const roundButtonTheme = {
  size: {
    large: {
      width: "36px",
      height: "36px",
    },
    small: {
      width: "26px",
      height: "26px",
    },
  },
};

const StyledRoundButton = styled.button`
  ${({ theme, size }) => {
    const { size: roundButtonSize } = roundButtonTheme;

    return css`
      ${{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.color.white,
        borderRadius: theme.borderRadius.round,
        backgroundColor: theme.color.main,
        ...roundButtonSize[size],
      }}
    `;
  }}
`;

export default StyledRoundButton;
