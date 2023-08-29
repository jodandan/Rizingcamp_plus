import React from "react";
import styled from 'styled-components';
import ButtonComponent from "../../components/ButtonComponent";
import SelectButtonComponent from "../../components/SelectButtonComponent";
import ThirdButtonComponent from "../../components/ThirdButtonComponent";
import LastButtonComponent from "../../components/LastButtonComponent";

const Container = styled.div`
    border-bottom: 1px solid grey;
    height: 100px;
`;

const Box = styled.div`
    margin-top: 2rem;
    border-bottom: 1px solid grey;
    display: flex;
`;




const SecondTop = () => { 
    return(
        <Container>
            <Box>
                <ButtonComponent/>
                <SelectButtonComponent/>
                <ThirdButtonComponent/>
                <LastButtonComponent/>
            </Box>

        </Container>
    );
}

export default SecondTop;