import { useEffect, useState } from "react"
import service from "../services/config.services"

import React from 'react'

function PerfilDeUsuario() {

    const [ dataPrivada, setDataPrivada ] = useState(null)

    useEffect(() => {
        getData()
      }, [])


  const getData = async() => {

    try {
      // const storedToken = localStorage.getItem("authToken")
     // const response = await axios.get("http://localhost:5005/api/auth/ejemplo-ruta-privada", { headers: { authorization: `Bearer ${storedToken}` } })
      const response = await service.get("/auth/ejemplo-ruta-privada")


      
      console.log(response)
      setDataPrivada(response.data)

    } catch (error) {
      console.log(error) // navigate o algo
    }

  }

  if (dataPrivada === null) {
    return <h3>...buscando</h3>
  }


  return (
    <div>
      
      <h1 className="text-center mb-4 mt-4">Perfil Privado</h1>
<h4>Aqui tengo que ver los detalles del usuario, modificar y eliminar </h4>

      {dataPrivada.data}
      

    </div>
  )
}

export default PerfilDeUsuario
