import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import Login from "./components/views/Login";
import Nosotros from "./components/views/Nosotros";
import Registro from "./components/views/Registro";
import Error404 from "./components/views/Error404";
import "./css/app.css";
import { useEffect, useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import RutasUsuarios from "./components/routes/RutasUsuarios";
import RutasProtegidasUsuario from "./components/routes/RutasProtegidasUsuario";
import { obtenerUsuario } from "./components/helpers/queriesUsuario";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  const [resultado, setResultado] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [arregloPedidos, setArregloPedidos] = useState(usuarioLogueado.pedidos);

  useEffect(()=> {
    obtenerUsuario(usuario.uid).then((respuesta) => {
      setCarrito(respuesta.dato.carrito)
      setArregloPedidos(respuesta.dato.pedidos)
      setUsuarioLogueado(respuesta.dato)
    })
  },[])

  return (
    <BrowserRouter>
     <NavBar usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} carrito={carrito} setCarrito={setCarrito} resultado={resultado} setResultado={setResultado} setArregloPedidos={setArregloPedidos}></NavBar>
     <Routes>
      <Route exact path="/" element={<Inicio  carrito={carrito} setCarrito={setCarrito} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Inicio>}/>
      <Route exact path="/detalle/:id" element={<DetalleProducto carrito={carrito} setCarrito={setCarrito} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}/>}/>
      <Route exact path="/nosotros" element={<Nosotros/>}/>
     <Route path="/usuario/*" element={
      <RutasProtegidasUsuario usuario={usuarioLogueado}>
        <RutasUsuarios usuario={usuarioLogueado} arregloPedidos={arregloPedidos} setArregloPedidos={setArregloPedidos}></RutasUsuarios>
      </RutasProtegidasUsuario>
     }></Route>
      <Route path="/administrar/*" element={
        <RutasProtegidas usuario={usuarioLogueado}>
          <RutasAdmin></RutasAdmin>
        </RutasProtegidas>
      }>
      </Route>
      <Route exact path="*" element={<Error404/>}/>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
