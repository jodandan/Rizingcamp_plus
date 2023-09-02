import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ApplyContents from './ApplyContents';
import AppHeader from '../../components/AppHeader';
import ApplyBox from './ApplyBox';
import SubmitTemaplete from './SubmitTemaplete';

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
  const [likeuser, setLikeUser] = useState(false);
  const [recruitList, setRecruitList] = useState([]);
  const [likeToggle, setLikeToggle] = useState(true);

  const [goToApply, setGoToApply] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const [modal, setModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const [input, setInputs] = useState({
    nameValue: '',
    emailValue: '',
    phoneValue: '',
    recommendValue: '',
  });
  const [nameValid, setNameValid] = useState(false);
  const [submitList, setSubmitList] = useState([]);


  const handleMove = () => {
    setGoToApply(!goToApply);
    setHideContent(!hideContent);
  };

  const toggleApplyBox = () => {
    setGoToApply(!goToApply);
  };

  const handleValue = (e) => {
    // 입력값을 해당 필드의 상태에 업데이트
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };  

  const handleValid = () => {
    if (
      !input.nameValue.length &&
      !input.emailValue.length &&
      !input.phoneValue.length
    ) {
      setNameValid(!nameValid);
    }
  }

  const onLikeToggle = () => {
    const testToken = localStorage.getItem('userToken');
    setLikeUser(!likeuser);
    {/* fetch(`${API}/account/like`, {
      method: 'POST',
      headers: {
        Authorization: testToken,
      },
      body: JSON.stringify({
        recruit_id: detailList.id,
      }),
    }).then((res) => res.json());
  }; */}
  console.log(likeuser, '좋아요눌림.');
}



  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('submitList'));
    setSubmitList(list);
  }, []);

    const { companyId } = useParams();
    return (
        <>
        <AppHeader/>
      <Container>
        <Wrapper>
          <ApplyContents companyId={companyId} />
          {goToApply ? (
            <SubmitTemaplete
              goToApply={goToApply}
              handleMove={toggleApplyBox} // SubmitTemaplete 컴포넌트에서 지원하기 버튼을 누르면 ApplyBox 표시로 변경
              handleValue={handleValue}
              nameValid={nameValid}
              input={input}
              setSubmitList={setSubmitList}
            />
          ) : (
            <ApplyBox
              goToApply={goToApply}
              handleMove={toggleApplyBox}
              recruitList={recruitList}
              likeuser={likeuser}
              onLikeToggle={onLikeToggle} 
              likeToggle={likeToggle}
            />
          )}
        </Wrapper>
      </Container>
      </>
    );
  }
  

export default Apply;

