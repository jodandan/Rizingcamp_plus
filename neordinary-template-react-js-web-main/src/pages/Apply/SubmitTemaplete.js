import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ApplyTemplateBtn } from './ApplyBox';
import UploadFile from './UploadFile';
import Input_list from './Input_list';
import { useNavigate } from 'react-router-dom';

function SubmitTemplate({
  setSubmitList,
  detailList,
  goToApply,
  input,
  checkSubmit,
  setCheckSubmit,
  handleMove,
  handleValue,
  nameValid,
  hideContent,
}) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [currentColor, setCurrentColor] = useState([]);

  const inputValid =
    input.nameValue.length &&
    input.emailValue.length &&
    input.phoneValue.length;

  const navigate = useNavigate();

  useEffect(() => {
    currentColor.length ? setSubmit(true) : setSubmit(false);
  }, [currentColor]);

  const handleOnSubmit = async () => {
    if (inputValid && submit) {
      try {
        // API 엔드포인트 URL
        const apiUrl = 'http://wanted.ap-northeast-2.elasticbeanstalk.com/applications';

        // 요청 헤더 설정
        const headers = {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6eGN2YjEyMzRAbmF2ZXIuY29tIiwiaXNzIjoiaGJqdzEyM0BnbWFpbC5jb20iLCJpYXQiOjE2OTM2NDM0NjQsImV4cCI6MTY5NDg1MzA2NCwiaWQiOjI2fQ.YS9icfEGEf37c5x-OLa5MHPI3BwEUb97_xQlQR6ZSSU'
        };

        // 요청 바디 데이터
        const data = {
          recruitment_id: 7, // 실제로 사용할 값으로 설정
        };
        // POST 요청 보내기
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6eGN2YjEyMzRAbmF2ZXIuY29tIiwiaXNzIjoiaGJqdzEyM0BnbWFpbC5jb20iLCJpYXQiOjE2OTM2NDM0NjQsImV4cCI6MTY5NDg1MzA2NCwiaWQiOjI2fQ.YS9icfEGEf37c5x-OLa5MHPI3BwEUb97_xQlQR6ZSSU',
            'Content-Type': 'application/json', // JSON 형식으로 요청을 보냄
          },
          body: JSON.stringify(data),
        });

        console.log('Response:', response);

        if (response.status === 200) {
          alert('제출이 완료되었습니다.');

          const list = localStorage.getItem('submitList')
            ? JSON.parse(localStorage.getItem('submitList'))
            : [];

          // detailList에서 해당 공고의 정보를 가져와서 추가
          const newDetail = list.find(item => item.recruitment_id === data.recruitment_id);
          if (newDetail) {
            list.push(newDetail);
          }

          localStorage.setItem('submitList', JSON.stringify(list));

          const newList = JSON.parse(localStorage.getItem('submitList'));
          setSubmitList(newList);
          console.log(newList);
          navigate('/');
        } else {
          // 오류 처리
          console.error('제출 실패. 상태:', response.status);
        }
      } catch (error) {
        // 네트워크 오류 또는 기타 오류 처리
        console.error('오류:', error);
      }
    }
  };

  const onFileChange = (e) => {
    setSelectedFile([...selectedFile, e.target.files[0].name]);
  };

  const handleCheckValue = (index) => {
    currentColor.includes(index)
      ? setCurrentColor(currentColor.filter((color) => color !== index))
      : setCurrentColor([...currentColor, index]);
  };

  return (
    <>
      <SubmitTemplateBlock
        goToApply={goToApply}
        input={input}
        checkSubmit={checkSubmit}
        setCheckSubmit={setCheckSubmit}
        hideContent={hideContent}
        nameValid={nameValid}
        selectedFile={selectedFile}
      >
        <SubmitHead>
          <h2>지원하기</h2>
          <button onClick={handleMove}>뒤로</button>
        </SubmitHead>
        <SubmitContents overflow="auto" height="450px">
          <SubmitText>
            <h2>지원하기</h2>
          </SubmitText>
          {Input_list.map((list, index) => {
            return (
              <SubmitInputForm nameValid key={index}>
                <h2>{list.name}</h2>
                <input
                 type="text"
                 onChange={handleValue}
                 value={input[list.value]}
                 name={list.value}
                 autoComplete="off"
                 className={`${nameValid && 'red'}`}
               />
              </SubmitInputForm>
            );
          })}
          <SubmitText margin="35px -20px 20px">
            <h2>첨부파일</h2>
          </SubmitText>
          {selectedFile?.map((file, index) => (
            <UploadFile
              index={index}
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              selectedFile={file}
              setSubmit={setSubmit}
              submit={submit}
              handleCheckValue={handleCheckValue}
            />
          ))}
          <ApplyTemplateBtn color="#666">
            <form method="post" encType="multipart/form-data">
              <label htmlFor="ex_file">파일 업로드</label>
              <input type="file" id="ex_file" onChange={onFileChange} />
            </form>
          </ApplyTemplateBtn>
          <ApplyTemplateBtn color="#666">새 이력서 작성</ApplyTemplateBtn>
          <SubmitContents fontSize="13px" color="#666">
            큐티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.
          </SubmitContents>
        </SubmitContents>
        <SubmitFooter>
          <ApplyTemplateBtn
            color={submit ? 'white' : '#ccc'}
            backgroundColor={submit ? '#3366FF' : '#f2f4f7'}
            onClick={handleOnSubmit}
          >
            제출하기
          </ApplyTemplateBtn>
        </SubmitFooter>
      </SubmitTemplateBlock>
      {hideContent ? <HideContent hideContent={hideContent} /> : ''}
    </>
  );
}

export default SubmitTemplate;

const SubmitTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 634px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  position: sticky;
  right: 0;
  top: 20px;
  margin-top: 1px;
  display: ${({ goToApply }) => (goToApply ? 'block' : 'none')};

  @media (max-width: 992px) {
    display: ${(props) => (props.hideContent ? 'flex' : '')};
    position: fixed;
    width: 500px;
    height: 700px;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 111;
  }
`;

const SubmitHead = styled.div`
  position: fixed;
  background: #fff;
  padding: 15px 20px;
  border-bottom: 1px solid #e1e2e3;
  position: relative;
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    line-height: 22px;
  }
  button {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    color: #999;
    background-color: white;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`;

const SubmitContents = styled.div`
  padding: 0 20px;
  margin-top: 20px;
  font-weight: 400;
  line-height: 1.62;
  height: ${({ height }) => height};
  overflow: ${({ overflow }) => overflow};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  overflow-y: ${({ overflow }) => overflow}; /* 수직 스크롤 유지 */
  overflow-x: hidden; /* 가로 스크롤 숨김 */
`;

const SubmitText = styled.div`
  border-left: 2px solid #258bf7;
  padding-left: 20px;
  margin: 0 -20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin: ${({ margin }) => margin};
`;

const SubmitInputForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: ${({ nameValid }) =>
    nameValid ? '1px solid #e1e2e3;' : '1px solid red'};
  margin-bottom: 5px;
  font-size: 16px;
  h2 {
    width: 80px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: calc(100% - 80px);
    height: 50px;
    padding: 0;
    border: none;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px solid #e1e2e3;
    outline: none;
    &.red {
      border-bottom: 1px solid red;
    }
  }
`;

const SubmitFooter = styled.div`
  padding: 24px 20px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  background: #fff;
`;

const HideContent = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;

  @media (max-width: 992px) {
    display: ${(props) => (props.hideContent ? 'block' : 'none')};
  }
`;
