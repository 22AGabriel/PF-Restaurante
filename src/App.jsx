import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Inicio from './components/views/Inicio';
import DetalleProducto from './components/views/DetalleProducto';
import Admin from './components/views/Admin';
import Login from './components/views/Login';
import Nosotros from './components/views/Nosotros';
import Pedidos from './components/views/Pedidos';
import Registro from './components/views/Registro';
import AgregarProducto from './components/views/producto/AgregarProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import Error404 from './components/views/Error404';

function App() {
  return (
    <BrowserRouter>
     <NavBar></NavBar>
     <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/detalle" element={<DetalleProducto/>}/>
      <Route exact path="/administrar" element={<Admin/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registro" element={<Registro/>}/>
      <Route exact path="/nosotros" element={<Nosotros/>}/>
      <Route exact path="/usuario/pedidos" element={<Pedidos/>}/>
      <Route exact path="/administrar/agregar" element={<AgregarProducto/>}/>
      <Route exact path="/administrar/editar" element={<EditarProducto/>}/>
      <Route exact path="*" element={<Error404/>}/>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
