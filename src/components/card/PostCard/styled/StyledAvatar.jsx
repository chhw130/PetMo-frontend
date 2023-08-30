import styled, { css } from "styled-components";

const avatarTheme = {
  size: {
    small: {
      width: "28px",
      height: "28px",
    },
    medium: {
      width: "36px",
      height: "36px",
    },
    large: {
      width: "80px",
      height: "80px",
    },
  },
};

const StyledAvatar = styled.div`
  ${({ theme: { color }, size }) => {
    const { size: avatarSize } = avatarTheme;

    return css`
      ${{
        position: "relative",
        borderRadius: "50%",
        backgroundColor: color.bgDark,
        ...avatarSize[size],
      }}
    `;
  }}
`;

export default StyledAvatar;
