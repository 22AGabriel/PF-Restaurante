import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Container>
      <div className=" my-5">
        <h1 className="text-center my-5">Agregar Productos</h1>
        <div className="shadow py-5 w-100 mx-auto">
          <Form className="w-75 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control type="text" placeholder="Producto" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" placeholder="00,00" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>imagen</Form.Label>
              <Form.Control type="text" placeholder="URL" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="text" placeholder="1" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Categoria</Form.Label>
              <Form.Select aria-label="Default select example" className="w-75">
                <Form.Label>Cantidad</Form.Label>
                <option value="">Menu</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Plato">Al plato</option>
                <option value="Pures">Pures</option>
                <option value="Agregados">Agregados</option>
                <option value="Bebida sin alcohol">Bebidas sin alcohol</option>
                <option value="Bebidas con alcohol">Bebidas con alcohol</option>
              </Form.Select>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              crear
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default AgregarProducto;
