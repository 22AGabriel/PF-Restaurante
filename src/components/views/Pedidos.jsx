import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import '../../css/app.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Pedidos = () => {
  const popover = (
    <Popover id="popover-basic" className="text-dark">
      <Popover.Header as="h3">Agregar al carrito</Popover.Header>
      <Popover.Body>
        Si te gustó podes volver a pedir haciendo click <strong>aquí</strong>.
      </Popover.Body>
    </Popover>
  );

  return (
    <div class='bajarFooter'>
      <h1 className="display-4 text-center">El Sham</h1>
      <hr />
      <h3 className="display-6 text-center">Tus pedidos</h3>
      <Container>
        <Card className='my-5'>
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
                  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="outline-success" size="sm"><i class="bi bi-bag-plus fs-2"></i></Button>
  </OverlayTrigger>
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="outline-dark" size="sm" className='ms-2'> <i class="bi bi-arrow-repeat fs-2"></i></Button>
  </OverlayTrigger>
                  </article>
                  <i class="bi bi-basket2-fill fs-5"> Cantidad: 1</i> 
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Pedidos;
