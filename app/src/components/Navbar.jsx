import React from 'react'
import "./css/navbar.css"
import {NavLink} from "react-router-dom"
import Logo from "./logo/1.png"
import { UseAppContext } from '../context/context'

import { useNavigate } from 'react-router-dom'
function Navbar({children}) {
    
  const {isMobile} = UseAppContext()
  const navigate = useNavigate()
    const closeMenu = () =>{
      document.getElementById("menu_hamburguesa").checked = false
    }

    

    const menuItem = [
      {
        path: "/",
        name: "Home"
      },
      {
        path: "/about",
        name: "Nuestros Servicios"
      },
      {
        path: "/my-user",
        name: "Mi Cuenta"
      }
     
    ]
  return (
    <div>
      <header className='header'>
      <nav className='navbar'>
          <div className='left-section'>
              <img src={Logo} alt="logo" className='logo_navbar'/>
              <h1 className='logo'>Zeus Gym</h1>
          </div>
          <label htmlFor="menu_hamburguesa" className='label_hamburguesa'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="list_icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
          </label>
          <input type={isMobile ? 'checkbox' : 'hidden'} className='menu_hamburguesa' id="menu_hamburguesa" />
          <ul className='ul_links'>
              {menuItem.map((item, index)=>{
                return(
                  <NavLink to={item.path} key={index} onClick={closeMenu}>
                      <li className='li_links'>
                        <div className='link'>{item.name}</div>
                      </li>
                  </NavLink>
                )
              })}
          </ul>
      </nav>
      <main>{children}</main>
      </header>
      
    </div>
  )
}

export default Navbar
