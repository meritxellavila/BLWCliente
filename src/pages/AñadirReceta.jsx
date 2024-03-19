import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function AñadirReceta() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [pasos, setPasos] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [creadoPor, setCreadoPor] = useState("");

  const handleNombre = (event) => {
    let inputNombre = event.target.value;
    console.log(inputNombre);
    setNombre(inputNombre);
  };

  const handleImagen = (event) => {
    let inputImagen = event.target.value;
    setImagen(inputImagen);
  };

  const handlePasos = (event) => {
    let inputPasos = event.target.value;
   // console.log(inputPasos);
    setPasos(inputPasos);
  };

  const handleIngredientes = (event) => {
    let inputIngredientes = event.target.value;
    //console.log(inputIngredientes);
    setIngredientes(inputIngredientes);
  };

  const handleCreadoPor = (event) => {
    let inputCreadoPor = event.target.value;
    //console.log(inputCreadoPor);
    setCreadoPor(inputCreadoPor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReceta = {
      nombre: nombre,
      imagen: imagen,
      pasos: pasos,
      ingredientes: ingredientes,
      creadoPor: creadoPor,
    };

    try {
      const response = await axios.post(`http://localhost:5005/api/recetas`, newReceta);

      console.log(response);

      setNombre("");
      setPasos("");
      setImagen("");
      setIngredientes("");
      setCreadoPor("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h1 className="my-4">Añadir Receta</h1>

        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
            <Form.Control type="text" value={nombre} onChange={handleNombre} />
          </FloatingLabel>

          <FloatingLabel controlId="imagen" label="URL Imagen" className="mb-3">
            <Form.Control type="text" value={imagen} onChange={handleImagen} />
          </FloatingLabel>

          <FloatingLabel controlId="pasos" label="Pasos" className="mb-3">
            <Form.Control type="text" value={pasos} onChange={handlePasos} />
          </FloatingLabel>

          <FloatingLabel
            controlId="ingredientes"
            label="Ingredientes"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={ingredientes}
              onChange={handleIngredientes}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="creadoPor"
            label="Creado Por"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={creadoPor}
              onChange={handleCreadoPor}
            />
          </FloatingLabel>

          <Button variant="outline-secondary" size="lg" type="submit">
            Añadir
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AñadirReceta;
