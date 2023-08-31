import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppLogin from './components/AppLogin'
import AppJoin from './components/AppJoin'
import DefaultLayout from './layout/DefaultLayout'
import EmploymentButton from './components/EmploymentButton'
import Employment from './pages/Employment/Employment'
import Profile from './pages/Profile/Profile'
import CompanyList from './pages/Employment/CompanyList'
import Apply from './pages/Apply/Apply'

const loading = <div>화면을 불러오는 중</div>

// Containers


// Pages
// const Login = React.lazy(() => import('./pages/login/Login'))
// const Page404 = React.lazy(() => import('./pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./pages/page500/Page500'))

//컴포넌트
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/*' name='Home' element={<DefaultLayout />} />
          <Route path="/employment" element={<Employment />}  />
          <Route path="/login" element={<AppLogin />}  />
          <Route path="/join" element={<AppJoin />}  />
          <Route path="/employment/:companyId" element={<Apply />}  />
          <Route path="/Profile" element={<Profile />}  />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
