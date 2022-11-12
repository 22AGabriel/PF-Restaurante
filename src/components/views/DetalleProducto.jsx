import {
  Card,
  Container,
  Col,
  Row,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { useState } from "react";

const DetalleProducto = () => {
  let [numeritos, setNumeritos] = useState(1);

  return (
    <>
      <Container>
        <Card>
          <Row>
            <Col md={4}>
              <Card.Img
                className="w-100"
                src="https://images.pexels.com/photos/6275163/pexels-photo-6275163.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="salsa arabe"
              ></Card.Img>
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="fs-2 w-bold mt-3 d-flex justify-content-center">
                  Nombre
                </Card.Title>
                <hr />
                <Card.Text className="fs-5">
                  Detalle:
                  <br></br>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor dolore sequi incidunt aliquam sed quam porro ipsam
                    dolorum voluptate dolores?
                  </p>
                </Card.Text>
                <Card.Text className="fs-5">Precio: $</Card.Text>
                <Card className="d-flex p-2 shadow p-3 mb-5 bg-body rounded">
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs-5">Cantidad</Form.Label>
                      <div>
                        <h3>{numeritos}</h3>
                        <Button
                          className="me-2"
                          variant="outline-primary"
                          onClick={() => setNumeritos(numeritos + 1)}
                        >
                          +1
                        </Button>
                        <Button
                          className=""
                          variant="outline-primary"
                          onClick={() => setNumeritos(numeritos - 1)}
                        >
                          -1
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Card>
                <article className="d-flex justify-content-end">
                  <i class="bi bi-bag-check-fill fs-1 mx-3"></i>
                  <i class="bi bi-cart-fill fs-1 mx-3"></i>
                </article>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default DetalleProducto;
