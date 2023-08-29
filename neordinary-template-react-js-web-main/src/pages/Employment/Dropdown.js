// Dropdown.js

import React from "react";
import styled from 'styled-components';

const DropdownMenu = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 4px;
    margin-left: 5rem;
    width: 190px;
    max-height: 70vh; /* 최대 높이 설정 */
    overflow-y: auto; /* 스크롤 가능하게 설정 */
    box-shadow: 0 4px 8px rgba(0,0,0,.15);
    z-index: 99;

    ul {
        padding: 0;
        list-style-type: none;
    }

    /* 스크롤바 스타일 지정 */
    &::-webkit-scrollbar {
        width: 6px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 트랙의 배경색 */
    }

    &::-webkit-scrollbar-thumb {
        background: #e1e2e3; /* 스크롤바 색상 */
        border-radius: 6px; /* 스크롤바 모양 (둥글게) */
    }

`;

const MenuItem = styled.li`
    font-size: 16px;
    line-height: 24px;
    color: #333;
    padding: 10px 0 10px 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f8f8f8;
    }
`;

const Dropdown = ({ active }) => {
    return (
        <DropdownMenu active={active}>
            <ul>               
                <MenuItem>전체</MenuItem>
                <MenuItem>개발</MenuItem>
                <MenuItem>경영·비즈니스</MenuItem>
                <MenuItem>마케팅·광고</MenuItem>
                <MenuItem>디자인</MenuItem>
                <MenuItem>영업</MenuItem>
                <MenuItem>고객서비스·리테일</MenuItem>
                <MenuItem>미디어</MenuItem>
                <MenuItem>엔지니어링·설계</MenuItem>
                <MenuItem>게임제작</MenuItem>
                <MenuItem>HR</MenuItem>
                <MenuItem>금융</MenuItem>
                <MenuItem>제조·생산</MenuItem>
                <MenuItem>물류·무역</MenuItem>
                <MenuItem>교육</MenuItem>
                <MenuItem>의료·제약·바이오</MenuItem>
                <MenuItem>법률·법집행기관</MenuItem>
                <MenuItem>건설·시설</MenuItem>
                <MenuItem>식·음료</MenuItem>
                <MenuItem>공공·복지</MenuItem>
            </ul>
        </DropdownMenu>
    );
}

export default Dropdown;
