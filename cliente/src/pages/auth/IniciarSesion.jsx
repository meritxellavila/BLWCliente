import React, { useState, useContext } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import axios from "axios";
import {AuthContext} from "../../context/auth.context"

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
      const response = await axios.post(`http://localhost:5005/api/auth/login`, credentials);

      // 2. almacenamos el token de forma segura en localStorage
      localStorage.setItem("authToken", response.data.authToken);

      // 3. validar el Token y actualizar los estados de auth del usuario
      await authenticateUser();

      // 4 redireccionar a pagina privada
      navigate("/private-pages");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Iniciar sesión</h1>
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

        <Button variant="primary" size="lg" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default IniciarSesion;
