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
import NotFound from "./pages/error/NotFound";
import ServerError from "./pages/error/ServerError";
import Buscador from "./components/Buscador";
import IsPrivate from "./components/IsPrivate";
import PrivatePages from "./pages/error/PrivatePages";

function App() {
  return (
    <>
      <Navbar />
      <Buscador />

      <hr />

      <Routes>
         {/* <Route path={"/AñadirReceta"} element={<AñadirReceta />} />
        <Route
          path={"/DetallesReceta/:recetasId"}
          element={<DetallesReceta />}
        />
        <Route path={"/EditarReceta/:recetasId"} element={<EditarReceta />} />
        <Route path={"/Favoritos"} element={<Favoritos />} /> */}
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/IniciarSesion"} element={<IniciarSesion />} />
        <Route path={"/Registro"} element={<Registro />} />
        <Route
          path={"/Private-pages"}
          element={
            <IsPrivate>
              <PrivatePages />
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
        
        {/* <Route
          path={"/AñadirReceta"}
          element={
            <IsPrivate>
              <AñadirReceta />
            </IsPrivate>
          }
        /> */}
        {/* <Route
          path={"/DetallesReceta "}
          element={
            <IsPrivate>
              <DetallesReceta />
            </IsPrivate>
          }
        /> */}
        {/* <Route
          path={"/EditarReceta"}
          element={
            <IsPrivate>
            
              <EditarReceta />
            </IsPrivate>
          }
        /> */}
        {/* <Route
          path={"/Favoritos"}
          element={
            <IsPrivate>
              <Favoritos />
            </IsPrivate>
          }
        /> */}
        <Route path={"/*"} element={<NotFound />} /> //404
        <Route path={"/ServerError"} element={<ServerError />} /> //500
      </Routes>
    </>
  );
}

export default App;
