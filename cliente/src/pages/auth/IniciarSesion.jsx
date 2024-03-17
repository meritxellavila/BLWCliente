import React, { useState } from 'react';
import { Container, Form, FloatingLabel, Button } from 'react-bootstrap';
import axios from 'axios';

function IniciarSesion() {

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

  const handleIniciarSesion = async (event) => {
    event.preventDefault();
    try {
      const newUsuario = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post(`${API_URL}/login`, newUsuario);
      console.log(response);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Iniciar sesión</h1>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInputName" label="Nombre:" className="mb-3">
          <Form.Control type="text" value={name} onChange={handleName} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInputEmail" label="Email:" className="mb-3">
          <Form.Control type="email" value={email} onChange={handleEmail} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInputPassword" label="Password:" className="mb-3">
          <Form.Control type="password" value={password} onChange={handlePassword} />
        </FloatingLabel>

        <Button variant="primary" size="lg" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
}

export default IniciarSesion;

