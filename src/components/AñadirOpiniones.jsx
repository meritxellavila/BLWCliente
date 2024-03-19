import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';


const AñadirOpiniones = () => {
  const { loggedUserId } = useContext(AuthContext);
  const { recetasId } = useParams();
  const [comentario, setOpinion] = useState('');
  const [valoracion, setValoracion] = useState(1); 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( comentario,valoracion,recetasId );
    try {
     const response = await axios.post(`http://localhost:5005/api/opiniones`, {
              comentario: comentario,
              valoracion: valoracion,
              recetaId: recetasId,
            });      
      
      console.log(response);
      

      setOpinion('');
      setValoracion(1);

      // if (opinionAñadida) {
      //   opinionAñadida(response.data);
      // }
    } catch (error) {
      console.error('Error añadiendo opinion:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comentario">Opinion:</label>
        <textarea id="comentario" value={comentario} onChange={(e) => setOpinion(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="valoracion">Valoración:</label>
        <input type="number" id="valoracion" value={valoracion} onChange={(e) => setValoracion(e.target.value)} min={1} max={5} required />
      </div>
      <button type="submit">Añadir Opinion</button>
    </form>
  );
};

export default AñadirOpiniones;
