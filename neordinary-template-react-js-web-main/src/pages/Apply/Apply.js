import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ApplyContents from './ApplyContents';
import AppHeader from '../../components/AppHeader';
import ApplyBox from './ApplyBox';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 40px;
`;


const Wrapper = styled.div`
  display: flex;
  width: 1060px;
  position: relative;

  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;




function Apply() {

    const { companyId } = useParams();
    return (
        <>
        <AppHeader/>
        <Container>
            <Wrapper>
                <ApplyContents companyId={companyId} />
                <ApplyBox/>
            </Wrapper>
        </Container>
      </>
    );
  }
  

export default Apply;

