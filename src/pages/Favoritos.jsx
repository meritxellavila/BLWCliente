// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/auth.context";
// import { useContext } from "react";
// import service from '../services/config.services';

// function Favoritos() {
    
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [favoritos, setFavoritos] = useState([]);
//   const { loggedUserId } = useContext(AuthContext);

//   const usuarioId = loggedUserId; 

//   useEffect(() => {
//     const obtenerFavoritos = async () => {
//       try {
//         const response = await service.get(`/favoritos/${usuarioId}/recetas/`);
//         console.log(response.data);
//         console.log("patata");
//         setFavoritos(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error al obtener favoritos", error);
//       }
//     };

//     obtenerFavoritos();
//   }, [usuarioId]);

//   const handleFavorites = async () => {
//     setLoading(true);
//     try {

//       await axios.post(`http://localhost:5005/api/${usuarioId}/recetas/${recetasId}`);
      
//     } catch (error) {
//       // Manejar el error si ocurre
//       console.error("Error al agregar la receta a favoritos:", error);
//       // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-center mb-4 mt-4">Recetas Favoritas</h2>
//       <button onClick={handleFavorites} disabled={loading}>
//         {loading ? 'Agregando a Favoritos...' : 'Agregar a Favoritos'}
//       </button>
//     </div>
//   );
// }

// export default Favoritos;
