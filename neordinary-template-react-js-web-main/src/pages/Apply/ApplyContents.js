import React from 'react';

import styled from 'styled-components';

function ApplyContents({ google, companyId, setFollowToggle, followToggle }) {
    
    if (!companyId || Object.keys(companyId).length === 0) {
        return null; // Render nothing if companyId is not defined or empty
      }
      
    const companyData = {
        company_name: "예시 회사",
        location: "예시 위치",
        main_work: "• 미궁365 브랜드 성장전략 기획<br>• 대행사 / 파트너사 커뮤니케이션<br>• 마케팅 프로모션 전략 수립 및 실행",
        condition: "• (필수) 건강기능식품 카테고리 3년 이상 경험<br>• 건강기능식품 / 일반식품 관련 법규 및 표시 기준에 대한 지식을 보유하신 분<br>• 스스로 A급 인재라고 생각하는 자부심",
        prefer: "• 목표지향적 사고를 바탕으로 업무가 가능하신 분<br>• 다양한 담당자와의 원활한 소통을 위한 커뮤니케이션 스킬<br>• 고객 관점에서의 셀링포인트 발굴",
        benefit: "• 근무형태 : 정규직 / 연봉제<br>• 근무시간 : 월~금 유연근무제 (08:30~17:30 / 09:00~18:00 / 09:30~18:30 중 매월 택 1)<br>• 퇴직연금 : 매월 퇴직연금 적립",
        due_date: "2023.09.15",
        work_area: "강남구 선릉로 818, 위워크 4층",
    };

  return (
    <>
      {!!Object.keys(companyId).length && (
        <DetailContentsBlock>
          <DetailContentsImg src={"https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
          <DetailContentsHead>
            <h2>채용 상세 정보</h2>
            <SubText>
              <InnerTextList>{companyData.company_name}</InnerTextList>
              <ResBox>응답률 평균 이상</ResBox>
              <InnerTextList color='#999999'>
                {companyData.location} · 한국
              </InnerTextList>
            </SubText>
            <TagBox>#스타트업</TagBox>
            <TagBox>#스톡옵션</TagBox>
            <TagBox>#IT, 컨텐츠</TagBox>
          </DetailContentsHead>
          <InnerText>
            <p>
            무엇을 섭취하든 그 시작은 '비움'입니다.<br/>
            비움의 시작, 미궁365<br/>
            <br/>
            <br/>
            미궁365의 브랜드 전략을 잘 이해하고 새로운 전략을 기획하고 실행할 수 있는 분<br/>
            </p>
          </InnerText>
          <InnerList>주요업무</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: companyData.main_work,
            }}
          ></InnerTextList>
          <InnerList>자격요건</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: companyData.condition,
            }}
          ></InnerTextList>
          <InnerList>우대사항</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: companyData.prefer,
            }}
          ></InnerTextList>
          <InnerList>혜택 및 복지</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: companyData.benefit,
            }}
          ></InnerTextList>
          <InnerLoction>
            <LocationText>
              <GrayText>마감일</GrayText>
              <span
                dangerouslySetInnerHTML={{
                  __html: companyData.due_date,
                }}
              ></span>
            </LocationText>
            <LocationText>
              <GrayText>근무지역</GrayText>
              <span
                dangerouslySetInnerHTML={{
                  __html: companyData.work_area,
                }}
              ></span>
            </LocationText>
          </InnerLoction>
            <Picture src='/Images/Detail/LocationIng.jpg' />
          <FollowContainer>
            <FollowContents>
              <FollowImg src='/Images/Detail/FollowImg.jpg' />
              <div>
                <p>회사명</p>
                <GrayText>업종</GrayText>
              </div>
            </FollowContents>
            <FollowBtn
              onClick={() => setFollowToggle(!followToggle)}
              followToggle={followToggle}
            >
              팔로우
            </FollowBtn>
          </FollowContainer>
        </DetailContentsBlock>
      )}
    </>
  );
}

export default ApplyContents;


const Picture = styled.img`
  height: '350px';
  width: 100%;
`;

const DetailContentsBlock = styled.div`
  flex-direction: column;
  margin: 0 auto;
  width: 700px;

`;

const DetailContentsImg = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 4px;
  @media (max-width: 992px) {
    img:nth-child(1) {
      height: 600px;
    }
  }
`;

const DetailContentsHead = styled.section`
  margin: 40px 0 30px;
  h2 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
  span {
    margin-right: 10px;
  }
`;

const InnerText = styled.div`
  padding-right: 20px;
  span {
    line-height: 1.75;
  }
`;

const InnerList = styled.h6`
    font-size:16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.75;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const InnerLoction = styled.section`
  border-top: 1px solid #eee;
  margin-top: 20px;
  span {
    margin-right: 40px;
    margin-top: 20px;
    width: 80px;
  }
`;

const InnerTextList = styled.span`

  line-height: 1.75;
  li {
    list-style: disc;
  }
`;

const LocationText = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
`;

const FollowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  padding: 20px;
`;

const FollowImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const FollowContents = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.25;
`;

const GrayText = styled.span`
  color: #999;
  font-size: 16px;
  font-weight: 600;
`;

const FollowBtn = styled.button`
  border-radius: 3px;
  background: ${(props) => (props.followToggle ? 'white' : '#258bf7')};
  color: ${(props) => (props.followToggle ? 'black' : '#fff')};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  border: ${(props) => (props.followToggle ? '1px solid black' : 'none')};
  cursor: pointer;
`;

const TagBox = styled.div`
  display: inline-block;
  margin-right: 6px;
  margin: 20px 10px 0 0;
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
`;

const ResBox = styled.div`
  border: 1px solid #855af0;
  color: #855af0;
  font-size: 10px;
  margin-right: 8px;
  padding: 3px;
`;

const SubText = styled.div`
display: flex;
align-items: center;
font-size: 14px;
`;
