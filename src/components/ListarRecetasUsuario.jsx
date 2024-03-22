import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import service from "../services/config.services";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function ListarRecetasUsuario() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recetasUsuario, setRecetaUsuario] = useState([]);
  const [buscador, setBuscador] = useState("");
  const { loggedUserId } = useContext(AuthContext);

  const usuarioId = loggedUserId;

  useEffect(() => {
    const recetaPorIdUsuario = async () => {
      try {
        const response = await service.get(`/recetas/porUsuario/${usuarioId}`);
        console.log(response.data);
        console.log("patata");
        setRecetaUsuario(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener receta por Id de Usuario:", error);
    
      }
    };

    recetaPorIdUsuario();
  }, [usuarioId]);

  const handelDelete = async (recetasId) => {
    try {
      await service.delete(`/recetas/${recetasId}`);
      opinionsList();
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  const handleEdit = (recetasId) => {
    navigate(`/EditarReceta/${recetasId}`);
  };

  const handleBuscador = (event) => {
    setBuscador(event.target.value);
  };

  const filtradoRecetas = recetasUsuario.filter((receta) =>
    receta.nombre.toLowerCase().includes(buscador.toLowerCase())
  );

  return (
    <div>
      <h2 className="mt-4">Mis recetas</h2>
      <Container>
      <Row>
      <Form.Control
        type="text"
        placeholder="Buscar entre mis recetas..."
        value={buscador}
        onChange={handleBuscador}
        className="mb-4"
      />
      </Row>
      </Container>
      <Container>
      <Row>
          {recetasUsuario.length === 0 ? (
            <div className="alert alert-info mt-5" role="alert">
            <h4 className="text-center">No tienes recetas para mostrar</h4>
          </div>
          ) : (
            filtradoRecetas.map((receta) => (
            <Col key={receta._id}>
              <Card className="mb-3 mt-4" style={{ fontSize: "1.2rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">
                    <h3>{receta.nombre}</h3>
                  </Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <strong>Ingredientes:</strong>
                  </Card.Text>
                  <ul className="list-group">
                    {receta.ingredientes.map((ingrediente, index) => (
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
                  <Card.Text>
                    <ol className="list-group">
                      {receta.pasos.map((paso, index) => (
                        <li key={index} className="list-group-item">
                          {paso}
                        </li>
                      ))}
                    </ol>
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-around align-items-center">
                  <Button
                    variant="outline-danger"
                    size="s"
                    type="submit"
                    onClick={() => handelDelete(receta._id)}
                  >
                    Borrar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant="outline-warning"
                    size="s"
                    onClick={() => handleEdit(receta._id)}
                  >
                    Editar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ListarRecetasUsuario;
