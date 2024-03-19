import axios from "axios";

const service = axios.create({
  // baseURL: "http://localhost:5005/api"
  baseURL: import.meta.env.VITE_SERVER_URL
})

// intercepta la salida de la llamada y le agrega el Token
service.interceptors.request.use((config) => {

  const storedToken = localStorage.getItem("authToken")

  if (storedToken) {
    config.headers = { authorization: `Bearer ${storedToken}` }
  }

  return config

})

export default service