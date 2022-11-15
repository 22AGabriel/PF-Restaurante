import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queriesProducto";
import { useParams } from "react-router-dom";
import '../../css/app.css';

const DetalleProducto = () => {
  let [contador, setContador ] = useState(1);
  const [producto, setProducto] = useState({})
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
        <Card className="m-4 text-dark bg-rojo3">
          <Row>
            <Col md={4}>
              <Card.Img
                src={producto.imagen}
                className="w-100 p-2"
                alt={producto.nombreProducto}
              />
            </Col>
            <Col md={8} clasName='w-100'>
              <Card.Body>
                <div>
                <Card.Title className="my-5 display-6">
                  {producto.nombreProducto}
                </Card.Title>
                <hr />
                <Card.Text>
                  Detalle:
                  <br />
                  {producto.detalle}
                  <br />
                Precio: ${producto.precio}
                </Card.Text>
                </div>
                        <div>
                        <Form.Label className='mt-5'>Cantidad: {contador}</Form.Label>
                        <Button
                          type="submit"
                          className="bg-rojo2 borde-rojo2 mx-1"
                          size="sm"
                          onClick={() => setContador(contador + 1)}
                        >
                          +
                        </Button>
                        <Button
                          type="submit"
                          className="bg-rojo2 borde-rojo2 mx-1"
                          size="sm"
                          onClick={() => setContador(contador - 1)}
                        >
                          -
                        </Button>
                <div className="d-flex justify-content-end flex-colum-reverse">
                  <i className="bi bi-cart-plus-fill fs-1 mx-3"></i>
                </div>
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
