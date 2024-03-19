import React, { useState, useEffect } from 'react';
import {
    Form,
    FloatingLabel,
    Button,
    Container,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditarReceta() {
    const navigate = useNavigate();
    const { recetasId } = useParams();
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [pasos, setPasos] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [creadoPor, setCreadoPor] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5005/api/porReceta/${recetasId}`)
            .then((response) => {
                const recetaData = response.data;
                setNombre(recetaData.nombre);
                setPasos(recetaData.pasos);
                setImagen(recetaData.imagen);
                setIngredientes(recetaData.ingredientes);
                setCreadoPor(recetaData.creadoPor); // Asegúrate de que la propiedad sea minúscula, coincide con tu modelo en el backend
            })
            .catch((error) => {
                console.error(error);
            });
    }, [recetasId]);

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
        try {
            await axios.put(`http://localhost:5005/api/porReceta/${recetasId}`, {
                nombre: nombre,
                imagen: imagen,
                pasos: pasos,
                ingredientes: ingredientes,
                creadoPor: creadoPor,
            });
            // Redirige a la página de detalles de la receta u otra página
            navigate(`/recetas/${recetasId}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Container>
                <h1>Editar receta</h1>
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
                        Guardar
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default EditarReceta;
