import React, { useState, useEffect } from 'react'
import {
    Form,
    FloatingLabel,
    Button,
    InputGroup,
    Container,
  } from "react-bootstrap";
  import axios from "axios";
  import { useNavigate, useParams, Link } from "react-router-dom";


function EditarReceta() {
    const navigate = useNavigate();
    const { recetasId } = useParams();
    const [detallesReceta, setDetallesReceta] = useState({});

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

  useEffect(() => {
    axios
      .put(`http://localhost:5005/api/porReceta/:recetasId`)
      .then((response) => {
        const recetaData = response.data;
        setNombre(recetaData.nombre);
        setPasos(recetatData.pasos);
        setImagen(productData.imagen);
        setIngredientes(recetatData.ingredientes);
        setCreadoPor(recetas.CreadoPor);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recetaId]);

    return (
        <div>
            <h1>editar receta</h1>
        </div>
    )
}

export default EditarReceta
