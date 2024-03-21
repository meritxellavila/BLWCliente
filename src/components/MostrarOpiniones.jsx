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


  return (
    <div>
      <h2 className="text-center mb-4 mt-4">Deja tu opinión sobre nuestras recetas:</h2>
      <Container>
        <Row>
        {opiniones.map((opinion) => (
            <Card.Body className="d-flex justify-content-center">
            <Card border="card border-warning col-md-8" >
              <Card.Header><strong>Opinión</strong></Card.Header>
              <Card.Body>
                <Card.Title>Comentario:</Card.Title>
                <Card.Text>
                 {opinion.comentario}
                </Card.Text>
              </Card.Body>
            </Card>
            </Card.Body>              
        ))}
        </Row>
      </Container>
    </div>
  );
}

export default MostrarOpiniones;
