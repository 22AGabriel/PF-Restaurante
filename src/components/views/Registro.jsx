import React from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";

const Registro = () => {
  return (
    <Container className="bg-rojo4 p-3">
      <div className="d-flex justify-content-center">
        {" "}
        <h1 className="text-rojo3">Registrarse</h1>
      </div>
      <Card className="py-3 bg-rojo4 shadow">
        <Row>
          <Form className="px-4 text-dark">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
              <Form.Text className="text-muted">Ej: Juan Martin</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su apellido" />
              <Form.Text className="text-muted">Ej: Lopez</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su nombre" />
              <Form.Text className="text-muted">Ej: comida@gmail.com</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              {" "}
              <Button className="bg-rojo2 " type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Row>
      </Card>
    </Container>
  );
};

export default Registro;
