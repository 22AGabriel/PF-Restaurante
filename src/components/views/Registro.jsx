import React from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";

const Registro = () => {
  return (
    <Container className="bajarFooter">
      <div className="text-center my-5">
        <h1 className="display-4">Registrarse</h1>
      </div>
      <Card className="p-3 bg-rojo3">
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ej: Juan Martin" />
              <Form.Text className="text-muted">Error</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ej: Lopez" />
              <Form.Text>Error</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ej: comida@gmail.com" />
              <Form.Text>Error</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese una contraseña"/>
              <Form.Text>Error</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese nuevamente la contraseña"/>
              <Form.Text>Error</Form.Text>
            </Form.Group>
              <Button className="bg-rojo2 border-dark w-100" type="submit">
                Registrar
              </Button>
          </Form>
        </Row>
      </Card>
    </Container>
  );
};

export default Registro;
