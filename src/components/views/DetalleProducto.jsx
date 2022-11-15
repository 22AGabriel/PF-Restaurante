import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queriesProducto";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  let [numeritos, setNumeritos] = useState(1);
  const [producto, setProducto] = useState("")
  const {id} = useParams();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if(respuesta.status === 200){
        setProducto(respuesta.dato)
      }
    })
  }, [])

  return (
    <>
      <Container>
        <Card className="mt-4">
          <Row>
            <Col md={4} className="bg-rojo3">
              <Card.Img
                src={producto.imagen}
                className="w-100 mt-5 m-2"
                alt="salsa arabe"
              ></Card.Img>
            </Col>
            <Col md={8} className="bg-rojo3">
              <Card.Body>
                <Card.Title className="fs-2 w-bold mt-3 d-flex justify-content-center text-dark">
                  {producto.nombreProducto}
                </Card.Title>
                <hr />
                <Card.Text className="fs-5 text-dark">
                  Detalle:
                  <br></br>
                  {producto.detalle}
                </Card.Text>
                <Card.Text className="fs-5 text-dark">Precio: ${producto.precio}</Card.Text>
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
