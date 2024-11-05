import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png";
import { useAuth } from '../context/AuthContext';

export const NavBar = () => {
  const { isAuthenticated, username, logout } = useAuth();

  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (!isActive) classes.push('nav-bar__link--noactive');
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <img src={logo} alt='Logo' className='nav-bar__logo' />
      </NavLink>

      <NavLink className='nav-bar__button' to='/Diagnostico'>
        ¿Que test deberia realizar?
      </NavLink> 
      <NavLink className='nav-bar__button' to='/Test'>
        Tests
      </NavLink>

      {isAuthenticated ? (
        <>
          <span className='nav-bar__username'>Bienvenido, {username}</span>
          <button className='nav-bar__buttonclose' onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <div className="nav-bar__left-container">
          <NavLink className='nav-bar__button' to="/Sign_Up">Registrarse</NavLink>
          <NavLink className='nav-bar__button' to="/Login">Login</NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
