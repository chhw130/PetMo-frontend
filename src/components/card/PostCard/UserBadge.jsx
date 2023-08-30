import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import UserBadgeText from "./UserBadgeText";
import PropTypes from "prop-types";
import StyledWrapperFlexCenter from "./styled/StyledWrapperFlexCenter";

const StyledWrapper = styled(StyledWrapperFlexCenter)`
  display: inline-flex;
  gap: ${({ size }) => (size === "large" ? "16px" : "8px")};
`;

function UserBadge({
  size,
  withButton = false,
  imgSrc,
  userName,
  address,
  elapsedTime = null,
}) {
  return (
    <StyledWrapper size={size}>
      <>
        {imgSrc && <Avatar {...{ size, withButton, imgSrc }} />}
        <UserBadgeText {...{ size, userName, address, elapsedTime }} />
      </>
    </StyledWrapper>
  );
}

UserBadge.propTypes = {
  size: PropTypes.string,
  withButton: PropTypes.bool,
  imgSrc: PropTypes.string,
  userName: PropTypes.string,
  address: PropTypes.string,
  elapsedTime: PropTypes.string,
};

export default UserBadge;
