import React from "react";
import styled from 'styled-components';


const Button = styled.button`
    width: 115px;
    height: 40px;
    margin-left: 0.5rem;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const Region = styled.span`

    margin-right: 1rem;
`;

const Korea = styled.span`

    margin-right: 0.5rem;
    color: blue;
`;

const Emoticon = styled.span`
    
`;

const SelectButtonComponent = () => { 
    return(
            <Button>
                <Region>경력</Region>
                <Korea>전체</Korea>
                    <Emoticon>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333">
                            </path>
                        </svg>
                    </Emoticon>
            </Button>
    );
}

export default SelectButtonComponent;