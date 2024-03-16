
import './App.css'

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AñadirReceta from './pages/AñadirReceta';
import CerrarSesion from './pages/CerrarSesion';
import DetallesReceta from './pages/DetallesReceta';
import EditarReceta from './pages/EditarReceta';
import Favoritos from './pages/Favoritos';
import HomePage from './pages/HomePage';
import IniciarSesion from './pages/IniciarSesion';
import Registro from './pages/Registro';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import Error from './pages/Error';
import Buscador from './components/Buscador';

function App() {


  return (
    <>
      <Navbar />
      <Buscador />

      <Routes>
      <Route path={"/AñadirReceta"} element={<AñadirReceta />} />
      <Route path={"/CerrarSesion"} element={<CerrarSesion />} />
      <Route path={"/DetallesReceta"} element={<DetallesReceta />} />
      <Route path={"/EditarReceta"} element={<EditarReceta />} />
      <Route path={"/Favoritos"} element={<Favoritos />} />
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/IniciarSesion"} element={<IniciarSesion />} />
      <Route path={"/Registro"} element={<Registro />} />
      

      <Route path={"/*"} element={<NotFound />} />
      <Route path={"/ServerError"} element={<ServerError />} />
      <Route path={"/error"} element={<Error />} />
      
      </Routes>
    </>
  )
}

export default App
