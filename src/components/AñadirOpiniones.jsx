import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button, FloatingLabel, Container, Card } from "react-bootstrap";
import { AuthContext } from '../context/auth.context';


const AñadirOpiniones = () => {
  const { loggedUserId } = useContext(AuthContext);
  const { recetasId } = useParams();
  const [comentario, setOpinion] = useState('');
  const [valoracion, setValoracion] = useState(1); 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( comentario,valoracion,recetasId );
    try {
     const response = await axios.post(`http://localhost:5005/api/opiniones`, {
              comentario: comentario,
              valoracion: valoracion,
              recetaId: recetasId,
            });      
      
      console.log(response);
      

      setOpinion('');
      setValoracion(1);
    } catch (error) {
      console.error('Error añadiendo opinion:', error);
    }
  };

  return (
    <Container className="col-md-8 p-0">      
    <Card>
      <Card.Body>
        <Card.Title>Añadir Opinión</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="comentario">
            <FloatingLabel controlId="comentario" label="Opinión">
              <Form.Control
                as="textarea"
                style={{ height: '120px' }}
                value={comentario}
                onChange={(e) => setOpinion(e.target.value)}
                required
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group controlId="valoracion">
            <FloatingLabel controlId="valoracion" label="Valoración">
              <Form.Control
                type="number"
                value={valoracion}
                onChange={(e) => setValoracion(e.target.value)}
                min={1}
                max={5}
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Card.Body>
          <Button variant="success" type="submit">
            Añadir Opinión
          </Button>
          </Card.Body>
        </Form>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default AñadirOpiniones;
