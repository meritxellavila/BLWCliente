import { useEffect, useState } from "react";
import service from "../services/config.services";
import { AuthContext } from '../context/auth.context';
import { useContext } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import {useNavigate, NavLink, useParams, Navigate} from "react-router-dom";
import React from 'react';

function PerfilDeUsuario() {
    const [dataPrivada, setDataPrivada] = useState(null);
    const [editedUserData, setEditedUserData] = useState({}); // Estado para almacenar los datos editados
    const { loggedUserId } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await service.get("/auth/verify");
            console.log(response.data);
            setDataPrivada(response.data);
        } catch (error) {
            console.log(error); 
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData({ ...editedUserData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await service.put(`/auth/${loggedUserId}`, editedUserData);
           console.log({loggedUserId});
           
            console.log(response.data); // Manejar la respuesta del servidor según sea necesario
            // Actualizar los datos mostrados en el componente si es necesario
            navigate("/IniciarSesion");
        } catch (error) {
            console.log(error); 
            navigate("/*");
        }
    }

    if (dataPrivada === null) {
        return <h3>Buscando...</h3>;
    }

    return (
      <Container>
          <h1 className="text-center mb-4 mt-4">Perfil: <strong>{dataPrivada.name}</strong></h1>
          <h4 className="pb-4">Aquí tienes los detalles de tu usuario</h4>

          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                  <Form.Label>Correo electrónico:</Form.Label>
                  <Form.Control
                      type="email"
                      name="email"
                      value={editedUserData.email || dataPrivada.email}
                      onChange={handleInputChange}
                  />
              </Form.Group>
              <Form.Group controlId="name" className="mt-3">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                      type="text"
                      name="name"
                      value={editedUserData.name || dataPrivada.name}
                      onChange={handleInputChange}
                  />
              </Form.Group>
              <Row>        
              <Col className="col d-flex justify-content-around pt-3">
              <Button variant="outline-success btn btn-outline-success btn-lg h-100" size="lg" type="submit">
                        Guardar cambios
              </Button>
              </Col>                   
            </Row>
          </Form>
      </Container>
  );
}

export default PerfilDeUsuario;
