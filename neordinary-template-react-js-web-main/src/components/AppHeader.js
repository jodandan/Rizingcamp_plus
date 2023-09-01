import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import packageJson from '../../package.json'
import { ReactComponent as NeordinaryLogo } from '../assets/neordinary-logo.svg'
import "./Header.css";
import "./Header";

const Header = styled.div`
  height: 40px;
  width: 100%;
  display: flex; 
  justify-content: center; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  
  
`;
const AppHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if access tokens exist in local storage
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');

    if (access_token && refresh_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const getButtonText = () => {
    if (isLoggedIn) {
      return "마이페이지";
    } else {
      return "회원가입/로그인";
    }
  };



  return (
    <Header>
      <div role="presentation" className="NavBar_className__menubar" style={{position: 'fixed'}}>
          <div className="MainBar_MainBar__f" role="presentation">
            <nav className="MainBar_MainBar_nav__f">
              <div className="MainBar_MainBar_nav_top__f">
                <div className="MainBar_MainBar_nav_top_logo__f">
                  <button type="button" aria-label="job category menu button" data-gnb-kind="jobCategoryMenu" className="MainBar_hamberger__menu">
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75" alt="hamberger menu" height={14} style={{width: 17, height: 14, objectFit: 'contain'}} />
                  </button>
                  <a href="/" className="MainBar_MainBar_logo__a" aria-label="jobsfeed link" data-attribute-id="gnb" data-gnb-kind="jobsfeed">
                    <svg width={74} height={21} viewBox="0 0 140 32">
                      <path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z" /></svg></a></div>
                <button id="SignupBtn" className="SignUpButton" type="button" data-attribute-id="gnb" data-gnb-kind="signupLogin">회원가입하기
                </button>
              </div>
                  <ul className="Menu_className__main">
                    <li className data-attribute-id="gnb" data-gnb-kind="jobs">
                      <a href="/employment" className>채용</a>
                    </li>
                    <li className data-attribute-id="gnb" data-gnb-kind="event">
                      <a href="/events" className>이벤트</a>
                    </li>
                    <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="resume">
                      <a href="/cv/list" className>이력서</a>
                    </li>
                    <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="community">
                      <a href="/community">소셜</a>
                    </li>
                    <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="freelancer">
                      <a href="https://www.wanted.co.kr/gigs/experts" className target="_blank" rel="noopener noreferrer">프리랜서</a>
                    </li>
                    <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="aiScore">
                      <a href="/aiscore/resume" className>AI 합격예측</a>
                    </li>
                  </ul>
                  <aside className="Aside_className___as">
                    <ul>
                      <li>
                        <button className="searchButton" type="button" data-attribute-id="gnb" data-gnb-kind="search">
                          <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width={18} height={18} viewBox="0 0 18 18"><defs>
                              <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z" /></defs><g fill="none" fillRule="evenodd"><use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a" /></g></svg>
                        </button>
                      </li>
                      <li>
                        <Link to="/login">
                          <button className="signUpButton" type="button" data-attribute-id="gnb" data-gnb-kind="signupLogin">회원가입/로그인</button>
                        </Link>
                      </li>
                      <Link to="/company">
                      <li className="mdMoreVisible leftDivision" data-attribute-id="gnb" data-gnb-kind="forEmployers">
                        <a className="dashboardButton" href="/dashboard">기업 서비스</a>
                      </li>
                      </Link>
                      <li className="Aside_visibleMenu__Dki9n">
                        <button className="menuButton" type="button" data-attribute-id="gnb" data-gnb-kind="photo">
                          <svg width={18} height={18} viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm7 0a2 2 0 1 1-.001 4.001A2 2 0 0 1 19 10zM5 10a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 10z" /></svg>
                        </button>
                      </li>
                    </ul>
                    <div className="Aside_visibleMenu__Dki9n">
                    </div>
                  </aside>
              </nav>
           </div>
         </div>
         <div className="Padding_padding__"></div>
         {isLoggedIn ? (
        <Link to="/profile">{getButtonText()}</Link>
      ) : (
        <Link to="/login">
          <button
            className="signUpButton"
            type="button"
            data-attribute-id="gnb"
            data-gnb-kind="signupLogin"
          >
            {getButtonText()}
          </button>
        </Link>
      )}
      </Header>

      );
}


export default AppHeader;