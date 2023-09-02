import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function EmailCheck() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleCloseAndNavigate = () => {
    // Close the modal (you can implement this part)
    
    // Navigate to the login page
    navigate('/');
  };

  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!inputEmail) {
      setEmailError('이메일을 입력해 주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (!inputPassword) {
      setPasswordError('비밀번호를 입력해 주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      // Handle form validation errors
      return;
    }

    try {
      const response = await fetch('http://wanted.ap-northeast-2.elasticbeanstalk.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      if (response.ok) {
        const data = await response.json();
        alert('로그인 성공!');
        // Log the response data for debugging
        console.log('Response Data:', data);
  
        // Store tokens in localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        console.log(data.access_token);
        console.log(data.refresh_token);
  
        // Redirect or navigate to the desired page after successful login
        navigate("/");
      } else {
        // Handle login failure, display an error message, etc.
      }
    } catch (error) {
      // Handle network errors, server issues, etc.
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <SignUpModal>
        <SignUpHeader>

                <svg viewBox="-100 -40 300 80" class="css-1kn8y82">
                  <path d="M4.77051 23H8.68066L11.626 13.7578L14.5967 23H18.5068L22.874 9.28906H18.9639L16.4248 18.0996L13.4541 9.28906H9.79785L6.82715 18.0996L4.28809 9.28906H0.37793L4.77051 23ZM22.8486 16.1191C22.8486 19.6865 25.1084 23.3301 29.5264 23.3301C31.0371 23.3428 32.332 22.9111 33.3857 22.1621V23H36.9658V9.28906H33.3857V10.127C32.332 9.37793 31.0371 8.94629 29.5264 8.95898C25.1084 8.95898 22.8486 12.5518 22.8486 16.1191ZM26.3271 16.1191C26.3145 13.6689 27.9902 12.2725 29.9326 12.2598C31.8496 12.2725 33.3604 13.6309 33.3604 16.0938C33.3604 18.5693 31.8496 20.0166 29.9326 20.0039C27.9268 20.0166 26.3145 18.5693 26.3271 16.1191ZM39.1494 23H42.8564V15.1035C42.8564 13.5166 43.7832 12.2725 45.4209 12.2598C47.1855 12.2725 47.9346 13.4658 47.9346 15.002V23H51.6416V14.3418C51.6416 11.3457 50.0928 8.9209 46.6904 8.9082C45.2432 8.9209 43.6309 9.54297 42.7803 10.8887V9.28906H39.1494V23ZM52.708 12.5645H55.1963V18.9375C55.1963 21.6035 56.8594 23.3301 59.5381 23.3301C60.6172 23.3301 61.29 23.1396 61.6201 23V19.7754C61.4297 19.8516 60.9219 19.9023 60.4775 19.9023C59.4238 19.9023 58.8779 19.5088 58.8779 18.3027V12.5645H61.6201V9.28906H58.8779V4.69336L55.2471 6.2168V9.28906H52.708V12.5645ZM62.8389 16.1445C62.8389 20.0928 65.3652 23.3428 69.5166 23.3301C72.5381 23.3428 74.7217 21.6035 75.6865 19.0898L72.3857 18.4043C71.8398 19.585 70.8369 20.3594 69.5166 20.3594C67.752 20.3594 66.5586 18.9756 66.2666 17.1094H76.1436C76.1816 16.792 76.1943 16.4746 76.1943 16.1445C76.1943 11.9551 73.4395 8.95898 69.5166 8.95898C65.4414 8.95898 62.8389 12.1836 62.8389 16.1445ZM66.4443 14.5449C66.9014 13.1992 67.9932 12.2598 69.5166 12.2598C71.04 12.2598 72.1445 13.1992 72.6143 14.5449H66.4443ZM77.4131 16.1191C77.4131 20.1055 79.9395 23.3428 84.0908 23.3301C85.6016 23.3428 86.8965 22.8984 87.9502 22.1621V23L91.5049 23.0254V3.27148L87.874 4.69336V10.0762C86.7568 9.32715 85.4365 8.95898 84.0908 8.95898C80.0029 8.95898 77.4131 12.1201 77.4131 16.1191ZM80.8662 16.1191C80.8662 13.6562 82.542 12.2725 84.4717 12.2598C86.4141 12.2725 87.9121 13.6309 87.9248 16.0684C87.9121 18.5693 86.4141 20.0166 84.4717 20.0039C82.4912 20.0166 80.8662 18.5693 80.8662 16.1191Z" fill="var(--theme-palette-colors-black-100)">
                  </path>
                </svg>

          <ExitButton>
            <i
              className="fas fa-times"
              onClick={() => {
                setSignUpModal('');
                // dispatch(ExitLogin());
              }}
            />
          </ExitButton>
        </SignUpHeader>
        <SignUpBody>
          <CopyContainer>
            <BodyCopy>
              하나의 계정으로
              <br />
              더욱 편리하게
            </BodyCopy>
            <BodySubCopy>
              원티드가 제공하는 서비스를
              <br /> 하나의 계정으로 모두 이용할 수 있습니다.
            </BodySubCopy>
          </CopyContainer>
          <SubmitForm onSubmit={handleSubmit}>
        <InformationInputWrapper>
          <InformationLabel htmlFor="email">이메일</InformationLabel>
          <InformationInput
            type="email"
            placeholder="이메일을 입력해 주세요."
            value={email}
            onChange={handleEmail}
          />
        </InformationInputWrapper>

        <InformationInputWrapper>
          <InformationLabel htmlFor="password">비밀번호</InformationLabel>
          <InformationInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={password}
            onChange={handlePassword}
          />
        </InformationInputWrapper>

        <StartButton onSubmit={handleSubmit}>
          로그인하기
        </StartButton>
      </SubmitForm>
          <BodySubCopy2>
            <Link to="/Join">
            회원가입 하러 가기
            </Link>
          </BodySubCopy2>
          <PreventUserInfomation>
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
            <br /> 회원가입 시 <span>개인정보 처리방침</span>과
            <span>이용약관</span>을 확인하였으며, 동의합니다.
          </PreventUserInfomation>
        </SignUpBody>
      </SignUpModal>
      <Wrapper onClick={handleCloseAndNavigate}
        
      />
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
  z-index: 13;
`;



const SignUpModal = styled.div`
  width: 400px;
  height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 14;
  border: 1px solid #f2fbf5;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SignUpHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px 20px;

  img {
    position: relative;
    left: 20px;
    width: 70px;
    height: 24px;
  }
`;

const ExitButton = styled.button`
  position: relative;
  top: -2px;
  left: 130px;

  i {
    font-size: 20px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const SignUpBody = styled.section`
  padding: 20px;
`;

const CopyContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const BodyCopy = styled.h1`
  line-height: 1.54;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const BodySubCopy = styled.h2`
  margin-top: 16px;
  line-height: 1.5;
  font-size: 14px;
  font-weight: bold;
  color: #888888;
`;

const BodySubCopy2 = styled.div`
  margin-top: 16px;
  line-height: 1.5;
  font-size: 14px;
  font-weight: bold;
  color: #888888;
  text-align: center;
`;


const SubmitForm = styled.form``;

export const InformationLabel = styled.label`
  color: #767676;
  font-size: 14px;
  font-weight: normal;
`;

const InformationInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid ${({ emailValidation }) => (emailValidation ? '#e1e2e3' : 'gray')}; /* Default gray border */
  background-color: #fff;
  font-size: 15px;
  color: #333;

  :focus {
    border: 1px solid ${({ emailValidation }) => (emailValidation ? '#36f' : 'blue')}; /* Blue border when focused */
  }
`;



const InformationInputWrapper = styled.div`
  position: relative;
`;



const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 15px;
  border: 0;
  border-radius: 27px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  :hover {
    opacity: 0.8;
  }
`;

const Or = styled.div`
  margin: 10px 0 10px 0;
  text-align: center;
  color: #969696;
  font-size: 14px;
  font-weight: 500;
`;

const KaKaoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 54px;
  color: #783c00;
  background-color: #ffeb00;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 27px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PreventUserInfomation = styled.div`
  margin-top: 26px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  color: #999;

  span {
    text-decoration: underline;
    color: #3336ff;
  }
`;