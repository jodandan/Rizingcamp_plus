import React from 'react'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
// import AutoSlider from '../components/AutoSlider'
import Slider from '../Slider/Slider'
import EmploymentButton from '../components/EmploymentButton'
import styled from 'styled-components'
import {supportDeviceSize} from '../components/styled'
import Footer from '../components/Footer'


/**
 * 기본 레이아웃
 * @category Layout
 */
const DefaultLayout = () => {
  /*const navigate = useNavigate()

  // Redux 값 불러오기
  const {user} = useSelector(state => state.LoginReducer)

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    if (!user.name) {
      alert('로그인을 해주세요')
      navigate('/login')
    }
  }, [])*/

  return (
    <Root>
      <AppHeader />
      <Slider />
      <EmploymentButton />
      <Footer />
    </Root>
  )
}

const Root = styled.div`
  padding-top: 25px;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`

export default DefaultLayout
