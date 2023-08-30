import React, { useRef } from "react";
import styled from "styled-components";
import Chip from "./Chip";
import PropTypes from "prop-types";

const StyledChipsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

function Chips({ mainTag, subTags }) {
  const mainChipStyle = useRef({
    backgroundColor: "pink50",
    color: "main",
  });

  const subChipStyle = useRef({
    backgroundColor: "blue50",
    color: "sub",
  });

  return (
    <StyledChipsWrapper>
      <Chip key={mainTag} {...mainChipStyle.current}>
        {mainTag}
      </Chip>
      {subTags?.map((subTag) => (
        <Chip key={subTag} {...subChipStyle.current}>
          {subTag}
        </Chip>
      ))}
    </StyledChipsWrapper>
  );
}

Chips.propTypes = {
  mainTag: PropTypes.string,
  subTags: PropTypes.array,
};

export default Chips;
