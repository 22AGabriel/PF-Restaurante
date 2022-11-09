import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Pedidos = () => {
  return (
    <div>
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
              <Card.Body>
                <Card.Title className='bolder'>Pure de garbanzos</Card.Title>
                <Card.Text className='mt-4'>
                  Pure de garbanzos realizados con garbanzos frescos, ajo, limon, sal, pimienta y pimentón rojo. Vienen acompañados con 3 pancitos arabes para disfrutar!
                  <article className="d-flex justify-content-end mt-4">
                <i class="bi bi-bag-plus fs-2 me-3"></i>
                <i class="bi bi-arrow-repeat fs-2"></i>
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
