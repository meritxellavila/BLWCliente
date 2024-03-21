import React from 'react';
import { Link } from 'react-router-dom';

function ServerError() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="alert alert-danger mt-5" role="alert">
            <h1 className="text-center">Error 500. Problemas con el servidor</h1>
            <p className="text-center">¿Quieres volver atrás? <Link to="/">Haz clic aquí</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerError;
