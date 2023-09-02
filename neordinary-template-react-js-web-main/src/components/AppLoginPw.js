import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import packageJson from '../../package.json'
import "./LoginPw.css";



const LoginPw = styled.div`
  font-family: inherit;
  overflow: unset;
`;
const AppLoginPw = () => {



  return (
   <div id="__next">
    <div className="css-main">
        <div className="css-main-a">
        <div className="css-main-b">
            <div className="css-main-c">
            <div className="css-main-d">
            <Link to="/login">
                <button type="button" className="css-backBtn">
                <span className="css-backBtn-a">
                    <svg viewBox="0 0 18 18" className="css-backBtn-b">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
                    </svg>
                </span>
                </button>
            </Link>
            </div>
            
            <div className="css-title">
                <p data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-title-p">이메일로 로그인</p>
            </div>
            <div className="css-none">
            </div>
            </div>
            <div className="css-down">
                <form>
                    <div className="css-pw">
                        <label data-testid="Typography" color="var(--theme-palette-colors-gray-600)" htmlFor="email" className="css-pwInput">비밀번호</label>
                    </div>
                    <div className="css-pw-a">
                        <input type="password" placeholder="비밀번호를 입력해주세요." name="password" data-testid="Input_password" className="css-pwInput-a" defaultValue />
                            <button type="button">
                                <span className="css-view">
                                    <svg viewBox="0 0 24 24" width={24} height={24} fill="none" className="css-view-s">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0805 7.14439C8.3185 7.67173 6.28765 9.06505 4.11453 12.0109C4.35232 12.3367 4.69688 12.7812 5.13455 13.2737C6.04795 14.3017 7.32842 15.4952 8.85237 16.2783C10.36 17.053 12.0676 17.4099 13.9194 16.8557C15.6814 16.3283 17.7123 14.935 19.8854 11.9891C19.6476 11.6634 19.303 11.2189 18.8653 10.7263C17.952 9.69838 16.6715 8.50488 15.1475 7.72177C13.6399 6.94704 11.9323 6.59016 10.0805 7.14439ZM2.07177 11.4278C1.82464 11.7821 1.8387 12.2405 2.07323 12.5747L2.07775 12.5817C2.09721 12.6119 2.12501 12.6544 2.1609 12.708C2.23265 12.8151 2.33693 12.9668 2.47191 13.1527C2.7415 13.5241 3.13554 14.035 3.63949 14.6022C4.63932 15.7274 6.1101 17.1177 7.93825 18.0572C9.78272 19.005 12.0281 19.5094 14.4929 18.7717C16.9391 18.0396 19.4462 16.13 21.9281 12.5723C22.1753 12.218 22.1612 11.7596 21.9267 11.4254L21.9222 11.4183C21.9027 11.3882 21.8749 11.3457 21.839 11.2921C21.7673 11.185 21.663 11.0333 21.528 10.8473C21.2584 10.4759 20.8644 9.96504 20.3604 9.39789C19.3606 8.27266 17.8898 6.88233 16.0617 5.9429C14.2172 4.99508 11.9718 4.49068 9.50704 5.22836C7.06076 5.96051 4.55374 7.87009 2.07177 11.4278ZM13.6431 12C13.6431 12.7535 12.9839 13.4998 12.0001 13.4998C11.0163 13.4998 10.3571 12.7535 10.3571 12C10.3571 11.2466 11.0163 10.5002 12.0001 10.5002C12.9839 10.5002 13.6431 11.2466 13.6431 12ZM15.6431 12C15.6431 13.9329 14.0121 15.4998 12.0001 15.4998C9.9881 15.4998 8.35705 13.9329 8.35705 12C8.35705 10.0671 9.9881 8.50022 12.0001 8.50022C14.0121 8.50022 15.6431 10.0671 15.6431 12Z" fill="#8A8A8A" />
                                    </svg>
                                </span>
                            </button>
                    </div>
                    <button type="submit" data-testid="Button" data-attribute-id="signup__email__login" className="css-submitBtn" disabled>
                    <span data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-submitBtn-next">다음</span>
                    </button>
                    <button type="button" data-testid="Button" className="css-reset">
                    <span data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-reset-a">비밀번호 초기화/변경</span>
                    </button>
                </form>
        </div>
      </div>
    </div>
  </div>
</div>






  );
}

export default AppLoginPw;