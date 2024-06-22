import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UserLogin from '../../pages/User/UserLogin'
import UserSignup from '../../pages/User/UserSignup'
// import UserHome from '../../pages/User/UserHome'

const UserWrapper = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserLogin></UserLogin>}></Route>
            <Route path='/UserSignup' element={<UserSignup></UserSignup>}></Route>
            {/* <Route path='/UserHome' element={<UserHome></UserHome>}></Route> */}
        </Routes>
    </div>
  )
}

export default UserWrapper