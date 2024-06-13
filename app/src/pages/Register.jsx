import React, { useState, useEffect } from 'react'
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {useNavigate} from "react-router-dom"
import { UseAppContext } from '../context/context';
import Swal from 'sweetalert2';
import "./css/register.css"
function Register() {
    const navigate = useNavigate()
    const {isAuth, createUser, isProcessing} = UseAppContext()
    const [isVerifyOk, setIsVerifyOk] = useState(false)
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
  
      const goToLogin = () =>{
        navigate("/login")
      }

      const [values, setValues] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
      })

      const handleInputChange = (e) =>{
        const {name, value} = e.target
        setValues((prevState)=>({
          ...prevState,
          [name]: value
        }))
      }

      const verifyPassword = () => {
        if (!values.email || !values.userName || !values.password || !values.confirmPassword) {
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
            title: "Todos los campos son requeridos"
          });
        } else if (values.password !== values.confirmPassword) {
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
            icon: "error",
            title: "Las contraseñas no coinciden"
          });
        } else {
          setIsVerifyOk(true);
        }
      };
      
      const Submit = async (e) => {
        e.preventDefault();
        verifyPassword();
        if (isVerifyOk) {
          createUser(values);
          setValues({
            email: "",
            userName: "",
            password: "",
            confirmPassword: ""
          })
        }
      };
  return (
    <>
    <main className='container__account'>
        <section className='section__account'>
          <h1>Bienvenido/a​</h1>
          <p>Si es tu primera vez aquí puedes registrarte a continuación en este formulario o tambien puedes hacerlo de <strong>manera presencial en la recepción</strong></p>
          <form className='form__account' onSubmit={Submit}>
            <h1>Registrar</h1>
            <label htmlFor="email" className='label__form'>
              Correo electronico
              <input type="email" id="email" name="email" value={values.email} onChange={handleInputChange}  className='input__form'/>
            </label>
            <label htmlFor="userName" className='label__form'>
              Su nombre de Usuario
              <input type="text" id="userName" name="userName" value={values.userName} onChange={handleInputChange}  className='input__form'/>
            </label>
            <label htmlFor="password" className='label__form'>
              Contraseña
              <input type="password" id="password" name="password" value={values.password} onChange={handleInputChange} className='input__form'/>
            </label>
            <label htmlFor="confirmPassword" className='label__form'>
              Ingrese su contraseña nuevamente
              <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={handleInputChange} className='input__form'/>
            </label>
            {isProcessing && <p>Aguarde un momento...</p>}
            <button className='button__form' disabled={isProcessing} style={{cursor: isProcessing ? "not-allowed" : "pointer", backgroundColor: isProcessing ? "gray" : ""}}>Finalizar Registro</button>
          </form>
          <p >¿Ya tienes una cuenta? <p className='link__form' onClick={goToLogin}>Iniciar Sesion</p></p>

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
