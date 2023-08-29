import React from "react";
import styled from 'styled-components';
import ButtonComponent from "../../components/ButtonComponent";
import SelectButtonComponent from "../../components/SelectButtonComponent";
import ThirdButtonComponent from "../../components/ThirdButtonComponent";
import LastButtonComponent from "../../components/LastButtonComponent";

import BookMark from "./Bookmark";


const Container = styled.div`
    border-bottom: 1px solid grey;
    height: 100px;
`;

const Box = styled.div`
    margin-top: 2rem;
    border-bottom: 1px solid grey;
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

        </>
    );
}

export default SecondTop;