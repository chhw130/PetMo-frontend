import React from "react";
import styled, { css } from "styled-components";
import StyledWrapperFlexCenter from "./styled/StyledWrapperFlexCenter";
import StyledDot from "./styled/StyledDot";
import PropTypes from "prop-types";

const userBadgeTheme = ({ fontSize }) => {
  const theme = {
    name: {
      small: {
        fontSize: fontSize.caption,
      },
      medium: {
        fontSize: fontSize.caption,
      },
      large: {
        fontSize: fontSize.subtitle1,
      },
    },
    info: {
      small: {
        fontSize: fontSize.caption,
      },
      medium: {
        fontSize: fontSize.caption,
      },
      large: {
        fontSize: fontSize.body2,
      },
    },
  };

  return theme;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ hasAddress }) => (hasAddress ? "column" : "row")};
`;

const Name = styled.span`
  ${({ theme, size }) => {
    const { name } = userBadgeTheme(theme);
    return css`
      ${{
        display: "inline-block",
        color: theme.color.black,
        marginRight: "7px",
        ...name[size],
      }}
    `;
  }}
`;

const Info = styled.span`
  ${({ theme, size }) => {
    const { info } = userBadgeTheme(theme);

    return css`
      ${{
        color: theme.color.gray700,
        ...info[size],
      }}
    `;
  }}
`;

function UserBadgeTextSmall({ size, userName, address, elapsedTime }) {
  return (
    <Wrapper hasAddress={!!address}>
      <Name size={size}>{userName}</Name>
      <StyledWrapperFlexCenter>
        {address && (
          <>
            <Info size={size}>{address}</Info>
            <StyledDot />
          </>
        )}
        <Info size={size}>{elapsedTime}</Info>
      </StyledWrapperFlexCenter>
    </Wrapper>
  );
}

UserBadgeTextSmall.propTypes = {
  size: PropTypes.string,
  withButton: PropTypes.bool,
  imgSrc: PropTypes.string,
  userName: PropTypes.string,
  address: PropTypes.string,
  elapsedTime: PropTypes.string,
};
export default UserBadgeTextSmall;
