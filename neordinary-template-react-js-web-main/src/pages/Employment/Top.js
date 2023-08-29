import React, { useState } from "react";
import styled from 'styled-components';
import Dropdown from './Dropdown';

const CategoryBox = styled.div`
    border: 1px solid gray;
    display: flex;
    position: relative; 
    margin-top: 2rem;
`;

const Text = styled.div`
    font-size: 20px;
    line-height: 29px;
    font-weight: 400;
    color: #aaa;
    margin-top: 2px;
`;


const LeftButton = styled.button`
    padding-top: 3px;
    font-size: 20px;
    line-height: 29px;
    font-weight: 700;
    background: none;
    border: none;
    margin-left: 4rem;

`;

const MoveButton = styled.button`
    margin-left: 1rem;
    padding-left: 1rem;
    position: relative;
    border: 1px solid #e1e2e3;
    border-radius: 9999px;
    background-color: #fff;
    width: 26px;
    height: 26px;
    -webkit-transition: .3s;
    transition: .3s;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding-top: 1rem;


    svg { 
        margin-top: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(${props => props.active ? '180deg' : '0deg'});
        transition: transform 0.3s ease-in-out;
    }


`;


const VerticalBorder = styled.div`
    font-size: 28px;
    line-height: 29px;
    padding: 3px 10px 0;
    color: #ececec;
`;

const Top = () => {
    const [isDropdownActive, setDropdownActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(!isDropdownActive);
    }

    return (
        <>
            <CategoryBox>
                <LeftButton onClick={toggleDropdown}>
                    전체
                    <MoveButton active={isDropdownActive}>
                    <span class="MoreButton_MoreButton__2UmZ8 MoreButton_active__gSugV" role="button" aria-label="popup navigation button">
                        <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="MoreButton_MoreButton__icon__L_DpL">
                            <path fill="#666" fill-rule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z">
                                </path>
                        </svg>
                    </span>
                    </MoveButton>
                </LeftButton>
                <Dropdown active={isDropdownActive} />
                <VerticalBorder> ㅣ </VerticalBorder>
                <Text>직군을 선택해주세요.</Text>
            </CategoryBox>
        </>
    );
}

export default Top;