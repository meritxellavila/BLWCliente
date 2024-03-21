import { useEffect, useState } from "react";
import service from "../services/config.services";
import { AuthContext } from '../context/auth.context';
import { useContext } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate, NavLink, useParams, Navigate} from "react-router-dom";
import axios from "axios"
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
            const response = await service.get("http://localhost:5005/api/auth/verify");
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
            const response = await service.put(`http://localhost:5005/api/auth/${loggedUserId}`, editedUserData);
           console.log({loggedUserId});
           
            console.log(response.data); // Manejar la respuesta del servidor según sea necesario
            // Actualizar los datos mostrados en el componente si es necesario
            navigate("/IniciarSesion");
        } catch (error) {
            console.log(error); 
        }
    }

    // const handleDelete = async () => {
    //   try {
    //     await axios.delete(`http://localhost:5005/api/auth/${loggedUserId}`);
    //     navigate("/IniciarSesion");
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

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
              {/* <Button
              variant="outline-danger"
              size="s"
              type="submit"
              onClick={handleDelete}
            >
              Borrar
              <svg
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
              </svg>
            </Button> */}
              </Col>                   
            </Row>
          </Form>
      </Container>
  );
}

export default PerfilDeUsuario;
