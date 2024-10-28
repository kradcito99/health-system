import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Logo.png"

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if ({isActive : false}) classes.push('nav-bar__link--noactive')
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink to='/'>
        <img src={logo} alt='Logo' className='nav-bar__logo' />
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/Diagnostico'
      >
        Diagnostico para el equipo
      </NavLink> 
      <NavLink
        className={navLinkClass}
        to='/Test'
      >
        Tests
      </NavLink>
      <NavLink
        className={`${navLinkClass({ isActive: false })} nav-bar__button`}
        to='/Login'
      >
        Login
      </NavLink>
    </nav>
  )
}
 
export default NavBar
