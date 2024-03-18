import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const navigate = useNavigate();

  const [allRecetas, setAllRecetas] = useState([]);

  const { authenticateUser, isLoggedIn } = useContext(AuthContext);

  const homeChek = (navInfo) => {
    if (homeInfo.isActive === true) {
      return "link-active";
    } else {
      return "link-inactive";
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/recetas`)
      .then((response) => {
        const recetas = response.data;
        console.log(recetas);
        setAllRecetas(recetas);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }, []);

  return (
    <div>
      <h1 className="mt-4 mb-4">BLW</h1>
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
        {allRecetas.map((receta) => (
                  <Col key={receta.id}>
                      <Card className="mb-3" style={{ width: "100%" }}>
                    <Card.Img variant="top" src={receta.imagen} />
                    <Card.Body>
                      <Card.Title>
                        <h2>{receta.nombre}</h2>
                      </Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Text>{receta.creadoPor}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                       {isLoggedIn === false ?  (<NavLink to={`/IniciarSesion`}>Ver detalles</NavLink>) :  isLoggedIn === true && (<NavLink to={`/DetallesReceta/${receta.id}`}>Ver Detalles</NavLink>)} 
                    </Card.Body>     
                    </Card>               
                  </Col>  ))}
          </Row>
      </Container>
    </div>
  );
}

export default HomePage;
