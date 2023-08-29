import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import packageJson from '../../package.json'
import { ReactComponent as NeordinaryLogo } from '../assets/neordinary-logo.svg'

const Header = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid grey;
`;
const AppHeader = () => {


  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  // const [visible, setVisible] = useState(false)

  return (
    <Header>
      여기는 헤더
    </Header>
  );
}



export default AppHeader;
