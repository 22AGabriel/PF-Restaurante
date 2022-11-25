import { Container, Tab, Table, Tabs } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import ItemUsuario from "./usuario/ItemUsuario";
import ItemPedido from './producto/ItemPedido';
import { Link } from "react-router-dom";
import "../../css/admin.css"
import { useEffect, useState } from "react";
import { consultarProducto } from "../helpers/queriesProducto";
import { consultarUsuario } from "../helpers/queriesUsuario";
import { listarPedidos } from "../helpers/queriesPedido";

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    consultarProducto().then((respuesta)=>{
      setProductos(respuesta)
    })
    consultarUsuario().then((respuesta)=>{
      setUsuarios(respuesta)
    })
    listarPedidos().then((respuesta)=>{
      setPedidos(respuesta)
     })
  }, [productos, usuarios, pedidos]);

  return (
    <Container className="my-5 bajarFooter">
      <div className="d-flex justify-content-center mb-4">
        <h1 className="display-4">Administrar</h1>
      </div>
      <Tabs defaultActiveKey="productos" id="fill-tab" className="mt-5" fill>
        <Tab eventKey="productos" title="Productos">
          <div className="d-flex justify-content-end">
            <Link to={"/administrar/agregar"} className="my-4 btn bg-rojo2">
                Agregar
            </Link>
          </div>
          <Table responsive className="text-white">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Detalle</th>
                <th>Categoria</th>
                <th>Imagen</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
                productos.map((producto)=><ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto> )
              }
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Table responsive className="text-white mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario)=><ItemUsuario key={usuario._id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>)}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="pedidos" title="Pedidos">
          <Table responsive className="text-white mt-5">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {
                pedidos.map((pedido)=>
                <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos}></ItemPedido>
                )
              }
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
