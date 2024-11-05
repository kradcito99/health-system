// src/layout/Layout.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

import HomePage from '../pages/home_page';
import Test from '../pages/Test';
import Diagnostico from '../pages/Diagnostico';
import Login from '../pages/Login';
import Sign_Up from '../pages/Sign_Up';

import NavBar from '../components/nav_bar';
import ProtectedRoute from '../components/ProtectedRoute';
import '../stylesheets/layout/background.scss'; // Asegúrate de tener el archivo SCSS aquí

const App = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/Login' || location.pathname === '/Sign_Up';

  return (
    <div className='layout'>
      {!hideNavBar && <NavBar />}
      <div className='layout__page'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Diagnostico' element={<ProtectedRoute element={<Diagnostico />} />} />
          <Route path='/Test' element={<ProtectedRoute element={<Test />} />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Sign_Up' element={<Sign_Up />} />
        </Routes>
      </div>
    </div>
  );
};

const Layout = () => (
  <AuthProvider>
    <BrowserRouter>
      <div className="background"> {/* Asegúrate de que este div cubra toda la página */}
        <App />
      </div>
    </BrowserRouter>
  </AuthProvider>
);

export default Layout;
