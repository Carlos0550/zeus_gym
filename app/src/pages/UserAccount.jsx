import React, { useEffect, useState } from 'react';
import { UseAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import "./css/userAccount.css";
import Swal from 'sweetalert2';
import Loader from "../components/Loader";

function UserAccount() {
  const {isAuth, userData, fetchMemberships, memberships, isfetching, userID, sendUserData, dontHaveDataGym, isRetrievingDataGym, retrieveUserGym, closeSession, isProcessing} = UseAppContext();
  const [userMetadata, setUserMetadata] = useState({});
  const [isFormOk, setIsFormOk] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("Componente// No tiene cuenta: ",dontHaveDataGym)
    console.log("Componente// Datos del usuario: ",retrieveUserGym)
  },[userID, isAuth])
  const [values, setValues] = useState({
    userFullName: "",
    userAge: "",
    dni: "",
    userMemberShip: "",
    userPhone: "",
    userID: userID
  });

  useEffect(()=>{
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    if (isAuth) {
      fetchMemberships();
      setUserMetadata(userData);
    }
  }, [isAuth, userData]);

  function validateFields() {
    if (!values.userMemberShip || !values.userFullName || !values.userAge || !values.dni || !values.userPhone) {
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
        title: "Hay algunos campos vacíos"
      });
    } else if (!values.userID) {
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
        title: "Tenemos algunos problemas para cargar su ID, por favor recargue la página e intente nuevamente"
      });
    } else {
      setIsFormOk(true);
    }
  }

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
  
    return `${day}/${month }`; 
  };

  const getMonthAdelantado = () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 2;

    return `${day}/${month }`;
  }
  const sendData = (e) => {
    e.preventDefault();
    validateFields();
    if (isFormOk) {
      sendUserData(values);
    }
  }
  const logout = () =>{
    closeSession()
  }
  return (
    <section>
      {userData && isAuth ? (
        <div className='section__user'>
           <div className='btn__logout' onClick={isAuth ? logout : () => navigate("/login")} disabled={isProcessing} style={isProcessing ? { cursor: "not-allowed", backgroundColor: "gray" } : { cursor: "pointer", backgroundColor: "" }} >{isAuth ? "Cerrar Sesión" : "Iniciar Sesión"}</div>
          {retrieveUserGym.length > 0 && retrieveUserGym ? <h2>Hola {retrieveUserGym.map((item)=> item.fullName)}</h2> : <h2>{isfetching ? <Loader /> : `Hola ${userMetadata}!`}</h2>}
          { isRetrievingDataGym ? <Loader /> : (
            dontHaveDataGym ? (
              <section className='section__account'>
                <h3>Como es tu primera vez por aquí, deberás completar estos datos para que puedas acceder a las instalaciones</h3>
                <label className='label__form' htmlFor="userFullName">Nombre completo:
                  <input type="text" id='userFullName' name='userFullName' value={values.userFullName} onChange={handleInputChange} className='input__form' />
                </label>
                <label className='label__form' htmlFor="userAge">Edad:
                  <input type="number" id='userAge' name='userAge' value={values.userAge} onChange={handleInputChange} className='input__form' style={{ width: "100px" }} />
                </label>
                <label className='label__form' htmlFor="dni">DNI:
                  <input type="number" id='dni' name='dni' value={values.dni} onChange={handleInputChange} className='input__form' style={{ width: "150px" }} />
                </label>
                <label className='label__form' htmlFor="userPhone">Número de teléfono:
                  <input type="number" id='userPhone' name='userPhone' value={values.userPhone} onChange={handleInputChange} className='input__form' style={{ width: "150px" }} />
                </label>
                <label className='label__form' htmlFor="userMemberShip">Suscripción:
                  <p>Su membresía terminará el <strong>{getMonthAdelantado()}</strong> teniendo en cuenta que hoy es <strong>{getDate()}</strong></p>
                  <br />
                  <p>Tenga en cuenta que una vez vencida su membresia no podra acceder a las instalaciones hasta abonar una nueva membresia</p>
                  <p>Por favor, elija una membresia</p>
                  <select value={values.userMemberShip} onChange={handleInputChange} name='userMemberShip'>
                    <option value="">-- Seleccione --</option>
                    {memberships && memberships.map((membership) => (
                      <option key={membership.id}>{membership.name}</option>
                    ))}
                  </select>
                </label>
                <button type='button' className='btn__logout' onClick={sendData} disabled={isProcessing} style={isProcessing ? { cursor: "not-allowed", backgroundColor: "gray" } : { cursor: "pointer", backgroundColor: "" }} >Guardar</button>
                <h2>¿No sabes que membresia elegir? 👇👇</h2>

              </section>
            ) : (
              <section className='section__account'>
                {retrieveUserGym && retrieveUserGym.map((item, index) => (
                  <div key={index}>
                    <h3>Nombre completo: {item.fullName}</h3>
                    <br />
                    <h3>Suscripción: {item.suscription}</h3>
                    <br />
                    <h3>Edad: {item.edad}</h3>
                    <br />
                    <h3>DNI: {item.DNI}</h3>
                    <br />
                    <h3>Telefono: {item.phoneNumber}</h3>
                    <br />
                  </div>
                ))}
                <h4>Puedes acceder a las instalaciones colocando tu DNI en la computadora que está en la puerta principal 🖥️⚡</h4>
              </section>

            )
          )}
          {dontHaveDataGym ? <section className='section__memberships-list'>
            <h3>Membresías</h3>
            <div className='section__memberships'>
              {isfetching && <Loader />}
              <ul className='ul__membership'>
                {memberships && memberships.map((membership) => (
                  <li className='li__membership' key={membership.id}>
                    <strong>{membership.name}</strong>
                    <p>{membership.description}</p>
                    <p>${membership.price}</p>
                    <p>Es personalizable este plan: {membership.customizable ? "Si" : "No"}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>: ""}
        </div>
      ) : "Aguarde un momento, estamos cargando tus datos"}
    </section>
  );
}

export default UserAccount;
