import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// 1. componente que transmite el contexto
const AuthContext = createContext()

// 2. componente envoltorio que tiene todos los contextos a pasar
function AuthWrapper(props) {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ loggedUserId, setLoggedUserId ] = useState(null)
  

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken")
    console.log(storedToken)
    
    try {
      
      // verificar validez del token
      const response = await axios.get("http://localhost:5005/api/auth/verify", { headers: { authorization: `Bearer ${storedToken}` } })
      
      // Si este punto del codigo ocurre, significa que el token es valido. permitimos acceso
      setIsLoggedIn(true)
      setLoggedUserId(response.data._id) // el id del usuario segun el payload del token

    
      
    } catch (error) {
      console.log(error)
      // hubo un problema con el Token y no valido o no existe
      setIsLoggedIn(false)
      setLoggedUserId(null)
  
    }
  }

  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthWrapper
}