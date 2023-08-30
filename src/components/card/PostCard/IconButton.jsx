import React from "react";
// import { StyledRoundButton } from "../style";
import StyledRoundButton from "./styled/StyledRoundButton";
import PropTypes from "prop-types";

function IconButton({ size, Icon, ...rest }) {
  return (
    <StyledRoundButton size={size} {...rest}>
      <Icon />
    </StyledRoundButton>
  );
}

IconButton.propTypes = {
  size: PropTypes.string,
  Icon: PropTypes.string,
};

export default IconButton;
