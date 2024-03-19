import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function HomePage() {
  const navigate = useNavigate();

  const [allRecetas, setAllRecetas] = useState([]);

  const { authenticateUser, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/recetas`)
      .then((response) => {
        const recetas = response.data;
        setAllRecetas(recetas);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4 mt-4">En HomePage</h1>

      <Container>
        <h2>¿Qué es el método BLW?</h2>
        <h4>
          El método BLW, o Baby-Led Weaning, es una técnica de alimentación
          complementaria que consiste en permitir que el bebé se alimente por sí
          mismo desde el principio de su introducción a los alimentos sólidos.
          En lugar de ofrecer purés, se ofrecen alimentos sólidos en trozos o
          tiras para que el bebé pueda agarrarlos y llevarlos a la boca.
        </h4>
        <Row>
          <Col>
            <Carousel interval={2000}>
              {" "}
              {/* intervalo de 3 segundos */}
              {allRecetas.map((recipe) => (
                <Carousel.Item key={recipe._id}>
                  <img
                    className="d-block w-100"
                    src={recipe.imagen}
                    alt={recipe.nombre}
                  />
                  <Carousel.Caption>
                    <h3>{recipe.nombre}</h3>
                    <p>{recipe.descripcion}</p>
                    {isLoggedIn === false ? (
                      <NavLink
                        to={`/IniciarSesion`}
                        style={{ fontSize: "xxx-large", fontWeight: "bold" }}
                      >
                        Ver detalles
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/DetallesReceta/${recipe._id}`}
                        style={{
                          fontSize: "2rem",
                          color: "brown",
                          fontWeight: "bold",
                        }}
                      >
                        Ver Detalles
                      </NavLink>
                    )}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
