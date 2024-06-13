import React from 'react'
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import "./css/register.css"
function Register() {
    

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
          <h1>Bienvenido/a​</h1>
          <p>Si es tu primera vez aquí puedes registrarte a continuación en este formulario o tambien puedes hacerlo de <strong>manera presencial en la recepción</strong></p>
          <form className='form__account'>
            <h1>Registrar</h1>
            <label htmlFor="email" className='label__form'>
              Correo electronico
              <input type="email" id="email"  className='input__form'/>
            </label>
            <label htmlFor="userName" className='label__form'>
              Su nombre de Usuario
              <input type="text" id="userName"   className='input__form'/>
            </label>
            <label htmlFor="password" className='label__form'>
              Contraseña
              <input type="password" id="password"  className='input__form'/>
            </label>
            <label htmlFor="confirmPassword" className='label__form'>
              Ingrese su contraseña nuevamente
              <input type="password" id="confirmPassword" name="confirmPassword" className='input__form'/>
            </label>
            <button className='button__form'>Finalizar Registro</button>
          </form>
          <p >¿Ya tienes una cuenta? <p className='link__form' >Iniciar Sesion</p></p>

        </section>
      </main>
     <footer style={{marginTop:"9em"}}>
        <p>Created By Pelinski Carlos</p>
        <FaInstagram style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkIg}/>
        <FaGithub style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGit}/>
        <CgMail style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGmail}/>
        <FaWhatsapp style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkWhatsapp}/>
      </footer> 
    </>
  )
}

export default Register
