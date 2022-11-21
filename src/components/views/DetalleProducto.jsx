import { Card, Container, Col, Row, Button, Breadcrumb} from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queriesProducto";
import { Link, useParams } from "react-router-dom";
import "../../css/app.css";

const DetalleProducto = () => {
  let [contador, setContador] = useState(1);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      }
    });
  }, []);

  return (
    <>
      <Container className="bajarFooter my-5">
        <Breadcrumb>
          <Breadcrumb.Item><Link className="text-rojo2" to={"/"}>Inicio</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link className="text-rojo2" to={"*"}>{producto.categoria}</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>{producto.nombreProducto}</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="text-dark bg-rojo3">
          <Row>
            <Col md={4}>
              <Card.Img
                src={producto.imagen}
                className="w-100 p-2 rounded-4"
                alt={producto.nombreProducto}
              />
            </Col>
            <Col md={8}>
              <Card.Body className="d-flex flex-column h-100 justify-content-between">
                <div>
                  <Card.Title className="text-center">
                    {producto.nombreProducto}
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    {producto.detalle}
                    <br />
                    <br />
                    Precio: ${producto.precio}
                  </Card.Text>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <div className="d-flex">
                    <Card.Text>
                      Cantidad:
                      <Button
                        className="bg-rojo2 borde-rojo2 mx-3"
                        size="sm"
                        onClick={() => setContador(contador - 1)}
                      >
                        -
                      </Button>
                      {contador}
                      <Button
                        className="bg-rojo2 borde-rojo2 mx-3"
                        size="sm"
                        onClick={() => setContador(contador + 1)}
                      >
                        +
                      </Button>
                    </Card.Text>
                  </div>
                  <Button type="submit" className="bg-rojo3 border-dark text-dark">
                    <i className="bi bi-cart-plus-fill"></i>
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default DetalleProducto;
