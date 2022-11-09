import { Container, Tab, Table, Tabs } from 'react-bootstrap';
import ItemProducto from './producto/ItemProducto';

const Admin = () => {
    return (
        <Container className="my-5">
            <div className='d-flex justify-content-center mb-4'>
                <h1>Administrar</h1>
            </div>
            <Tabs
            defaultActiveKey="productos"
            id="fill-tab-example"
            className="mb-3"
            fill>
                <Tab eventKey="productos" title="Productos">
                    <Table striped  responsive hover>
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

                </Tab>
                <Tab eventKey="pedidos" title="Pedidos">

                </Tab>
            </Tabs>
        </Container>
    );
};

export default Admin;