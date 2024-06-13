import React from 'react'
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import "./css/about.css"
function About() {
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
    <main className='container__about'>
      <section className='section__services'>
        <div className='service__card'>
          <p className='title__card'>Plan Aumento de fuerza o competición Powerlifting</p>
          <ul className='ul__card'>
            <li className='li__card'><p>Entrená con un entrenador especializado en el area</p></li>
            <li className='li__card'><p>El entrenador se encargará de tu rutina de ejercicios</p></li>
            <li className='li__card'><p>Se asegurará de que aprendas los conceptos fundamentales, técnica de ejercicios y estará contigo en todo momento</p></li>
            <p className='title__card'>El plan consiste en: </p>           
           <li className='li__card'><p>Rutina de fuerza intensa, <strong>recomendada para personas con mas de 1 año entrenando.</strong></p></li>
           <li className='li__card'><p>Acceso a todas las maquinas.</p></li>

            <li className='li__card'><p>Rotación de ejercicios cada 1 o dos semanas según el entrenador.</p></li>
            <li className='li__card'>En este plan el taller de nutrición esta incluido en el precio pero es opcional asistir.</li>
            <li className='li__card'><strong>Precio: $12000 ARS al mes</strong></li>
            <button className='btn__inscripcion'>Inscribirse</button>
          </ul>
          
        </div>
        <div className='service__card'>
          <p className='title__card'>Plan Hipertrofia</p>
          <ul className='ul__card'>
            <li className='li__card'><p>Entrená con un entrenador especializado en el area</p></li>
            <li className='li__card'><p>El entrenador se encargará de tu rutina de ejercicios</p></li>
            <li className='li__card'><p>Se asegurará de que aprendas los conceptos fundamentales, técnica de ejercicios y estará contigo en todo momento</p></li>
          </ul>
          <p className='title__card'>Este plan consiste en:</p>
          <ul className='ul__card'>
            <li className='li__card'><p>Rutina de aumento de masa muscular, <strong>recomendada para personas con mas de 6 meses entrenando o para personas que simplemente quieran ganar musculo en lugar de fuerza</strong></p></li>
            <li className='li__card'><p>Rotación de ejercicios cada 1 o dos semanas según el entrenador.</p></li>
            <li className='li__card'><p>Acceso a todas las maquinas.</p></li>
            <li className='li__card'>En este plan el taller de nutrición esta incluido en el precio pero es opcional asistir.</li>
            <li className='li__card'><strong>Precio: $11500 ARS al mes</strong></li>
            <button className='btn__inscripcion'>Inscribirse</button>

          </ul>
        </div>

        <div className='service__card'>
        <p className='title__card'>Plan Starter</p>
          <ul className='ul__card'>
            <li className='li__card'><p>Entrená con un entrenador especializado en el area</p></li>
            <li className='li__card'><p>El entrenador se encargará de tu rutina de ejercicios</p></li>
            <li className='li__card'><p>Se asegurará de que aprendas los conceptos fundamentales, técnica de ejercicios y estará contigo en todo momento</p></li>
            <li className='li__card'><p>Tiempo limite de 60 minutos</p></li>
          </ul>
          <p className='title__card'>Este plan consiste en: </p>
          <ul className='ul__card'>
            <li className='li__card'><p>Una rutina por lo general tranquila, cargaras pesos livianos y ejercicios monoarticulares, <strong>recomendada para personas que nunca hayan pisado un gimnacio o que tengan alguna otra base en otro deporte</strong></p></li>
            <li className='li__card'><p>Rotación de ejercicios cada 2 o 3 semanas según el entrenador.</p></li>
            <li className='li__card'><p>Acceso solo a las equipamiento funcional o mono articulares</p></li>
            <li className='li__card'>En este plan el taller de nutrición no esta incluido</li>
            <li className='li__card'><strong>Precio: $5000 ARS al mes</strong></li>
            <button className='btn__inscripcion'>Inscribirse</button>

          </ul>
        </div>

        <div className='service__card'>
        <p className='title__card'>Plan Master</p>
          <ul className='ul__card'>
            <li className='li__card'><p>Entrená con un entrenador especializado en el area o por tu cuenta</p></li>
            <li className='li__card'><p>Podras hacer preguntas a cualquier entrenador que este a la vista.</p></li>
          </ul>
          <p className='title__card'>En este plan: </p>
          <ul className='ul__card'>
            <li className='li__card'><p>Podras acceder a cualquier maquina del gimnacio, en este plan es opcional contratar un entrenador personalizado que te guie en los ejercicios</p></li>
            <li className='li__card'><p>Tendras acceso a el comedor para desayunar o merendar con un 15% de descuento</p></li>
            <li><strong>Precio: $6500 ARS al mes</strong></li>
            <button className='btn__inscripcion'>Inscribirse</button>

          </ul>
        </div>
      </section>
    </main>
     <footer>
        <p>Created By Pelinski Carlos</p>
        <FaInstagram style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkIg}/>
        <FaGithub style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGit}/>
        <CgMail style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkGmail}/>
        <FaWhatsapp style={{width:"30px", height:"auto", cursor:"pointer", marginLeft:".3em"}} onClick={handleLinkWhatsapp}/>
      </footer> 
    </>
  )
}

export default About
