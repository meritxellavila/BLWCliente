import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, NavLink, useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col, Toast } from "react-bootstrap";

function DetallesReceta() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [recetaDetalle, setReceta] = useState(null);
    const { recetasId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5005/api/recetas/${recetasId}`)
            .then((response) => {
                console.log(response.data);
                setReceta(response.data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [recetasId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5005/api/recetas/${recetasId}`);
            navigate('/'); // Redirigir a la página de inicio después de eliminar la receta
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="text-center mb-4 mt-4">Detalle de la Receta</h2>
            <Container>
                <Row>
                    {recetaDetalle && (
                        <Col key={recetaDetalle._id}>
                            <Card className="mb-3 mt-4" style={{ fontFamily: 'Indie Flower', fontSize: '1.2rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={recetaDetalle.imagen}
                                    className="img-fluid"
                                />
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <h2>{recetaDetalle.nombre}</h2>
                                    </Card.Title>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Ingredientes:</strong>
                                    </Card.Text>
                                    <ul className="list-group">
                                        {recetaDetalle.ingredientes.map((ingrediente, index) => (
                                            <li key={index} className="list-group-item">
                                                {ingrediente}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Pasos:</strong>
                                    </Card.Text>
                                    <ol className="list-group">
                                        {recetaDetalle.pasos.map((paso, index) => (
                                            <li key={index} className="list-group-item">
                                                {paso}
                                            </li>
                                        ))}
                                    </ol>
                                </Card.Body>
                                <Container className="d-flex justify-content-between">
                                    <Button variant="outline-secondary" size="lg" onClick={handleDelete}>
                                        Borrar
                                    </Button>
                                    <Link to={`/EditarReceta/${recetasId}`}>
                                        <Button variant="outline-primary" size="lg" type="submit">
                                            Editar
                                        </Button>
                                    </Link>
                                </Container>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default DetallesReceta;

