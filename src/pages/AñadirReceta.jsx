import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import service from "../services/config.services";

function AñadirReceta() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");

  const [creadoPor, setDataPrivada] = useState(null);
  const [pasos, setPasos] = useState("");
  const [ingredientes, setIngredientes] = useState("");


  const [imagen, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/auth/verify");
      console.log(response.data);
      setDataPrivada(response.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNombre = (event) => {
    let inputNombre = event.target.value;
    console.log(inputNombre);
    setNombre(inputNombre);
  };

  //cloudinary
  const handleFileUpload = async (event) => {
    console.log("The file to be uploaded is: ", event.target.files[0]);

    if (!event.target.files[0]) {
      
      return;
    }

    setIsUploading(true); 

    const uploadData = new FormData(); 
    uploadData.append("image", event.target.files[0]);
   
    try {
      const response = await service.post("/upload", uploadData);
      
      console.log(response);

      setImageUrl(response.data.imageUrl);

      

      setIsUploading(false);
    } catch (error) {
      console.log(error);
      navigate("/ServerError");
      
      
    }
  };

  const handlePasos = (event) => {
    let inputPasos = event.target.value;
    // console.log(inputPasos);
    setPasos(inputPasos);
  };

  const handleIngredientes = (event) => {
    let inputIngredientes = event.target.value;
    setIngredientes(inputIngredientes);
  };

  const handleData = (event) => {
    let data = event.target.value;
    setDataPrivada(data);
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
      const response = await service.post(`/recetas`, newReceta);

      console.log(response);

      setNombre("");
      setPasos("");
      setImageUrl();
      setIngredientes("");
  
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

          <FloatingLabel controlId="image" label="Image" className="mb-3">
            <Form.Control
              type="file"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
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

          <FloatingLabel controlId="creadoPor" label="creado" className="mb-3">
            <Form.Control type="text" value={creadoPor} onChange={handleData} />
          </FloatingLabel>

          {isUploading ? <h3>... uploading image</h3> : null}
          {imagen ? (
            <div>
              <img src={imagen} alt="img" width={200} />
            </div>
          ) : null}

          <Button
            disabled={isUploading}
            variant="outline-secondary"
            size="lg"
            type="submit"
          >
            Añadir
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AñadirReceta;
