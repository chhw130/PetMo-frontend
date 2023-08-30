import React from "react";
import styled, { css } from "styled-components";
import UserBadge from "./UserBadge";
import IndicatorIcon from "../assets/IndicatorIcon";

const Wrapper = styled.div<{ depth: 1 | 2 }>`
  ${({ depth }) => {
    return css`
      ${{
        paddingLeft: depth === 2 ? "36px" : "0",
        marginBottom: "12px",
      }}
    `;
  }}
`;

const StyledUserBadge = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentText = styled.p`
  ${({ theme: { fontSize, color } }) => {
    return css`
      ${{
        padding: "0 36px",
        fontSize: fontSize.body2,
        color: color.black,
      }}
    `;
  }}
`;

const Indicator = styled.button``;

const ReplyButton = styled.button`
  ${({ theme: { fontSize, fontWeight, color } }) => {
    return css`
      ${{
        display: "block",
        paddingLeft: "36px",
        fontSize: fontSize.caption,
        fontWeight: fontWeight.medium,
        color: color.gray700,
      }}
    `;
  }}
`;

function Comment({
  isMyComment = false,
  userBadgeData,
  content,
  depth,
  onClickReply,
  onClickIndicator,
}: CommentProps) {
  return (
    <Wrapper depth={depth}>
      <StyledUserBadge>
        <UserBadge {...userBadgeData} size="small" />
        {isMyComment && (
          <Indicator type="button" onClick={onClickIndicator}>
            <IndicatorIcon />
          </Indicator>
        )}
      </StyledUserBadge>
      <CommentText>{content}</CommentText>
      {depth === 1 && (
        <ReplyButton type="button" onClick={onClickReply}>
          답글달기
        </ReplyButton>
      )}
    </Wrapper>
  );
}

export default Comment;
