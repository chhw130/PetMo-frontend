import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 20px;
  padding-bottom: 75%;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function RatioImage({ src, alt }) {
  return (
    <StyledImageWrapper>
      <Image src={src} alt={alt} />
    </StyledImageWrapper>
  );
}

RatioImage.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
};

export default RatioImage;
