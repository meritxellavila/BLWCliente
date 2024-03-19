
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate } from "react-router-dom"

// este componente va a verificar que el usuario este logeado, y solo si eso es correcto, entonces renderiza la pagina.
// SOLO SE DEBE USAR PARA PAGINAS. NO PARA COMPONENTES ANIDADOS.
function IsPrivate(props) {

  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn === true) {
    return props.children // la pagina
  } else {
    // ya no puedes acceder, redireccionamos a una pagina publica como /login
    return <Navigate to="/IniciarSesion"/>
  }

}

export default IsPrivate