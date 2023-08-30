import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  font-size: 0;

  .slick-list {
    border-radius: 4px;
  }

  .slick-dots {
    position: static;
    margin-top: 8px;

    li {
      width: 6px;
      height: 6px;
    }

    button {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      border-radius: 100%;
      background-color: ${({ theme: { color } }) => color.gray300};
      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: ${({ theme: { color } }) => color.main};
    }

    button::before {
      width: 0;
      height: 0;
    }
  }
`;

export default StyledSlider;
