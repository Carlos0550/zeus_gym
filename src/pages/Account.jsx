import React, {useState } from 'react'
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import "./css/account.css"
function Account() {
   
    const handleLinkGit = () => {
        window.location.href = "https://github.com/Carlos0550"
      }
      const handleLinkIg = () =>{
        window.location.href = "https://www.instagram.com/carlos._ok/"
      }
      const handleLinkGmail = () =>{
        window.location.href = "mailto:carlospelinski03@gmail.com"
      }
      const handleLinkWhatsapp = () =>{
        window.location.href = "https://wa.me/3765223959"
      }
      

  return (
    <>
      <main className='container__account'>
        <section className='section__account'>
          <h1>Hola de nuevo ⚡​🏋️​</h1>
          <p>Si ya tienes una cuenta, inicia sesión y accede a todas las funciones de Zeus Gym.</p>
          <form className='form__account'>
            <h1>Iniciar sesión</h1>
            <label htmlFor="email" className='label__form'>
              Correo electronico
              <input type="email" id="email" name="email" placeholder='Ingresa tu correo' className='input__form'/>
            </label>
            <label htmlFor="password" className='label__form'>
              Contraseña
              <input type="password" id="password"  placeholder='Ingresa tu contraseña' className='input__form'/>
            </label>
            <a href="#" className='link__form'>¿Olvidaste tu contraseña?</a>
            <button className='button__form'>Iniciar sesión</button>
          </form>
          <p className='p__account'>¿No tienes una cuenta? <p className='link__form'>Registrate</p></p>
        </section>
      </main>
      <footer style={{marginTop:"25em"}}>
        <p>Created By Pelinski Carlos</p>
        <FaInstagram style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkIg}/>
        <FaGithub style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGit}/>
        <CgMail style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGmail}/>
        <FaWhatsapp style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkWhatsapp}/>
      </footer>
    </>
  )
}

export default Account
