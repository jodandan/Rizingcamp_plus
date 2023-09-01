
import {React , useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function AppJoin({ navigateToLogin }) {
  // State variables
  const [agreedChecked, setAgreedChecked] = useState({
    entireChecked: false,
    essentialChecked: false,
    optionalChecked: false,
  });
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone_number: '',
    password: '',
    pwdCheckValue: '',
  });
  const [idValidation, setIdValidation] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [pwdValidation, setPwdValidation] = useState(true);
  const [pwdReValidation, setPwdReValidation] = useState(true);
  const [existPhoneNumber, setExistPhoneNumber] = useState(false);

  const navigate = useNavigate();

  // Email and country code are fixed values
  const email = 'wanted123@gmail.com';
  const country_code = '82';

  // URL for API call
  const apiUrl = 'wanted.ap-northeast-2.elasticbeanstalk.com/user';

  // Function to toggle the "Entire Agreement" checkbox
  const selectAllCheckedBox = () => {
    setAgreedChecked((prevState) => ({
      ...prevState,
      entireChecked: !prevState.entireChecked,
    }));
  };

  // Function to toggle the "Essential Information" checkbox
  const selectEssentialCheckBox = () => {
    setAgreedChecked((prevState) => ({
      ...prevState,
      essentialChecked: !prevState.essentialChecked,
    }));
  };

  // Function to toggle the "Optional Information" checkbox
  const selectOptionalCheckBox = () => {
    setAgreedChecked((prevState) => ({
      ...prevState,
      optionalChecked: !prevState.optionalChecked,
    }));
  };

  // Function to upload user information
  const uploadUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to check validation of required fields
  const checkValidation = () => {
    setIdValidation(!!userInfo.name);
    setPhoneValidation(/^\d{10,11}$/.test(userInfo.phone_number));
    setPwdValidation(userInfo.password.length >= 6);
    setPwdReValidation(userInfo.password === userInfo.pwdCheckValue);
  };

  const handleCloseAndNavigate = () => {
    // Close the modal (you can implement this part)
    
    // Navigate to the login page
    navigate('/login');
  };


  // Function to send a membership registration request
  const signUp = () => {
    // Check whether all required information has been entered and essentialChecked is true
    if (
      userInfo.name &&
      userInfo.phone_number &&
      userInfo.password &&
      agreedChecked.essentialChecked
    ) {
      // Create request body
      const requestBody = {
        email,
        name: userInfo.name,
        password: userInfo.password,
        country_code,
        phone_number: userInfo.phone_number,
        marketing_email: 'Y',
        marketing_push: 'N',
        marketing_sms: 'N',
      };
  
      // Send POST request
        fetch("http://wanted.ap-northeast-2.elasticbeanstalk.com/users", {
          method: 'POST',
          mode: 'cors', // set to CORS request
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody), // Replace the semicolon with a comma
        })
        .then((response) => {
          // Check if the response status code is 200 OK
          if (response.status === 200) {
            return response.json(); // Parse the JSON response
          } else {
            throw new Error('HTTP Error ' + response.status);
          }
        })
        .then((data) => {
          // If the request is successful, process it here
          console.log('Successful registration:', data);
          // When membership registration is successful, perform the desired action
          // Example: closing modal, notifying user, etc.
        })
        .catch((error) => {
          // If the request fails, handle it here
          console.error('Sign up failed:', error);
          // If membership registration fails, perform necessary processing such as notifying the user
        });
    } else {
      // Handle when all required information is not entered or essentialChecked is false
      alert('Please enter all required information and agree.');
    }
  };

  return (
    <>
      <SignUpModal>
        <SecondModalHeader>
          <strong>회원 가입</strong>
          <SecondeExitButton>
            <i
              className="fas fa-times"
              onClick={handleCloseAndNavigate}
            />
          </SecondeExitButton>
        </SecondModalHeader>
        <SecondModalBody
          onKeyUp={() => agreedChecked.essentialChecked && checkValidation()}
        >
          <InformationLabel htmlFor="name">이름</InformationLabel>
          <UserInput
            type="text"
            placeholder="이름을 입력해 주세요."
            name="name"
            onChange={uploadUserInfo}
            valid={idValidation}
          />
          {idValidation === false && (
            <ErrorText>이름은 필수정보 입니다.</ErrorText>
          )}
          <InformationLabel htmlFor="phoneNumber">휴대폰 번호</InformationLabel>
          <UserInput
            type="text"
            placeholder="(예시) 01034567890"
            name="phone_number"
            onChange={uploadUserInfo}
            valid={phoneValidation}
          />
          {phoneValidation === false && (
            <ErrorText>올바른 연락처 형식이 아닙니다.</ErrorText>
          )}
          {existPhoneNumber && (
            <ErrorText>이미 존재하는 전화번호입니다.</ErrorText>
          )}
          <InformationLabel htmlFor="password">비밀번호</InformationLabel>
          <UserInput
            type="password"
            placeholder="비밀번호를 6자 이상 입력해 주세요."
            name="password"
            onChange={uploadUserInfo}
            valid={pwdValidation}
          />
          {pwdValidation === false && (
            <ErrorText>비밀번호를 6자 이상 입력해 주세요.</ErrorText>
          )}
          <InformationLabel htmlFor="checkPassword">
            비밀번호 확인
          </InformationLabel>
          <UserInput
            type="password"
            placeholder="비밀번호를 다시 한번 입력해 주세요."
            name="pwdCheckValue"
            onChange={uploadUserInfo}
            valid={pwdReValidation}
          />
          {pwdReValidation === false && (
            <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
          )}
          <UserCheckContainerBorder>
            <CheckBox
              name="entireChecked"
              checked={agreedChecked.entireChecked}
              onClick={selectAllCheckedBox}
            />
            전체 동의
          </UserCheckContainerBorder>
          <UserCheckContainer>
            <CheckBox
              name="essentialChecked"
              checked={agreedChecked.essentialChecked}
              onClick={selectEssentialCheckBox}
            />
            <GraySpan>개인정보 수집 및 이용 동의(필수)</GraySpan>
          </UserCheckContainer>
          <UserCheckContainer>
            <CheckBox
              name="optionalChecked"
              checked={agreedChecked.optionalChecked}
              onClick={selectOptionalCheckBox}
            />
            <GraySpan>이벤트 소식 등 알림 정보 받기</GraySpan>
          </UserCheckContainer>
        <StartingSignUpBox
          agreedChecked={agreedChecked}
          onClick={signUp} // 회원가입 버튼 클릭 시 signUp 함수 호출

        >
          회원가입하기
        </StartingSignUpBox>
        </SecondModalBody>
      </SignUpModal>
      <SecondTranparentBackground
        onClick={handleCloseAndNavigate}
      />
    </>
  );
}

const SignUpModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  z-index: 14;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #FFFFFF;
  border: 1px solid #e1e2e3;
  ::-webkit-scrollbar {
    display: none;
  }
`;

 const InformationLabel = styled.label`
  color: #767676;
  font-size: 14px;
  font-weight: normal;
`;


const SecondTranparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 13;
  background-color: #f7f7f7;
`;

const SecondModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px 20px;

  strong {
    position: relative;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

const SecondeExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  i {
    position: relative;
    top: 4px;
    left: 130px;
    font-size: 20px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const SecondModalBody = styled.section`
  padding: 20px;

  div:nth-child(9) {
    height: auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 15px;
  }
`;

const UserInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.valid === false ? 'red' : '#e1e2e3')};
  background-color: #fff;
  font-size: 15px;
  color: #333;

  :focus {
    border: 1px solid ${(props) => (props.valid === false ? 'red' : '#e1e2e3')};
  }
`;

const UserCheckContainer = styled.div`
  width: 100%;
  height: 21px;
  margin-bottom: 2px;
`;

const CheckBox = styled.input.attrs((props) => ({
  type: 'checkBox',
}))`
  margin-right: 10px;
`;

const StartingSignUpBox = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 54px;
  margin-top: 30px;
  border: 0;
  border-radius: 27px;
  background-color: ${(props) =>
    props.agreedChecked.essentialChecked ? '#36f' : '#f2f4f7'};
  color: ${(props) =>
    props.agreedChecked.essentialChecked ? '#fff' : ' #cacaca'};
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) =>
    props.agreedChecked.essentialChecked ? 'pointer' : 'not-allowed'};
`;

const GraySpan = styled.span`
  color: #939393;
`;

const ErrorText = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  font-size: 12px;
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const UserCheckContainerBorder = styled(
  UserCheckContainer.withComponent('div')
)`
  height: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
  margin-bottom: 15px;
`;