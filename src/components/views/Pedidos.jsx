import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "../../css/app.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { crearPedido } from "../helpers/queriesPedido";
import CardPedido from "./CardPedido";

const Pedidos = ({ usuarioLogueado }) => {
  // const [arregloPedido, setarregloPedido] = useState(usuarioLogueado.pedidos);

  useEffect(() => {
    // setarregloPedido(usuarioLogueado.pedidos)
   console.log(usuarioLogueado.pedidos)
  
  }, []);

  return (
    <div className="bajarFooter mt-5">
      <h1 className="display-4 text-center">El Sham</h1>
      <hr />
      <h3 className="display-6 text-center">Tus pedidos</h3>
      <Container>
        {usuarioLogueado.pedidos.map((item, indice) => (
          <CardPedido pedido={item} key={indice}></CardPedido>
        ))}
        {/* <Card className='my-5'>
          <Row>
            <Col md={4}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/6252749/pexels-photo-6252749.jpeg?auto=compress&cs=tinysrgb&w=600"
                className='w-100 p-2'
              />
            </Col>
            <Col md={8}>
              <Card.Body className='text-dark'>
                <Card.Title className='bolder'>Pure de garbanzos</Card.Title>
                <Card.Text className='mt-4'>
                  Pure de garbanzos realizados con garbanzos frescos, ajo, limon, sal, pimienta y pimentón rojo. Vienen acompañados con 3 pancitos arabes para disfrutar!
                  <article className="d-flex justify-content-end mt-4">

                  {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip`}>
              <p>Agregar al carrito</p>
            </Tooltip>
          }
        >
          <Button className='text-rojo1 btn-light' size="sm"><i className="bi bi-bag-plus fs-2"></i></Button>
        </OverlayTrigger>
 ))}
    {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip`}>
              <p>Volver a pedir</p>
            </Tooltip>
          }
        >
          <Button className='text-rojo1 btn-light' size="sm"><i className="bi bi-arrow-repeat fs-2"></i></Button>
        </OverlayTrigger>
 ))}
                  </article>
                  <i className="bi bi-basket2-fill fs-5"> Cantidad: 1</i> 
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card> */}
      </Container>
    </div>
  );
};

export default Pedidos;
