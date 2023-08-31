import React from "react";
import styled from 'styled-components';


const Button = styled.button`
    width: 95px;
    height: 40px;
    margin-left: 12.5rem;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const Region = styled.span`
    
    margin-right: 1rem;
`;

const Korea = styled.span`
    
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