import React, { useEffect, useState } from 'react'
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {useNavigate} from "react-router-dom"
import { UseAppContext } from '../context/context';
import Swal from 'sweetalert2'
import "./css/account.css"
function Account() {
    const navigate = useNavigate()
    const {isAuth, loginUser, isProcessing} = UseAppContext()
    const [verifyOk, setVerifyOk] = useState(false)

    useEffect(()=>{
      if (isAuth) {
        navigate("/my-user")
      }
    },[isAuth])
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
      
      const goToRegister = () =>{
        navigate("/register-user")
      }

    const [values, setValues] = useState({
      email: "",
      password: ""
    })

    const handleInputChange = (e) => {
      const {name, value} = e.target
      setValues((prevState)=>({
        ...prevState,
        [name]: value
      }))
    }

    const verifyFields = () =>{
      if (!values.email || !values.password) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "info",
          title: "Hay algunos campos vacios!"
        });
      }else{
        setVerifyOk(true)
      }
    }
    const Submit = async(e) =>{
      e.preventDefault()
      verifyFields()
      if (verifyOk) {
        loginUser(values)
        
      }
    }
  return (
    <>
      <main className='container__account'>
        <section className='section__account'>
          <h1>Hola de nuevo ⚡​🏋️​</h1>
          <p>Si ya tienes una cuenta, inicia sesión y accede a todas las funciones de Zeus Gym.</p>
          <form className='form__account' onSubmit={Submit}>
            <h1>Iniciar sesión</h1>
            <label htmlFor="email" className='label__form'>
              Correo electronico
              <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange} placeholder='Ingresa tu correo' className='input__form'/>
            </label>
            <label htmlFor="password" className='label__form'>
              Contraseña
              <input type="password" id="password" name="password" value={values.password} onChange={handleInputChange} placeholder='Ingresa tu contraseña' className='input__form'/>
            </label>
            <a href="#" className='link__form'>¿Olvidaste tu contraseña?</a>
            {isProcessing && <p>Aguarde un momento...</p>}
            <button className='button__form' disabled={isProcessing} style={{cursor: isProcessing ? "not-allowed" : "pointer", backgroundColor: isProcessing ? "gray" : ""}}>Iniciar sesión</button>
          </form>
          <p className='p__account'>¿No tienes una cuenta? <p className='link__form' onClick={goToRegister}>Registrate</p></p>
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
