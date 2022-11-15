import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import { useState } from "react";

const DetalleProducto = () => {
  let [numeritos, setNumeritos] = useState(1);

  return (
    <>
      <Container>
        <Card className="mt-4">
          <Row>
            <Col md={4} className="bg-rojo3">
              <Card.Img
                src="https://images.pexels.com/photos/6252729/pexels-photo-6252729.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-100 mt-5 m-2"
                alt="salsa arabe"
              ></Card.Img>
            </Col>
            <Col md={8} className="bg-rojo3">
              <Card.Body>
                <Card.Title className="fs-2 w-bold mt-3 d-flex justify-content-center text-dark">
                  Nombre
                </Card.Title>
                <hr />
                <Card.Text className="fs-5 text-dark">
                  Detalle:
                  <br></br>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor dolore sequi incidunt aliquam sed quam porro ipsam
                  dolorum voluptate dolores?
                </Card.Text>
                <Card.Text className="fs-5 text-dark">Precio: $</Card.Text>
                <Card className="shadow bg-rojo4 text-dark p-2 rounded">
                  <Form>
                    <Form.Group>
                      <div className="d-flex p-2">
                        <Form.Label className="fs-5">Cantidad:</Form.Label>

                        <Button
                          className="fs-2"
                          type="submit"
                          variant="bg-rojo3"
                          onClick={() => setNumeritos(numeritos + 1)}
                        >
                          +
                        </Button>
                        <h3>{numeritos}</h3>
                        <Button
                          className="fs-1"
                          type="submit"
                          variant="bg-rojo3"
                          onClick={() => setNumeritos(numeritos - 1)}
                        >
                          -
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Card>
                <article className="d-flex justify-content-end">
                  <i class="bi bi-bag-check-fill fs-1 mx-3"></i>
                  <i class="bi bi-cart-fill fs-1 mx-3 "></i>
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
