import styled, { css } from "styled-components";

const StyledCardText = styled.p`
  ${({ isSummary, lineClamp }) => {
    return css`
      ${isSummary && {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lineClamp,
        textOverflow: "ellipsis",
        overflow: "hidden",
        height: "66px",
        lineHeight: "140%",
      }}
    `;
  }}
`;

export default StyledCardText;
