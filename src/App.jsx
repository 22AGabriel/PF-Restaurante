import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import Admin from "./components/views/Admin";
import Login from "./components/views/Login";
import Nosotros from "./components/views/Nosotros";
import Pedidos from "./components/views/Pedidos";
import Registro from "./components/views/Registro";
import AgregarProducto from "./components/views/producto/AgregarProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Error404 from "./components/views/Error404";
import "./css/app.css";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [resultado, setResultado] = useState(0);
  const [carrito, setCarrito] = useState(usuario.carrito);

  return (
    <BrowserRouter>
     <NavBar usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} carrito={carrito} setCarrito={setCarrito} resultado={resultado} setResultado={setResultado}></NavBar>
     <Routes>
      <Route exact path="/" element={<Inicio  carrito={carrito} setCarrito={setCarrito} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Inicio>}/>
      <Route exact path="/detalle/:id" element={<DetalleProducto/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}/>}/>
      <Route exact path="/nosotros" element={<Nosotros/>}/>
      <Route exact path="/usuario/pedidos" element={<Pedidos usuarioLogueado={usuarioLogueado}/>}/>
  
      <Route exact path="*" element={<Error404/>}/>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
