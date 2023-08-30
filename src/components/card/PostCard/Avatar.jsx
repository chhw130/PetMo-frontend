import React from "react";
import IconButton from "./IconButton";
// import CheckIcon from "../assets/CheckIcon";
import PropTypes from "prop-types";
import StyledAvatar from "./styled/StyledAvatar";

const iconButtonLocationStyle = {
  position: "absolute",
  bottom: "0",
  right: "0",
};

function Avatar({ size, imgSrc, withButton = false }) {
  return (
    <StyledAvatar size={size}>
      <img
        src={imgSrc}
        style={{ width: "100%", height: "100%" }}
        alt="사용자 이미지"
      />
      {size === "large" && withButton && (
        <IconButton
          size="small"
          // Icon={CheckIcon}
          style={iconButtonLocationStyle}
        />
      )}
    </StyledAvatar>
  );
}
Avatar.propTypes = {
  size: PropTypes.string,
  withButton: PropTypes.bool,
  imgSrc: PropTypes.string,
};

export default Avatar;
