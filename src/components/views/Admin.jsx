import { Container, Tab, Table, Tabs } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import ItemUsuario from "./usuario/ItemUsuario";
import ItemPedido from "./producto/ItemPedido";
import { Link } from "react-router-dom";
import "../../css/admin.css"

const Admin = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center mb-4">
        <h1>Administrar</h1>
      </div>
      <Tabs defaultActiveKey="productos" id="fill-tab" className="mb-3" fill>
        <Tab eventKey="productos" title="Productos">
          <div className="d-flex justify-content-end my-4">
            <Link to={"/administrar/agregar"} className="btn bg-primary">
                Agregar
            </Link>
          </div>
          <Table striped responsive hover>
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
              <ItemProducto></ItemProducto>
              <ItemProducto></ItemProducto>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Table striped responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Estado</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <ItemUsuario></ItemUsuario>
              <ItemUsuario></ItemUsuario>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="pedidos" title="Pedidos">
          <Table striped responsive hover>
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <ItemPedido></ItemPedido>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
