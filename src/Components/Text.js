import styled from "styled-components";

export const StyledText = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: blue;
  margin: 3rem;
`;

const Text = (props) => {
  return <StyledText {...props}/>
}

export default Text;

