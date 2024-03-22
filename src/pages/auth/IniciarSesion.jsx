import React, { useState, useContext } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import {AuthContext} from "../../context/auth.context"
import service from "../../services/config.services";

import { useNavigate } from "react-router-dom";

function IniciarSesion() {

  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    let inputName = event.target.value;
    setName(inputName);
  };

  const handleEmail = (event) => {
    let inputEmail = event.target.value;
    setEmail(inputEmail);
  };

  const handlePassword = (event) => {
    let inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const handleSubmit= async (event) => {
    event.preventDefault();

    const credentials = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // 1. validar credenciales del usuario
      const response = await service.post(`/auth/login`, credentials);

      // 2. almacenamos el token de forma segura en localStorage
      localStorage.setItem("authToken", response.data.authToken);

      // 3. validar el Token y actualizar los estados de auth del usuario
      await authenticateUser();

      // 4 redireccionar a pagina privada
      navigate("/PerfilDeUsuario");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Iniciar sesión</h2>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInputName"
          label="Nombre:"
          className="mb-3"
        >
          <Form.Control type="text" value={name} onChange={handleName} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInputEmail"
          label="Email:"
          className="mb-3"
        >
          <Form.Control type="email" value={email} onChange={handleEmail} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInputPassword"
          label="Password:"
          className="mb-3"
        >
          <Form.Control
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </FloatingLabel>

        <Button className="mt-4 mb-4" variant="success" size="lg" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default IniciarSesion;
