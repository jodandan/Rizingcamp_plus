import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router


const Container = styled.div`
    height: 70px;

    padding: 50px 15rem;
`;

const Banner = styled.div`
    display: flex;
    flex-grow: 1;
    color:white;
    background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;

    font-size: 14px;
    font-weight: 700;
    border-radius: 38.5px;
    border: 1px solid grey;
    padding: 21px 30px;
    font-size: 18px;
    line-height: normal;
    
`;
const EmploymentButton = () => { 
    return(
        <Container> 
            <Link to="/employment"> 
                <Banner>
                <FontAwesomeIcon icon={faSearch} style={{ marginRight: '10px' }} />
                    채용 중인 포지션 보러가기
                </Banner>
            </Link>
        </Container>
    );
}

export default EmploymentButton;