import React from "react";
import styled from 'styled-components';
import AppHeader from "../../components/AppHeader";

const CategoryBox = styled.div`
    border: 1px solid grey;
`;
const Employment = () => { 
    return(
        <>
            <AppHeader />
                <CategoryBox>
                    여기다가 카테고리 넣자
                </CategoryBox>
        </>
    );
}

export default Employment;