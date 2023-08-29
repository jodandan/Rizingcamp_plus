import React from "react";
import styled from 'styled-components';
import ButtonComponent from "../../components/ButtonComponent";
import SelectButtonComponent from "../../components/SelectButtonComponent";
import ThirdButtonComponent from "../../components/ThirdButtonComponent";
import LastButtonComponent from "../../components/LastButtonComponent";

import BookMark from "./Bookmark";
import CompanyList from "./CompanyList";


const Container = styled.div`

    height: 100px;
`;

const Box = styled.div`
    margin-top: 2rem;

    display: flex;
`;

const Divider = styled.div`
    max-width: 100%;
    margin: 25px auto;
    border-bottom: 2px solid rgba(236,236,236,.7);;
`;

const SecondTop = () => { 
    return(
        <>
            <Container>
                <Box>
                    <ButtonComponent/>
                    <SelectButtonComponent/>
                    <ThirdButtonComponent/>
                    <LastButtonComponent/>
                </Box>
                <Divider/>
            </Container>
            <BookMark/>
            <CompanyList/>

        </>
    );
}

export default SecondTop;