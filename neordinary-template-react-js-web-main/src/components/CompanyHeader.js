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
  <body>
  <header>
    <div id="app">
       <span className="Feature__Hidden_f">
        <div classname="styled__Warp__All">
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
                    <button type="button" data-attribute-id="biz__welcome__menu" data-menu-type="signupLogin" className="styled__Wrapper-signUpBtn">
                        <span color="palette.static.white" className="styled__StyledTypography-c">채용담당자 로그인/가입</span>
                    </button>
                </div>
            </div>
            </nav>
         </div>
        </span> 
    </div>
    </header>
    <main>
        <div className='daMRDH'>
            <div className='dsvRYi'>
                <div className='iYKIbO'>
                    <section className="styled__ListWrapper-sc-1flml4t-0 gAfSUe">
                        <header className="styled__ListWrapper-sc-1flml4t-0 expWCo">
                            <p size={32} color="palette.static.white" className="styled__StyledTypography-sc-hm1dli-0 ehaSxl">원하는 인재를 찾는 가장 효율적인 방법</p>
                                <h2 size={72} color="palette.static.white" className="styled__StyledTypography-sc-hm1dli-0 iWKpEA">원티드 채용 솔루션</h2>
                        </header>
                        <section className="styled__ListWrapper-sc-1flml4t-0 ivlVbz">
                            <button type="button" data-attribute-id="biz__welcome__start" data-location="top" className="styled__Wrapper-sc-6qhr2f-0 eLjKRU">
                                <span color="palette.static.white" className="styled__StyledTypography-sc-hm1dli-0 jLunHy">무료로 시작하기</span>
                            </button>
                            <div className="styled__ListWrapper-sc-1flml4t-0 eVoIBx">
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
    </body>
  );
}

export default CompanyHeader;