import React from "react";
import StyledChip from "./styled/StyledChip";
import PropTypes from "prop-types";

function Chip({ color, backgroundColor, children }) {
  return (
    <StyledChip color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledChip>
  );
}

Chip.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.string,
};

export default Chip;
