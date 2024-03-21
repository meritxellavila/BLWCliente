import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, NavLink, useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col, Toast } from "react-bootstrap";

function MostrarOpiniones(props) {
  console.log("MostrarOpiniones", props);
  
  const [loading, setLoading] = useState(true);
  //   const [recetaDetalle, setReceta] = useState(null);
  const [opiniones, setOpiniones] = useState([]);


  const { recetasId } = useParams();
 
const opinionsList = () =>{
  console.log("estoy en opinionList");
  
  axios
  .get(`http://localhost:5005/api/opiniones/recetas/${recetasId}/opiniones`)
  .then((responseOpiniones) => {
    // console.log("patata2");
    console.log(responseOpiniones.data);
    setOpiniones(responseOpiniones.data);
    
  })
  .catch((errorOpiniones) =>
    console.log("Error al obtener opiniones:", errorOpiniones)

  );
}


  useEffect(() => {
    if (props.createNewOpinion){
      opinionsList()//solo cuando createNewOpinion = true 
    }
   
  }, [props.createNewOpinion]);//dependencia solo true y en la primera carga 

  useEffect(() => {
    opinionsList()
  }, []);// al cargar consulta

  const handelDelete = async (opinionesId) => {
    try {
      await axios.delete(`http://localhost:5005/api/opiniones/${opinionesId}`);
      opinionsList();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4 mt-4">Deja tu opinión sobre nuestras recetas:</h2>
      <Container>
        <Row>
        {opiniones.map((opinion) => (
 <Card.Body className="d-flex justify-content-center">
            <Card key={opinion.id} border="card border-warning col-md-8" >
              <Card.Header><strong>Opinión</strong></Card.Header>
              <Card.Body>
                <Card.Title>Comentario:</Card.Title>
                <Card.Text>
                 {opinion.comentario}
                </Card.Text>
              </Card.Body>
              <Button
                      variant="outline-danger"
                      size="s"
                      type="submit"
                      onClick={() => handelDelete(opinion._id)} // Pasar el ID de la opinión al hacer clic
                    >
                    Borrar
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg> */}
                  </Button>
            </Card>
            </Card.Body>              
        ))}
        </Row>
      </Container>
    </div>
  );
}

export default MostrarOpiniones;
