import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function BookMark() {
  return (
    <Container>
      <GotoBookMark>
        <FontAwesomeIcon icon={faBookmark} className="bookMark" />
            <Text>북마크 모아보기</Text>
        <FontAwesomeIcon icon={faAngleRight} className="arrow" />
      </GotoBookMark>
    </Container>
  );
}

export default BookMark;

const Container = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 12px;
  margin-left: 2rem;
`;

const GotoBookMark = styled.button`
  position: relative;
  width: 180px;
  height: 24px;
  cursor: pointer;
  color: #3366ff;
  margin-top: 2rem;
  margin-left: 11.5rem;
  background: none;
  border: none;

  i {
    position: absolute;
    color: #3366ff;
    font-size: 15px;
  }

  .bookMark {
    top: 6px;
    left: 3px;
  }

  .arrow {
    top: 5px;
    right: 0px;
  }
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #3366ff;
  font-weight: bolder;
`;