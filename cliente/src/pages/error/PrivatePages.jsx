import { useEffect, useState } from "react"
import service from "../../services/config.services"

import React from 'react'

function PrivatePages() {

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
s
    } catch (error) {
      console.log(error) // navigate o algo
    }

  }

  if (dataPrivada === null) {
    return <h3>...buscando</h3>
  }


  return (
    <div>
      
      <h3>Ejemplo de página privada</h3>
      <p>Solo usuarios que hayan validado credenciales deberian poder acceder</p>

      {dataPrivada.data}

    </div>
  )
}

export default PrivatePages
