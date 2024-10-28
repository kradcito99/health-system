import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Test from '../pages/Test'
import Diagnostico from '../pages/Diagnostico'
import Login from '../pages/Login'
import Sign_Up from '../pages/Sign_Up'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Diagnostico' element={<Diagnostico />} />
            <Route path='/Test' element={<Test />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Sign_Up' element={<Sign_Up />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
