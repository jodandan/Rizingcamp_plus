import React from "react";
import styled from 'styled-components';


const Button = styled.button`
    width: 95px;
    height: 40px;
    margin-left: 12.5rem;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const Region = styled.span`
    border: 1px solid red;
    margin-right: 1rem;
`;

const Korea = styled.span`
    border: 1px solid blue;
    color: blue;
`;


const ButtonComponent = () => { 
    return(
            <Button>
                <Region>지역</Region>
                <Korea>한국</Korea>
            </Button>
    );
}

export default ButtonComponent;