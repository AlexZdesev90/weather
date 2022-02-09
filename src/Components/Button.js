import styled, {css} from "styled-components";

const StyledButton = styled.button`
    
    border: red;
    width: 10rem;
    height: 5rem;
    
    ${props => props.primary && css`
    color: ${props => props.color || 'black'};
    background: ${props => props.background || 'white'};
    `};
`;

const LargeButton = styled(StyledButton)`

    font-size: 30px;
    `;

export const Button = (props) => {

    return <StyledButton {...props} />
}



export const Utton = (props) => {

    return <LargeButton {...props}/>
}

