import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubmitTemaplete from './SubmitTemaplete.js'; // Submit 컴포넌트를 import

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faBookmark, faUserCircle } from '@fortawesome/free-solid-svg-icons';




function ApplyBox({
    likeuser,
    handleMove,
    handleModal,
    handleShareModal,
    shareToggle,
    onLikeToggle,
    goToApply,
    likeToggle,
    likeNumber,
    modal,
    recruitList,
}) {
    const [showSubmit, setShowSubmit] = useState(false); // 상태 추가

    // useEffect(() => {
    //     console.log('showSubmit is now:', showSubmit);
    //     console.log('goToApply is now:', goToApply);
    //   }, [showSubmit] ,[goToApply]);

    const handleApplyClick = () => {
        console.log('Apply 버튼 클릭됨'); // 이 줄 추가
      setShowSubmit(true); // '지원하기' 버튼 클릭 시 Submit 컴포넌트 표시

    };
    
    return(
        <>

                <ApplyTemplateBlock >
                  <ApplyTemplateText>
                    채용보상금
                    <Share>
                        <i>
                            <FontAwesomeIcon icon={faShareAlt} /> 
                        </i>
                    </Share>
                  </ApplyTemplateText>
                  <ApplyTemplateHead>
                    <li>
                      <h4>추천인</h4>
                      <ApplyTemplateText>5,000,000원</ApplyTemplateText>
                    </li>
                    <li>
                      <h4>지원자</h4>
                      <ApplyTemplateText>5,000,000원</ApplyTemplateText>
                    </li>
                  </ApplyTemplateHead>
                  <ApplyTemplateBtn
                    backgroundColor="white"
                    color="#00c8a2"
                  >
                    <i>
                        <FontAwesomeIcon icon={faBookmark} />
                    </i>
                    <p>북마크하기</p>
                  </ApplyTemplateBtn>
                  <ApplyTemplateBtn
                    backgroundColor="#36f"
                    color="white"
                    onClick={handleMove} // '지원하기' 버튼 클릭 시 처리 함수 호출
                  >
                    <p>지원하기</p>
                  </ApplyTemplateBtn>
                  <LikeForm>
                    <ApplyLikeBtn>
                      <img
                        alt="like"
                        src="/Images/Detail/likeActive.png"
                      />
                      <span>10</span>
                    </ApplyLikeBtn>
                    <LikeUser likeToggle={true} likeuser={true}>
                        <i>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </i>
                    </LikeUser>
                  </LikeForm>
                </ApplyTemplateBlock>
      
    </>
  );
}
export default ApplyBox; 
        
const ApplyTemplateBlock = styled.div`
  width: 340px;
  height: 320px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
  position: sticky;
  right: 0;
  top: 20px;
  display: ${(props) => (props.goToApply ? 'none' : 'block')};
  margin-top: 3px;
  margin-left: 1rem;

  @media (max-width: 992px) {
    width: 100%;
    height: 46px;
    padding: 0;
    border: none;
    position: fixed;
    top: unset;
    bottom: 20px;
    display: flex;
    z-index: 9999;
    justify-content: center;

    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      display: none;
    }
    button:nth-child(3) {
      display: none;
    }
    button:nth-child(4) {
      display: block;
      border: none;
      width: 97%;
      box-shadow: 0 0 60px white;
    }

    div:nth-child(5) {
      display: none;
    }
  }
`;

const ApplyTemplateHead = styled.div`
  display: flex;
  margin: 24px 0;
  list-style: none;
  color: #999;
  line-height: 1.2;
  h4 {
    margin-bottom: 8px;
  }
  li {
    width: 50%;
    h4 {
      font-size: 14px;
    }
  }
`;

const ApplyTemplateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  i {
    font-size: 25px;
    color: ${(props) => (props.shareToggle ? 'lightgray' : '#36f')};
    cursor: pointer;
    background: none;
  }
`;

export const ApplyTemplateBtn = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  img {
    width: 13px;
    height: 17px;
    margin-right: 8px;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  i {
    margin-right: 9px;
    color: ${(props) => (props.modal ? '00c8a2' : '')};
  }
`;

const ApplyLikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #e1e2e3;
  margin-right: 12px;
  padding: 0 15px;
  font-weight: 600;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;
  img {
    width: 15px;
    height: 15px;
    bottom: 1px;
    margin-right: 10px;
  }
  i {
    position: absolute;
    right: 10px;
  }
`;

const LikeUser = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;
  img {
    width: 26px;
    height: 27px;
    position: absolute;
    margin-left: ${({ likeToggle, likeuser }) =>
      likeToggle && likeuser ? '21px' : ''};
    border-radius: 50%;
  }

  i {
    font-size: 28px;
    color: lightgray;
    z-index: 1;
  }
`;

const LikeForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  position: relative;
`;

const Share = styled.button`
    background: none;
    background-color: white;
    border: none;
`;
        