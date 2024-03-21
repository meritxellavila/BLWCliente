import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import service from '../services/config.services';



function AñadirReceta() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  // const [imagen, setImagen] = useState("");s
  const [pasos, setPasos] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  // const [creadoPor, setCreadoPor] = useState("");


  const [imagen, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleNombre = (event) => {
    let inputNombre = event.target.value;
    console.log(inputNombre);
    setNombre(inputNombre);
  };

  //cloudinary
  const handleFileUpload = async (event) => {
    console.log("The file to be uploaded is: ", event.target.files[0]);
  
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }
  
    setIsUploading(true); // to start the loading animation
  
    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")
  
    try {
      const response = await service.post("http://localhost:5005/api/upload", uploadData)
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
      console.log(response);
      
      setImageUrl(response.data.imageUrl);
      
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });
  
      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      navigate("/");
    }
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

  // const handleCreadoPor = (event) => {
  //   let inputCreadoPor = event.target.value;
  //   //console.log(inputCreadoPor);
  //   setCreadoPor(inputCreadoPor);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReceta = {
      nombre: nombre,
      // imagen: imagen,
      imagen: imagen,
      pasos: pasos,
      ingredientes: ingredientes,
      // creadoPor: creadoPor,
    };

    try {
      const response = await service.post(
        `http://localhost:5005/api/recetas`,
        newReceta
      );

      console.log(response);

      setNombre("");
      setPasos("");
      setImageUrl();
      setIngredientes("");
      // setCreadoPor("");
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
            <Form.Control type="file" onChange={handleFileUpload} disabled={isUploading} />
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

          {/* <FloatingLabel
            controlId="creadoPor"
            label="Creado Por"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={creadoPor}
              onChange={handleCreadoPor}
            />
          </FloatingLabel> */}
          {isUploading ? <h3>... uploading image</h3> : null}
          {imagen ? (<div><img src={imagen} alt="img" width={200} /></div>) : null}


          <Button disabled={isUploading} variant="outline-secondary" size="lg" type="submit">
            Añadir
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AñadirReceta;
