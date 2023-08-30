import styled, { css } from "styled-components";

const StyledChip = styled.div`
  ${({
    theme: { color: colorTheme, borderRadius, fontSize },
    color,
    backgroundColor,
  }) => {
    return css`
      ${{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 8px",
        borderRadius: borderRadius.small,
        fontSize: fontSize.caption,
        backgroundColor: colorTheme[backgroundColor],
        color: colorTheme[color],
      }}
    `;
  }}
`;

export default StyledChip;
