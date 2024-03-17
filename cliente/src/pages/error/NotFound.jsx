import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Lo siento, página no encontrada.</h1>
      <p className="lead">La página que estás buscando no existe.</p>
      <Link to={"/"} className="btn btn-primary mt-3">
        Vuelve a la página de inicio
      </Link>
    </div>
  );
}
export default NotFound
