import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { supabase } from "./server";


import Swal from "sweetalert2"
export const AppContext = createContext()

export const UseAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        console.log("Context not found")
    }
    return context
}

export const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [userData, setUserData] = useState({})
    const [memberships, setMemberships] = useState([])
    const [retrieveUserGym, setRetrieveUserGym] = useState([])
    const createUser = async(values) => {
        setIsProcessing(true)
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                  email: values.email,
                  password: values.password,
                  options: {
                    data: {
                      userName: values.userName
                    }
                  }
                }
              )
            if (error) {
                console.log(error)
            }
            if(data){
                if (data.user.identities.length === 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al registrar!",
                        text: "Este correo ya esta en uso!",
                      });
                }else{
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso!",
                        text: "Verifica tu casilla de correo electronico para confirmar tu cuenta!",
                        footer: 'Este paso es importante para poder usar tu cuenta!'
                      });
                    };
                }
             console.log(data) 
        } catch (error) {
            console.log(error)
        }finally{
            setIsProcessing(false)
        }
    };

    const loginUser = async (values)=>{
        console.log("contexto")
        setIsProcessing(true)
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password
            })
        
        if(data.session === null || data.user === null || !data.user){
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
            title: "Correo o contraseña incorrecta"
          });
        }else{
          console.log(data)
          setIsProcessing(false)
          setIsAuth(true)
        }

        if (error) {
          console.log(error)
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
              title: "No pudimos completar su solicitud, por favor recargue la página o verifique su conexión a internet e intente nuevamente"
            });
        }
        } catch (error) {
            console.log(error)
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
              title: "No pudimos completar su solicitud, por favor recargue la página o verifique su conexión a internet e intente nuevamente"
            });
        }finally{
            setIsProcessing(false)
        }
    }

   
    const closeSession = async () => {
        setIsProcessing(true)
        try {
            const { error } = await supabase.auth.signOut()     
            if (error) {
                console.log(error)
            }else{
                setIsAuth(false)
            }
        } catch (error) {
            console.log(error)
            

        }finally{
            setIsProcessing(false)
        }
    }

    const [isfetching, setIsFetching] = useState(false)
    const fetchMemberships = async() =>{
        setIsFetching(true)
        try {
            const { data, error } = await supabase
            .from("suscriptions")
            .select()
            if (error) {
                console.log(error)
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
                    title: "Por favor recarga la página si luego de unos segundos no ves nada"
                  });
            }
            if (data) {
                setMemberships(data)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsFetching(false)
        }
    }

    const sendUserData = async(values)=>{
        setIsProcessing(true)
        try {
            const { error } = await supabase
            .from("usersData")
            .insert(
                {
                    userID: values.userID,
                    fullName: values.userFullName,
                    edad: values.userAge,
                    DNI: values.dni,
                    suscription: values.userMemberShip,
                    phoneNumber: values.userPhone
                }
            )
            if (!error) {
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
                    icon: "success",
                    title: "Usuario cargado correctamente!"
                  });   
            }else{
                console.log(error)
            }
        } catch (error) {
            console.log(error)

        }finally{
            setTimeout(()=>{
                window.location.reload()
            },3000)
        }
    }

    useEffect(()=>{
        if (isAuth) {
            const retrieveUserData = async () =>{
                try {
                    
                    const { data: { user } } = await supabase.auth.getUser()
                    if (user) {
                        setUserData(user.user_metadata.userName)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            retrieveUserData()
        }
    },[isAuth])
    const [userID, setUserID] = useState(null)
    useEffect(()=>{
       const retrieveSession = async()=>{
            try {
                const { data, error } = await supabase.auth.getSession()
                if (data.session) {
                    setIsAuth(true)
                    setUserID(data.session.user.id)
                }
                if (error) {
                    console.log(error)
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
                        title: "Hubo un error al iniciar sesión, por favor intente nuevamente"
                      });
                }
            } catch (error) {
                console.log(error)
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
                    title: "Hubo un error al iniciar sesión, por favor intente nuevamente"
                  });
            }
        }
        retrieveSession()
    },[isAuth])
const [dontHaveDataGym, setDontHaveDataGym] = useState(true)
const [isRetrievingDataGym, setIsRetrievingDataGym] = useState(false)
const [fetchCount, setFetchCount] = useState(0);

useEffect(() => {
if (isAuth === true) {
  const fetchUserGym = async () => {
    setIsRetrievingDataGym(true);
    
    try {
      const { data, error } = await supabase
        .from("usersData")
        .select()
        .eq("userID", userID); 

      if (data.length === 0) {
        console.log("No hay datos del usuario");
        setDontHaveDataGym(true);
      } else{
        console.log(data);
        setDontHaveDataGym(false);
        setRetrieveUserGym(data);
      }

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsRetrievingDataGym(false);
      setFetchCount((prevCount) => prevCount + 1); 
    }
  };
      if (fetchCount < 2) {
          setTimeout(fetchUserGym, 500);
      }
    return () => {
        
    }
}
  }, [fetchCount, userID, isAuth]); 
   

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Cambia 768 por el ancho deseado para considerar como "móvil"
      };
  
      handleResize(); // Llamada inicial para establecer el estado inicial
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  
    
    return(
        <AppContext.Provider value={{
            isMobile,
            createUser,
            loginUser,
            closeSession,
            userData,
            userID,
            isProcessing,
            isAuth,
            fetchMemberships,
            memberships,
            isfetching,
            sendUserData,

            dontHaveDataGym,
            isRetrievingDataGym,
            retrieveUserGym,
            fetchCount,
            
        }}>
            {children}
        </AppContext.Provider>
    )
}