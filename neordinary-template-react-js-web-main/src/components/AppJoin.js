import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import packageJson from '../../package.json'
import { ReactComponent as NeordinaryLogo } from '../assets/neordinary-logo.svg'
import './Join.css';


const Join = styled.div`
  font-family: inherit;
`;
const AppJoin = () => {



  return (
    <body>
      <div id="__next">
        <div className="css-main">
          <div className="css-main-f">
            <div className="css-main-s">
              <div className="css-up">
                <div className="css-cancel">
                  <Link to="/login">
                  <button type="button" className="css-cancelBtn">
                      <p data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-cancelBtn-f">취소</p>
                  </button>
                  </Link>
                </div>
                <div className="css-singUp">
                  <p data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-singUp-f">회원가입</p>
                </div>
                <div className="css-none">
                </div>
              </div>
              <div className="css-down">
                <form>
                  <div>
                    <div className="css-input">
                      <label data-testid="Typography" color="var(--theme-palette-colors-gray-600)" htmlFor="email" className="css-input-la">이메일</label>
                    </div>
                    <input type="email" placeholder="이메일을 입력해주세요." name="email" data-testid="Input_email" className="css-username-input" defaultValue disabled />
                  </div>
                  <div className="css-input">
                    <label data-testid="Typography" color="var(--theme-palette-colors-gray-600)" htmlFor="username" className="css-username-f">이름</label>
                  </div>
                  <input type="text" placeholder="이름을 입력해주세요." name="username" data-testid="Input_username" className="css-username-s" defaultValue />
                  <div className="css-input">
                    <label data-testid="Typography" color="var(--theme-palette-colors-gray-600)" htmlFor="mobile" className="css-mobile">휴대폰 번호</label>
                  </div>
                  <div>
                    <div className="css-Country">
                      <select className="css-Country-f">
                        <option value="KR">South Korea +82</option>
                        <option value="JP">Japan +81</option>
                        <option value="TW">Taiwan +886</option>
                        <option value="HK">Hong Kong +852</option>
                        <option value="SG">Singapore +65</option>
                        <option value="AF">Afghanistan +93</option>
                        <option value="AL">Albania +355</option>
                        <option value="DZ">Algeria +213</option>
                        <option value="AO">Angola +244</option>
                        <option value="AR">Argentina +54</option>
                        <option value="AM">Armenia +374</option>
                        <option value="AW">Aruba +297</option>
                        <option value="AU">Australia +61</option>
                        <option value="AT">Austria +43</option>
                        <option value="AZ">Azerbaijan +994</option>
                        <option value="BH">Bahrain +973</option>
                        <option value="BD">Bangladesh +880</option>
                        <option value="BY">Belarus +375</option>
                        <option value="BE">Belgium +32</option>
                        <option value="BZ">Belize +501</option>
                        <option value="BJ">Benin +229</option>
                        <option value="BT">Bhutan +975</option>
                        <option value="BO">Bolivia +591</option>
                        <option value="BW">Botswana +267</option>
                        <option value="BR">Brazil +55</option>
                        <option value="BN">Brunei +673</option>
                        <option value="BG">Bulgaria +359</option>
                        <option value="BF">Burkina Faso +226</option>
                        <option value="KH">Cambodia +855</option>
                        <option value="CM">Cameroon +237</option>
                        <option value="CA">Canada +1</option>
                        <option value="CL">Chile +56</option>
                        <option value="CN">China +86</option>  
                      </select>
                      <div className="css-Country-s">
                        <span className="css-Country-t">
                          <svg viewBox="0 0 10 6" className="css-Country-svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z" fill="var(--theme-palette-colors-gray-900)" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="css-mobile-num">
                      <input type="text" placeholder="(예시) 01013245768" name="mobile" data-testid="Input_mobile" className="css-Input_mobile" defaultValue />
                      <button type="button" data-testid="Button" className="css-numBtn" disabled>
                        <span data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-numBtn-re">인증번호 받기</span>
                      </button>
                    </div>
                    <div className="css-authCode">
                      <input type="text" placeholder="인증번호를 입력해주세요." name="authCode" readOnly className="css-authCode-f" defaultValue />
                    </div>
                  </div>
                  <div className="css-accept">
                    <div className="css-accept-f">
                    </div>
                    <input type="checkbox" name="is_agree_all" className="css-checkbox" />
                    <div className="css-accept-s">
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-900)" className="css-accept-t">전체 동의</p>
                    </div>
                  </div>
                  <hr className="css-line" />
                  <div className="css-accept-age">
                    <div className="css-accept-age-f">
                    </div>
                    <input type="checkbox" name="is_above_14" data-testid="TermsOption_checkbox_is_above_14" className="css-checkbox-age" />
                    <div className="css-accept-age-p">
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-accept-age-pn">만 14세 이상입니다. (필수)</p>
                  </div>
                  </div>
                  <div className="css-accept-age">
                    <div className="css-accept-age-f">
                    </div>
                    <input type="checkbox" name="is_terms_conditions" data-testid="TermsOption_checkbox_is_terms_conditions" className="css-checkbox-age" />
                    <div className="css-accept-age-p">
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-accept-age-pn">원티드 이용약관 동의 (필수)</p>
                    </div>
                    <a data-testid="Typography" color="var(--theme-palette-colors-gray-600)" href="https://id.wanted.jobs/terms/ko" target="_blank" className="css-accept-more">자세히</a>
                  </div>
                  <div className="css-accept-age">
                    <div className="css-accept-age-f">
                    </div>
                    <input type="checkbox" name="is_collect_information" data-testid="TermsOption_checkbox_is_collect_information" className="css-checkbox-age" />
                    <div className="css-accept-age-p">
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-accept-age-pn">원티드 개인정보 수집 및 이용 동의 (필수)</p>
                    </div>
                    <a data-testid="Typography" color="var(--theme-palette-colors-gray-600)" href="https://id.wanted.jobs/privacy/ko" target="_blank" className="css-accept-more">자세히</a>
                  </div>
                  <div className="css-accept-age">
                    <div className="css-accept-age-f">
                    </div>
                    <input type="checkbox" name="is_accept_event_all" data-testid="TermsOption_checkbox_is_accept_event_all" className="css-checkbox-age" />
                    <div className="css-accept-age-p">
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-accept-age-pn">채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</p>
                    </div>
                  </div>
                  <div className="css-check-a">
                    <label className="css-check-b">
                      <input data-testid="TermsCheck_checkicon_accept_marketing_email" name="accept_marketing_email" type="checkbox" />
                      <span className="css-check-c">
                        <svg viewBox="0 0 12 8" className="css-check-d">
                          <path d="M1.5 4L4.5 7L10.5 1" stroke="var(--theme-palette-colors-gray-300)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          </path>
                        </svg>
                      </span>
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-check-e">이메일</p>
                    </label>
                    <label className="css-check-b">
                      <input data-testid="TermsCheck_checkicon_accept_marketing_push" name="accept_marketing_push" type="checkbox" />
                      <span className="css-check-c">
                        <svg viewBox="0 0 12 8" className="css-check-d">
                          <path d="M1.5 4L4.5 7L10.5 1" stroke="var(--theme-palette-colors-gray-300)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-check-e">앱 푸시</p>
                    </label>
                    <label className="css-check-b">
                      <input data-testid="TermsCheck_checkicon_accept_marketing_sms" name="accept_marketing_sms" type="checkbox" />
                      <span className="css-check-c">
                        <svg viewBox="0 0 12 8" className="css-check-d">
                          <path d="M1.5 4L4.5 7L10.5 1" stroke="var(--theme-palette-colors-gray-300)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          </path>
                        </svg>
                      </span>
                      <p data-testid="Typography" color="var(--theme-palette-colors-gray-600)" className="css-check-e">문자 메시지</p>
                    </label>
                  </div>
                  <div className="css-JoinBtn">
                    <div className="css-JoinBtn-a">
                    </div>
                    <div className="css-JoinBtn-b">
                    </div>
                    <button type="submit" data-testid="Button" className="css-submitBtn" disabled>
                      <span data-testid="Typography" color="var(--theme-palette-colors-black-100)" className="css-submitBtn-s">가입하기</span>
                    </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </body>

    );
}


export default AppJoin;