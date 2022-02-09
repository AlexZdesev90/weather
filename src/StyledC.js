import styled, { createGlobalStyle } from "styled-components";
import Text from "./Components/Text";
import Flex from "./Flex";
import { Button, Utton } from "./Components/Button";

const Global = createGlobalStyle`
*{
    margin-top: 0;
    padding: 0;
}
`;

const AppWrapper = styled.div`
  background: grey;
  width: 100%;
  height: 90vh;
`;

const Input = styled.input`
  display: flex;
  justify-content: centr;
  text-align: centr;
  margin: 2em;
  margin: 0 auto;
  width: 50%;
  &:focus {
      border-radius: 8px;
  }
 
`;




const StyledC = () => {
  return (
    <>
      <Global />
          <AppWrapper>
              <Flex color={"green"}>
        <Text>Some</Text>
        </Flex>
              <Input />
              <Button primary color={'red'}>add</Button>
              <Utton>add</Utton>
      </AppWrapper>
    </>
  );
};

export default StyledC;
