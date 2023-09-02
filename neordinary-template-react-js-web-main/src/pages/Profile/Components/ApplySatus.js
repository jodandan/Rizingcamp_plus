import { React,useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle , faTimes } from '@fortawesome/free-solid-svg-icons'; // 아이콘을 추가하세요



export default function ApplyStatus() {


  const [list, setList] = useState([
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'SAP FICA Consultant',
      company_name: 'JMC Corporation APJ',
      response_rate: 98, // example response rate
      location: 'Seoul', // example location
      position: 'Development',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'AI-based semiconductor equipment sensing collection and automatic control SW developer',
      company_name: 'IV Works',
      response_rate: 95, // example response rate
      location: 'Busan', // example location
      position: 'Development',
    },
  ]);

  const handleCancelApplication = (index) => {
    // Create a copy of the list
    const updatedList = [...list];
    // Remove the item at the specified index
    updatedList.splice(index, 1);
    // Update the state with the new list
    setList(updatedList);
  };


  const day = new Date();
  const today = day.toLocaleDateString();
  return (
    <Container>
      <SideBarContainer>
        <SideBar border>
          <SideBarText>등록한 후보자</SideBarText>
          <SideBarText weigh>추천한 후보자</SideBarText>
        </SideBar>
        <SideBar>
          <SideBarText>지원</SideBarText>
          <SideBarText weigh>작성 중</SideBarText>
          <SideBarText color>지원한 포지션</SideBarText>
        </SideBar>
      </SideBarContainer>
      <Sectioncontents>
        <NavForm>
          <SectionNav color>
            {list && list.length}
            <SectionText>전체</SectionText>
          </SectionNav>
          <SectionNav>
            0<SectionText>채용 완료</SectionText>
          </SectionNav>
          <SectionNav>
            0<SectionText>서류 통과</SectionText>
          </SectionNav>
          <SectionNav>
            {list && list.length}
            <SectionText>접수</SectionText>
          </SectionNav>
          <SectionNav>
            0<SectionText>불합격</SectionText>
          </SectionNav>
        </NavForm>
        <SectionMid>
          <h4>총 {list && list.length}건</h4>
            <div>

                <input type='text' placeholder='회사 / 자원자명 검색'></input>
            </div>
        </SectionMid>
        <SectionForm>
          <SectionSpan width>지원회사</SectionSpan>
          <SectionSpan>지원 포지션</SectionSpan>
          <SectionSpan>작성시간</SectionSpan>
          <SectionSpan>진행상태</SectionSpan>
          <SectionSpan>추천 현황</SectionSpan>
          <SectionSpan>
            보상금 신청
                <i>
                    <FontAwesomeIcon icon={faQuestionCircle} /> 
                </i>
          </SectionSpan>
        </SectionForm>
        {list?.map((list, index) => {
          return (
            <SectionForm key={index} backcolor border height size>
              <SectionSpan width>{list.company_name}</SectionSpan>
              <SectionSpan>
                {list.position.length > 7
                  ? `${list.position.substr(0, 8)}...`
                  : list.position}
              </SectionSpan>
              <SectionSpan>{today}</SectionSpan>
              <SectionSpan>접수</SectionSpan>
              <SectionSpan>대기중</SectionSpan>
              <SectionSpan>신청</SectionSpan>
              <CancelButton onClick={() => handleCancelApplication(index)}>
                    <FontAwesomeIcon icon={faTimes} />
              </CancelButton>
            </SectionForm>
          );
        })}
      </Sectioncontents>
    </Container>
  );
}

const Container = styled.div`
  width: 1060px;
  margin: 0 auto;
  display: flex;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  border-bottom: ${({ border }) => (border ? '1px solid #e0e0e0;' : '')};
  width: 100%;
  cursor: pointer;
`;

const SideBarText = styled.div`
  padding: 8px 0;
  color: ${(props) => (props.color ? '#176fd8' : '#86939e')};
  font-size: 16px;
  font-weight: ${(props) => (props.weigh ? '300' : '500')};
  cursor: pointer;
`;

const SectionNav = styled.div`
  display: inline-block;
  min-width: 120px;
  color: ${({ color }) => (color ? '#176fd8' : '#86939e')};
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  border-right: 1px solid #d1d1d1;
  flex: 1;
  height: 72px;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const SideBarContainer = styled.div`
  width: calc(25% - 25px);
  margin-right: 30px;
`;

const Sectioncontents = styled.div`
  width: 100%;
`;

const NavForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
`;

const SectionMid = styled.div`
  margin: 50px 0 20px;
  display: flex;
  justify-content: space-between;
  input {
    color: #333333;
    font-size: 16px;
    margin-bottom: 20px;
  }
  i {
    align-items: inherit;
    color: #333333;
    margin-right: 5px;
    
  }
`;

const SectionForm = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: ${({ border }) => (border ? '' : '1px solid #d1d1d1;')};
  background-color: ${({ backcolor }) => (backcolor ? 'white' : '')};
  height: ${({ height }) => (height ? '44px' : '')};
  font-size: ${({ size }) => (size ? '14px' : '')};
`;

const SectionSpan = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  color: #86939e;
  width: ${({ width }) => (width ? '150px' : '')};
  i {
    margin-left: 4px;
    font-size: 14px;
  }
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;

  &:hover {
    color: darkred;
  }
`;
