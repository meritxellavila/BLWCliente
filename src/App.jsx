import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AñadirReceta from "./pages/AñadirReceta";
import DetallesReceta from "./pages/DetallesReceta";
import EditarReceta from "./pages/EditarReceta";
import Favoritos from "./pages/Favoritos";
import HomePage from "./pages/HomePage";
import IniciarSesion from "./pages/auth/IniciarSesion";
import Registro from "./pages/auth/Registro";
import Buscador from "./components/Buscador";
import IsPrivate from "./components/IsPrivate";
import PerfilDeUsuario from './pages/PerfilDeUsuario';
import ListarRecetasUsuario from "./components/ListarRecetasUsuario";


//ERROR
import NotFound from "./pages/error/NotFound";
import ServerError from "./pages/error/ServerError";



function App() {
  return (
    <>
      <Navbar />
      <Buscador />

      <hr />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/IniciarSesion"} element={<IniciarSesion />} />
        <Route path={"/Registro"} element={<Registro />} />
        <Route
          path={"/PerfilDeUsuario"}
          element={
            <IsPrivate>
              <PerfilDeUsuario />
            </IsPrivate>
          }
        />
         <Route
          path={"/DetallesReceta/:recetasId"}
          element={
            <IsPrivate>
              <DetallesReceta />
            </IsPrivate>
          }
        />
         <Route
          path={"/EditarReceta/:recetasId"}
          element={
            <IsPrivate>
              <EditarReceta />
            </IsPrivate>
          }
        />

      <Route
          path={"/Favoritos"}
          element={
            <IsPrivate>
              <Favoritos />
            </IsPrivate>
          }
        />

        <Route
          path={"/AñadirReceta"}
          element={
            <IsPrivate>
              <AñadirReceta />
            </IsPrivate>
          }
        />
      <Route path= {"/ListarRecetasUsuario"} element={
            <IsPrivate>
              <ListarRecetasUsuario />
            </IsPrivate>
          }
        />

        <Route path={"/*"} element={<NotFound />} /> //404
        <Route path={"/ServerError"} element={<ServerError />} /> //500
      </Routes>
    </>
  );
}

export default App;
