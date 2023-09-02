import React, { useState } from 'react'
import { Link, useNavigate, Button, Form } from 'react-router-dom'
import './ComSignUp.css';

function CompanySignUp() {
    const [companyName, setCompanyName] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [countryKey, setcountryKey] = useState('kr');
    const [locationKey, setlocationKey] = useState('seoul');
    const [industryId, setindustryId] = useState('9927');
    const [size, setsize] = useState('1~4');

    const navigate = useNavigate();

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
      };
    
    const handleRegistrationNumberChange = (event) => {
        setRegistrationNumber(event.target.value);
      };
    const apiUrl = 'http://wanted.ap-northeast-2.elasticbeanstalk.com';
    const companiesEndpoint = '/companies';

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${apiUrl}${companiesEndpoint}`;
    
        const data = {
            name: companyName,
            business_reg_code: registrationNumber,
            nation: countryKey,
            region: locationKey,
            industry: industryId,
            employee_count: size,
        };
        try {
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJoYmp3MTIzQGdtYWlsLmNvbSIsImlhdCI6MTY5MzY0MzQ2NCwiZXhwIjoxNjkzNjQ3MDY0LCJzdWIiOiJ6eGN2YjEyMzRAbmF2ZXIuY29tIiwiaWQiOjI2fQ.tw9frS9PxVpHQtderyI-qE8WinXwcdM_5rf7X9HNIw8',
          },
          body: JSON.stringify(data),
        });
        

        if (response.status==200) {
        const responseData = await response.json();
        console.log('서버 응답:', responseData);
        navigate('/company');
      } else {
        console.error('서버 응답 오류:', response.status);
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };
    
    
  
    return(
        <div id="app">
                <div className="styled__MainAppWrapper-sc-4ve6dq-0 none">
                    <div className="styled__ContentWrapper-sc-1lvffk9-0 daMRDH">
                        <div className="styled__ContentFitWidth-sc-1lvffk9-1 dsvRYi">
                            <section className="styles__Layout-sc-1mta3yl-0 kFTPiQ" style={{}}>
                                <div step={3} className="styles__Container-sc-1mta3yl-1 jBkwjc">
                                    <header className="styles__Wrapper-sc-1nqqrxy-0 hYclqD">
                                        <div className="styles__StepWrapper-sc-1nqqrxy-2 iheSMa">
                                            <div className="styles__ActiveStepWrapper-sc-1nqqrxy-3 hvPiHu">
                                                <strong>기업 등록</strong>
                                            </div>
                                        </div> 
                                    </header>
                                    <form onSubmit={handleSubmit} step={3} method='POST' className="styles__FormWrapper-sc-ehs50u-1 jQIMqB">
                                        <section step={3} className="styles__ContentsWrapper-sc-ehs50u-0 igjgev">
                                            <div className="styles__StepWrapper-sc-ehs50u-2 eEHJfw">
                                                <h1>기업 정보를 등록해 주세요.</h1>
                                                <div className="styled__ListWrapper-sc-1flml4t-0 glhUmC">
                                                    <span>회사 이름</span>
                                                    <input type="text" placeholder="회사 이름" name="companyName" value={companyName} onChange={handleCompanyNameChange} className="styled__StyledInput-sc-61w8cu-0 bHqaKu" />
                                                </div>
                                                <div className="styled__ListWrapper-sc-1flml4t-0 glhUmC">
                                                    <span>사업자 등록 번호</span>
                                                        <input placeholder="'-'제외 숫자" type="text" name="registrationNumber" value={registrationNumber} onChange={handleRegistrationNumberChange}  className="styled__StyledInput-sc-61w8cu-0 gsLgv" />
                                                </div>
                                                <div className="styles__SelectBoxWrapper-sc-ehs50u-4 dJRrZx">
                                                    <p>국가</p>
                                                    <select name="countryKey" value={countryKey} onChange={(event) => setcountryKey(event.target.value)} className="styles__CustomSelect-sc-ehs50u-5 enmNps">
                                                        <option value="kr">한국</option>
                                                        <option value="tw">대만</option>
                                                        <option value="sg">싱가폴</option>
                                                        <option value="jp">일본</option>
                                                        <option value="others">기타</option>
                                                    </select>
                                                    <svg width={10} height="5.714285714285714" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="down" className="Arrow__SVGWrapper-sc-1aaw6vd-0 iwkpzY">
                                                        <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="styles__SelectBoxWrapper-sc-ehs50u-4 dJRrZx">
                                                    <p>지역</p>
                                                    <select name="locationKey" value={locationKey} onChange={(event) => setlocationKey(event.target.value)} className="styles__CustomSelect-sc-ehs50u-5 enmNps">
                                                        <option value="seoul">서울</option>
                                                        <option value="busan">부산</option>
                                                        <option value="daegu">대구</option>
                                                        <option value="incheon">인천</option>
                                                        <option value="gwangju">광주</option>
                                                        <option value="daejeon">대전</option>
                                                        <option value="ulsan">울산</option>
                                                        <option value="sejong">세종</option>
                                                        <option value="gyeonggi">경기</option>
                                                        <option value="gangwon">강원</option>
                                                        <option value="n-chungcheong">충북</option>
                                                        <option value="s-chungcheong">충남</option>
                                                        <option value="n-jeolla">전북</option>
                                                        <option value="s-jeolla">전남</option>
                                                        <option value="n-gyeongsang">경북</option>
                                                        <option value="s-gyeongsang">경남</option>
                                                        <option value="jeju">제주</option>
                                                    </select>
                                                    <svg width={10} height="5.714285714285714" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="down" className="Arrow__SVGWrapper-sc-1aaw6vd-0 iwkpzY">
                                                        <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="styles__SelectBoxWrapper-sc-ehs50u-4 dJRrZx">
                                                    <p>산업군</p>
                                                    <select name="industryId" value={industryId} onChange={(event) => setindustryId(event.target.value)} className="styles__CustomSelect-sc-ehs50u-5 coAubv">
                                                        <option value disabled>산업군</option>
                                                        <option value={9927}>IT, 컨텐츠</option>
                                                        <option value={9924}>판매, 유통</option>
                                                        <option value={9920}>제조</option>
                                                        <option value={9936}>기타 서비스업</option>
                                                        <option value={9930}>전문, 과학기술</option>
                                                        <option value={9928}>금융</option>
                                                        <option value={9933}>교육</option>
                                                        <option value={9935}>예술, 스포츠, 여가</option>
                                                        <option value={9925}>물류, 운송</option>
                                                        <option value={9929}>부동산</option>
                                                        <option value={9923}>건설</option>
                                                        <option value={9931}>사업지원</option>
                                                        <option value={9926}>숙박, 음식점</option>
                                                        <option value={9934}>보건, 사회복지</option>
                                                        <option value={10303}>게임</option>
                                                        <option value={9921}>전기, 가스</option>
                                                        <option value={9922}>상수도, 환경</option>
                                                        <option value={9918}>농림어업</option>
                                                        <option value={9919}>광업</option>
                                                        <option value={9932}>공공행정, 국방</option>
                                                        <option value={9937}>가사, 가정</option>
                                                        <option value={9938}>국제, 외국기관</option>
                                                    </select>
                                                    <svg width={10} height="5.714285714285714" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="down" className="Arrow__SVGWrapper-sc-1aaw6vd-0 iwkpzY">
                                                        <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="styles__SelectBoxWrapper-sc-ehs50u-4 dJRrZx">
                                                    <p>직원수</p>
                                                    <select name="size" value={size} onChange={(event) => setsize(event.target.value)} className="styles__CustomSelect-sc-ehs50u-5 coAubv">
                                                            <option value disabled>회사규모</option>
                                                            <option value="1~4">1~4명</option>
                                                            <option value="5~10">5~10명</option>
                                                            <option value="11~50">11~50명</option>
                                                            <option value="51~200">51~200명</option>
                                                            <option value="201~500">201~500명</option>
                                                            <option value="501~1000">501~1000명</option>
                                                            <option value="1001~5000">1001~5000명</option>
                                                            <option value="5001~10000">5001~10000명</option>
                                                            <option value="10001~">10000명 이상</option>
                                                    </select>
                                                        <svg width={10} height="5.714285714285714" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="down" className="Arrow__SVGWrapper-sc-1aaw6vd-0 iwkpzY">
                                                            <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="currentColor" />
                                                        </svg>
                                                </div>
                                            </div>
                                            <div className="styles__ButtonWrapper-sc-ehs50u-6 bSMlWH">
                                            <Link to="/company">
                                                <button type="button" className="styled__Wrapper-sc-6qhr2f-0 frLTPh" >
                                                    <svg width={13} height="7.428571428571429" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="left" className="Arrow__SVGWrapper-sc-1aaw6vd-0 gYBxXR">
                                                        <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="var(--theme-palette-primary-normal)" />
                                                    </svg>이전
                                                </button></Link>
                                                <button type="submit" onClick={handleSubmit} disabled={companyName.trim()  === ''} className={`styled__Wrapper-sc-6qhr2f-0 eNszdg`}>계속하기
                                                    <svg width={13} height="7.428571428571429" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" direction="right" className="Arrow__SVGWrapper-sc-1aaw6vd-0 eheCSJ">
                                                        <path d="M0.21967 0.21967C0.485936 -0.0465966 0.9026 -0.0708027 1.19621 0.147052L1.28033 0.21967L6.999 5.938L12.7162 0.221101C12.9824 -0.04521 13.399 -0.0694853 13.6927 0.14832L13.7768 0.220925C14.0431 0.487147 14.0674 0.903807 13.8496 1.19745L13.777 1.28158L7.53042 7.53024C7.26416 7.79658 6.84745 7.82083 6.5538 7.60296L6.46967 7.53033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="var(--theme-palette-label-disable)" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </section>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default CompanySignUp;

