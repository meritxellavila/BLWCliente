import React from "react";
import { NavLink } from "react-router-dom";
// import HomePage from '../assets/pages/HomePage';
// import Registro from '../pages/Registro';
// import IniciarSesion from '../assets/pages/IniciarSesion';
// import AñadirReceta from '../pages/AñadirReceta'

function Navbar() {
  const navChek = (navInfo) => {
    console.log(navInfo);
    if (navInfo.isActive === true) {
      return "link-active";
    } else {
      return "link-inactive";
    }
  };

  return (
    <nav>
      <NavLink className={navChek} to="/">
        HomePage
      </NavLink>
      <NavLink className={navChek} to="/Registro">
        Registro
      </NavLink>
      <NavLink className={navChek} to="/IniciarSession">
        IniciarSesion
      </NavLink>
      <NavLink className={navChek} to="/AñadirReceta">
        AñadirReceta
      </NavLink>
    </nav>
  );
}

export default Navbar;
