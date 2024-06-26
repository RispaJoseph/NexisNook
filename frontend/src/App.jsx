import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import useStore from './Redux/useStore'
import { Provider } from 'react-redux'
import UserWrapper from './components/user/UserWrapper'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
        <Provider store={useStore}>
          <Routes>
            <Route path='/' element= {<LandingPage/>}></Route>
            <Route path='user/*' element={<UserWrapper/>}></Route>
          </Routes>
        </Provider>
        </BrowserRouter>
      </div>
  )
}

export default App
