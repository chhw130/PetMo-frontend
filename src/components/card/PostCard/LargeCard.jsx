import React from "react";
import UserBadge from "./UserBadge";
import Chips from "./Chips";
import StyledCardText from "./styled/StyledCardText";
import CardImages from "./CardImages";
import PropTypes from "prop-types";

function LargeCard({ postData, children }) {
  const mainTag = postData.mainTag;
  const subTags = postData.subTags;
  const isSummary = postData.isSummary;
  const lineClamp = postData.lineClamp;
  const images = postData.images;
  const imgLength = images.length;
  const imageType = imgLength > 1 ? "slider" : imgLength === 0 ? "image" : null;

  return (
    <>
      <UserBadge size="medium" {...postData.userBadgeData} />
      <div style={{ margin: "12px 0" }}>
        <Chips {...{ mainTag, subTags }}></Chips>
      </div>
      <StyledCardText {...{ isSummary, lineClamp }}>{children}</StyledCardText>
      {imgLength && <CardImages {...{ images, imageType }} />}
    </>
  );
}
LargeCard.propTypes = {
  postData: PropTypes.object,
  children: PropTypes.string,
};

export default LargeCard;
