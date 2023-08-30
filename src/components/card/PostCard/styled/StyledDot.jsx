import styled from "styled-components";

const StyledDot = styled.div`
  background-color: ${({ theme: { color } }) => color.gray700};
  width: 2px;
  height: 2px;
  margin: 0 7px;
`;

export default StyledDot;
