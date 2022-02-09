import styled from "styled-components";

const StyledFlex = styled.div`
    background: ${props => props.color || 'white'};
`;


const Flex = (props) => {

    return <StyledFlex {...props}/>
}

export default Flex;