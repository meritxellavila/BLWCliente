import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import service from "../../services/config.services";

import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



function Registro() {

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)

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
  
      const newUsuario = {
        name: name,
        email: email,
        password: password,
      };

  try {
    await axios.post(`http://localhost:5005/api/auth/signup`, newUsuario);
     
 
      navigate("/IniciarSesion")//ruta de FE

      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      let errorCode = error.response.status
      let errorMessage = error.response.data.message
      if (errorCode === 400) {
        setErrorMessage(errorMessage)
      } else {
        navigate("/*")
      }
    }
  };

  return (
  <Container style={{ backgroundColor: 'orange', padding: '20px', borderRadius: '10px' }}>
  <h2 style={{ color: 'green' }}>Registrarse</h2>

  <Form onSubmit={handleSubmit}>
    <FloatingLabel controlId="floatingInputName" label="Nombre:" className="mb-3">
      <Form.Control type="name" value={name} onChange={handleName} style={{ borderColor: 'green' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInputEmail" label="Email:" className="mb-3">
      <Form.Control type="email" value={email} onChange={handleEmail} style={{ borderColor: 'green' }} />
    </FloatingLabel>

    <FloatingLabel controlId="floatingInputPassword" label="Password:" className="mb-3">
      <Form.Control type="password" value={password} onChange={handlePassword} style={{ borderColor: 'green' }} />
    </FloatingLabel>

    <p style={{ color: 'red' }}>{errorMessage}</p>

    <Button variant="success" size="lg" type="submit">
      Registrar
    </Button>
  </Form>
</Container>
  );
}

export default Registro;
