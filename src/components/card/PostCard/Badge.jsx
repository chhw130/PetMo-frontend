import React, { ReactNode } from "react";
import styled, { css, DefaultTheme } from "styled-components";

const StyledBadge = styled.span`
  ${({ theme: { color, fontWeight, fontSize } }: { theme: DefaultTheme }) => {
    return css`
      ${{
        position: "absolute",
        right: "12px",
        bottom: "12px",
        backgroundColor: color.black,
        opacity: 0.7,
        color: color.white,
        borderRadius: "2px",
        padding: "8px",
        fontWeight: fontWeight.medium,
        fontSize: fontSize.caption,
        lineHeight: "100%",
      }}
    `;
  }}
`;

function Badge({ children }: { children: ReactNode }) {
  return <StyledBadge>{children}</StyledBadge>;
}

export default Badge;
