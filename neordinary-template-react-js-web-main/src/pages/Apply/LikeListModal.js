import React from 'react';
import styled from 'styled-components';

const LikeListModal = ({ onClose, likedUsers }) => {
  const numberOfLikes = likedUsers.length;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <ModalHeader>
          <h2>이 포지션을 좋아한 사람</h2>
        </ModalHeader>

        <ModalBody>
          <SubTitle>
            {numberOfLikes} {numberOfLikes === 1 ? '명이 좋아요' : '명이 좋아요'}{' '}
          </SubTitle>
          <ul>
            {likedUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LikeListModal;

const ModalOverlay = styled.div`
  // Define the modal's background style.
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

`;

const SubTitle =  styled.div`

  height: 40px;
  background-color: #f7f7f7;
  width:100%;
  margin-bottom:1rem;


`;

const ModalContent = styled.div`
  // Define the style of the modal content.
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 570px; /* Increase the width */
  height: 200px;
  text-align: center;
  position: relative; /* Add position relative to create stacking context */

  h2 {
    margin-top: 0;
  }
`;

const ModalHeader = styled.div`
  padding-bottom: 10px; /* Add padding to separate header and content */
`;

const ModalBody = styled.div`
  padding-top: 10px; /* Add padding to separate header and content */

  ul {
    list-style: none;
    padding: 0;
  }
`;

const CloseButton = styled.button`
  // Define the style of the close button.
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
