import React, { useState } from 'react';
import axios from 'axios';

import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const API_URL = import.meta.env.VITE_SERVER_URL;

function Registro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUsuario = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post(`${API_URL}/api/auth/signup`, newUsuario);
      console.log(response);

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Registrarse</h2>

      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInputName" label="Nombre:" className="mb-3">
          <Form.Control type="name" value={name} onChange={handleName} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInputEmail" label="Email:" className="mb-3">
          <Form.Control type="email" value={email} onChange={handleEmail} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInputPassword" label="Password:" className="mb-3">
          <Form.Control type="password" value={password} onChange={handlePassword} />
        </FloatingLabel>

        <Button variant="primary" size="lg" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
}

export default Registro;
