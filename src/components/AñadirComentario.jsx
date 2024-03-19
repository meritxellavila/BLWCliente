import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function AñadirComentario() {
  const navigate = useNavigate();
  const params = useParams();

  const [creadoPor, setCreadoPor] = useState("");
  const [comentario, setComentario] = useState("");
  const [valoracion, setValoracion] = useState(0);
  const [imagen, setImagen] = useState("");


  const handleCreadoPor = (event) => {
    let inputCreadoPor = event.target.value;
    //console.log(inputCreadoPor);
    setCreadoPor(inputCreadoPor);
  };

  const handleComentario = (event) => {
    let inputComentario = event.target.value
    setComentario(inputComentario )
  };

  const handleValoracion = (event) => {
    let inputValoracion = event.target.value
    setValoracion(inputValoracion )
  };

  const handleImagen = (event) => {
    let inputImagen = event.target.value;
    setImagen(inputImagen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newComentario = {
         creadoPor: creadoPor,
         comentario: comentario,
        valoracion: valoracion,
       imagen: imagen,
      };
    } catch (error) {
        console.log(error);
      }
    };
}
  return 
  
 

export default AñadirComentario
