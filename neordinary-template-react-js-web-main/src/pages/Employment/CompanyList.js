import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function CompanyList({  }) {

    const recruitCompanydata = [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'SAP FICA 컨설턴트',
          company_name: '제이엠씨코퍼레이션에이피제이',
          response_rate: 98, // 예시 응답률
          location: '서울', // 예시 위치
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          title: 'AI기반 반도체 장비 센싱 수집 및 자동제어 SW 개발자',
          company_name: '아이브이웍스',
          response_rate: 95, // 예시 응답률
          location: '부산', // 예시 위치
        },
        {
            thumbnail_url: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Engineering Manager(EM, 5년차+)',
            company_name: '키노라이츠',
            response_rate: 98, // 예시 응답률
            location: '서울', // 예시 위치
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: '[페이스팩토리] 뷰티디바이스 컨텐츠 마케터',
            company_name: '큐비스트',
            response_rate: 95, // 예시 응답률
            location: '부산', // 예시 위치
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'ios개발자',
            company_name: '휴이엠컴퍼니',
            response_rate: 98, // 예시 응답률
            location: '서울', // 예시 위치
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: '프론트엔드 개발자',
            company_name: '러너스',
            response_rate: 95, // 예시 응답률
            location: '부산', // 예시 위치
          },
          {
            thumbnail_url: 'https://plus.unsplash.com/premium_photo-1664439520361-cbd0b12e6ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: '백엔드 개발자',
            company_name: '미띵스',
            response_rate: 98, // 예시 응답률
            location: '서울', // 예시 위치
          },
          {
            thumbnail_url: 'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVFQiU5RSU5QyVFQiU4RCVBNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: '의료기기 품질관리 매니저',
            company_name: '메디웨일',
            response_rate: 95, // 예시 응답률
            location: '부산', // 예시 위치
          },
      ];

  return (
    <Container>
      {recruitCompanydata.map((jo) => (
        <CompanyListItem
        >
          <ImgContainer>
            <Img src={jo.thumbnail_url} alt="회사 이미지" />
          </ImgContainer>
          <ContentBox>
            <Title>{jo.title}</Title>
            <CompanyName>{jo.company_name}</CompanyName>
            <ResponseRate percent={jo.response_rate}>
              응답률 매우 높음
            </ResponseRate>
            <Location>
              <City>{jo.location}</City>
              <Area>한국</Area>
            </Location>
            <Reward>채용보상금 1,000,000원</Reward>
          </ContentBox>
        </CompanyListItem>
      ))}
    </Container>
  );
}

export default CompanyList;

const Container = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  width: 80%;
  height: auto;
  margin-top: 50px;
  margin-left: 11.5rem;
`;

const CompanyListItem = styled.div`
  width: 250px;
  height: 355px;
  cursor: pointer;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 250px;
  height: 187.5px;
`;

const Img = styled.img`
  position: absolute;
  width: 250px;
  height: 187.5px;
  border-radius: 5px;
  overflow: hidden;
  border: none;
`;

const ContentBox = styled.div`
  width: 250px;
  height: 148px;
  padding: 14px 10px;
`;

const Title = styled.div`
  width: 230px;
  height: auto;
  color: #333333;
  line-height: 1.3;
  font-size: 18px;
  font-weight: bolder;
`;

const CompanyName = styled.div`
  width: 230px;
  height: 22px;
  margin-top: 10px;
  color: #333333;
  font-size: 15px;
  font-weight: bolder;
`;

const ResponseRate = styled.div`
  width: 100px;
  height: 19px;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 2px 6px;
  color: #00aead;
  font-size: 11px;
  font-weight: bolder;
  border: 1px solid #00aead;
  border-radius: 2px;
  display: ${({ percent }) => (percent >= 95 ? 'block' : 'none')};
`;

const Location = styled.div`
  position: relative;
  width: 230px;
  height: 22px;
  padding-top: 1px;
`;

const City = styled.span`
  color: #999999;
  font-size: 12px;
`;

const Area = styled(City.withComponent('span'))`
  :before {
    content: '・';
  }
`;

const Reward = styled.div`
  width: 230px;
  height: 18px;
  margin-top: 6px;
  color: #5f5f5f;
  font-size: 12px;
`;