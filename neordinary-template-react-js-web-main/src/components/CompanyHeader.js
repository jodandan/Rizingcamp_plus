import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import packageJson from '../../package.json'
import './ComHeader.css';



const ComHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex; 
  justify-content: center; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  
  
`;
const CompanyHeader = () => {


  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  // const [visible, setVisible] = useState(false)

  return (
    <div id="app">
        <span className="Feature__Hidden_f">
        <div className="styled__Warp__All">
            <nav className="styled__ListWrapper_n">
                <div className="styled__ListWrapper-d-a">
                <Link to="/*">
                    <span color="palette.label.normal" className="styled__StyledTypography-a">원티드 채용 솔루션</span>
                </Link>
                <div className="styled__ListWrapper-d-b">
                    <a href="/*" data-menu-type="wantedHome">
                     <span color="palette.label.normal" className="styled__StyledTypography-b">원티드 홈페이지</span>
                    </a>
                    <hr className="styled__StyledHR-a" />
                    <Link to="/signup">
                    <button type="button" data-attribute-id="biz__welcome__menu" data-menu-type="signupLogin" className="styled__Wrapper-signUpBtn">
                        <span color="palette.static.white" className="styled__StyledTypography-c">채용담당자 로그인/가입</span>
                    </button></Link>
                </div>
            </div>
            </nav>
        </div>
        </span> 
    
    <main>
        <div className='css-main-solution'>
            <div className='css-main-solution-a'>
                <div className='css-main-solution-b'>
                    <section className="styled__ListWrapper-s-a">
                        <header className="styled__ListWrapper-h-a">
                            <p size={32} color="palette.static.white" className="styled__StyledTypography-h-p">원하는 인재를 찾는 가장 효율적인 방법</p>
                                <h2 size={72} color="palette.static.white" className="styled__StyledTypography-h-h">원티드 채용 솔루션</h2>
                        </header>
                        <section className="styled__ListWrapper-start-s-a">
                            <button type="button" data-location="top" className="styled__Wrapper-Btn-start">
                                <span color="palette.static.white" className="styled__StyledTypography-Btn-start">무료로 시작하기</span>
                            </button>
                            <div className="styled__ListWrapper-main-img">
                                <video loop poster="https://static.wanted.co.kr/images/dashboard/welcome/wanted_solution_intro/wanted_solution_intro.png">
                                    <source src="https://static.wanted.co.kr/images/dashboard/welcome/wanted_solution_intro/wanted_solution_intro.webm" type="video/webm" />
                                    <source src="https://static.wanted.co.kr/images/dashboard/welcome/wanted_solution_intro/wanted_solution_intro.mp4" type="video/mp4" />
                                </video>
                                </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default CompanyHeader;