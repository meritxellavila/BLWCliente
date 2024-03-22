import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import service from "../services/config.services";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ListarRecetasUsuario() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recetasUsuario, setRecetaUsuario] = useState([]);
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
      await axios.delete(`http://localhost:5005/api/recetas/${recetasId}`);
      opinionsList();
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/*");
    }
  };

  return (
    <div>
      <h2 className="mt-4">Mis recetas</h2>
      <Container>
        <Row>
          {recetasUsuario.map((receta) => (
            <Col key={receta._id}>
              <Card
                className="mb-3 mt-4"
                style={{ fontSize: "1.2rem" }}
              >
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
                <Button
                      variant="outline-danger"
                      size="s"
                      type="submit"
                      onClick={() => handelDelete(receta._id)} // Pasar el ID de la opinión al hacer clic
                    >
                    Borrar
                    </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ListarRecetasUsuario;
