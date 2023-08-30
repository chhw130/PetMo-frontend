import React from "react";
import StyledSlider from "./styled/StyledSlider";
import RatioImage from "./RatioImage";
import Badge from "./Badge";
import PropTypes from "prop-types";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CardImages({ imageType, images }) {
  return (
    <>
      {imageType === "slider" && (
        <StyledSlider {...sliderSettings}>
          {images.map(({ id, img_path, alt }) => (
            <RatioImage key={id} src={img_path} alt={alt} />
          ))}
        </StyledSlider>
      )}
      {imageType === "image" && (
        <div style={{ position: "relative" }}>
          <RatioImage src={images[0].src} alt={images[0].alt} />
          {images.length > 1 && <Badge>+{images.length - 1}</Badge>}
        </div>
      )}
    </>
  );
}

CardImages.propTypes = {
  imageType: PropTypes.object,
  images: PropTypes.any,
};

export default CardImages;
