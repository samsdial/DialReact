import styled from "styled-components";


const ButtonHeader = styled.button`
    font-size: .8em;
    padding: 0.25em 1em;
    border: 2px solid transparent;
    border-radius: 0;
    display: inline-block;
    margin: 0;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    background: orange
    &:hover{
        background: darkorange
    }
`;

const LinkHeader = styled(ButtonHeader)`
    font-size: .7em;
    border-radius: 3px;
    color: black;
    background: transparent
    &:hover{
        background: transparent;
        color: darkorange;
    }
`;

const MyComponent = styled.div`background-color: green;`;

export {
    MyComponent,
    ButtonHeader,
    LinkHeader
};
