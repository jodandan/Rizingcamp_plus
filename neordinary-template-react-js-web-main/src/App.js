import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppHeader from './components/AppHeader'
import DefaultLayout from './layout/DefaultLayout'

const loading = <div>화면을 불러오는 중 입니다.</div>

// Containers


// Pages
// const Login = React.lazy(() => import('./pages/login/Login'))
// const Page404 = React.lazy(() => import('./pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./pages/page500/Page500'))

//컴포넌트
const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <DefaultLayout />
    </div>
  )
}

export default App
