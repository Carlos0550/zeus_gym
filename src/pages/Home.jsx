import React from 'react';
import "./css/home.css";
import { FaInstagram, FaGithub,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Home() {
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
      <main>
        <aside>
          <ol className='ol__aside'>
            <li className='li__aside' style={{marginLeft:"1em"}}><a href="#" className='link_aside'>Métodos de entrenamiento</a></li>
            <li className='li__aside' style={{marginLeft:"1em"}}><a href="#" className='link_aside'>Quiénes son nuestros entrenadores</a></li>
            <li className='li__aside' style={{marginLeft:"1em"}}><a href="#" className='link_aside'>Protocolos de seguridad</a></li>
            <li className='li__aside' style={{marginLeft:"1em"}}><a href="#" className='link_aside'>Reglas de convivencia</a></li>
          </ol>
          </aside>
          <section className='section__personalizado'>
              <h2>Descubre Zeus Gym</h2>
              <h3>Transforma tu cuerpo y tu mente con nuestro enfoque integral</h3>
              <p>En Zeus Gym, no solo nos preocupamos por tu físico, sino también por tu bienestar emocional y mental. Nuestro equipo de expertos te guiará en un viaje hacia una vida más saludable y equilibrada. Descubre cómo puedes alcanzar tus metas fitness mientras cultivas una mente fuerte y positiva.</p>
              <h3>Entrena en uno de los mejores gimnacios de Posadas</h3>
                <section className='section_personalizado-img img__section'>
                  <img src="https://th.bing.com/th/id/OIG1.QZtjcJW9BIHB8TunJJjt?pid=ImgGn" alt="img__gym" className='img__gym'/>
                  <img src="https://th.bing.com/th/id/OIG1.A5jvQK.0Dx.TwmqYWd2E?pid=ImgGn" alt="img__gym" className='img__gym'/>
                  <img src="https://th.bing.com/th/id/OIG4.vtbXDz5WvrcBuE3EMJqc?pid=ImgGn" alt="img__gym" className='img__gym'/>
                </section>
          </section>
        <section className='section__personalizado'>
          <h2>Nuestros Servicios</h2>
          <ol className='ol__aside'>
            <li className='li__aside' style={{marginLeft: "2em"}}><h3>Entrenamiento Personalizado</h3></li>
            <li className='li__aside' style={{marginLeft: "2em"}}><h3>Clases Grupales</h3></li>
            <li className='li__aside' style={{marginLeft: "2em"}}><h3>Asesoramiento Nutricional</h3></li>
            <li className='li__aside' style={{marginLeft: "2em"}}><h3>Programas Especiales</h3></li>
          </ol>
        </section>
        <section className='section__personalizado'>
        <section className='section__personalizado' style={{marginBottom:"0"}}><h2><center>Testimonios de Clientes</center></h2></section>
        <section className='section__personalizado-img' style={{marginTop:".1em"}}>
          <picture>
            <img src="https://th.bing.com/th/id/OIG2.AzhtTVA0c9UDfYWOtZx1?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="img__testimonio" />
            <p className='p__testimonio'>"Excelente gimnasio, los entrenadores son muy profesionales y el ambiente es genial." - Yoana Pérez</p>
          </picture>
          <picture>
            <img src="https://th.bing.com/th/id/OIG2.89GjueU0_9e113lIvLYd?pid=ImgGn" alt="img__testimonio" />
            <p className='p__testimonio'>"Desde que empecé a entrenar aquí, he visto resultados increíbles en mi salud y estado físico." - María González</p>
          </picture>
          <picture>
            <img src="https://th.bing.com/th/id/OIG2.q.H6OWErJZtnNr64Vjg8?pid=ImgGn" alt="img__testimonio" />
            <p className='p__testimonio'>"Soy coach en este gimnacio desde hace 5 años, y me siento como en mi casa, me encanta entrenar a la gente y compatir mis conocimientos con ellos." - Miguel Nuñez</p>
          </picture>
        </section>
        </section>

        <section className='section__personalizado'>
          <h2>Horarios</h2>
          <p>Lunes a Viernes: 6:00 am - 10:00 pm</p>
          <p>Sábados: 8:00 am - 5:00 pm</p>
          <p>Domingos: Cerrado</p>
        </section>

        <section>
          <h2>Equipamiento</h2>
          <p>Nuestro gimnasio cuenta con una amplia gama de equipos de última generación, incluyendo máquinas cardiovasculares, pesas libres, máquinas de fuerza y mucho más.</p>
          <section className='section_personalizado-img img__section'>
              <img src="https://th.bing.com/th/id/OIG1.1DIwyx424ExTpUWlfuNH?pid=ImgGn" alt="" className='img__gym'/>
              <img src="https://th.bing.com/th/id/OIG1.4gXPGo3yvVzXq_P2aMQo?pid=ImgGn" alt="" className='img__gym'/>
              <img src="https://th.bing.com/th/id/OIG1.WcatJEO7g2gSXXx.TiH6?pid=ImgGn" alt="" className='img__gym'/>
              <img src="https://th.bing.com/th/id/OIG4.gIOf60rYJS1oTZchylFE?pid=ImgGn" alt="" className='img__gym'/>
              <img src="https://th.bing.com/th/id/OIG4.EbH4SQQtgUc_QM.0XlPY?pid=ImgGn" alt="" className='img__gym'/>
              <img src="https://th.bing.com/th/id/OIG4.lenN356iToAD.v7Z4i.Z?pid=ImgGn" alt="" className='img__gym'/>
          </section>
        </section>

        <section className='section__personalizado'>
          <h2>Promociones</h2>
          <p>¡Matricúlate este mes y obtén un <strong>20% de descuento</strong> en tu membresía anual!</p>
          <button className='btn_matriculate'>Matriculate ya!</button>
        </section>

        <section className='section__personalizado'>
          <h2>Próximos Eventos</h2>
          <p>No te pierdas nuestro taller de nutrición todos los sábados de 10:00 am a 11:00 am.</p>
          <p>Se abordaran temas importantes sobre alimentacion saludable, como asi tambien planes personalizados para sus objetivos, tips y mucho más!</p>
          <p>Clases organizadas por los licenciados en Nutrición <strong>Pelinski Carlos</strong> y <strong>Mariana Gómez</strong></p>

          <section className='section_personalizado-img'>
            <div className='container__nutricionistas'>
              <div className='picture__nutricionista'>
              <img src="https://th.bing.com/th/id/OIG2.DhuTRJMxVdeHw9ZzuHVH?pid=ImgGn" className='img__nutricionista' style={{margin:"1em"}}/>
                <p className='p__testimonio'>Licenciado en nutrición Deportóloga Pelinski Carlos Emanuel</p>
              </div>
              <div className='picture__nutricionista'>
              <img src="https://th.bing.com/th/id/OIG2.A4HMoI9p5ZDuFLeV6nAZ?pid=ImgGn" className='img__nutricionista' style={{margin:"1em"}}/>
              <p className='p__testimonio'>Licenciado en nutrición Deportóloga Mariana Gómez</p>
              </div>
            </div>
          </section>
        </section>

        <section className='section__personalizado'>
          <h2>Contacto</h2>
          <p>Estamos ubicados en [Dirección del Gimnasio]. Para más información, llámanos al [Número de Teléfono] o envíanos un correo electrónico a [Correo Electrónico].</p>
          
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
  );
}

export default Home;
