import React from 'react';
import { Col ,Card,Button} from 'react-bootstrap';

const CardInicio = () => {
    return (
        <Col md={4}>
        <Card className="mb-3 CardPP">
          <Card.Img
            variant="top"
            src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Precio: $500</Card.Text>
            <Button variant="danger">Ver mas</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CardInicio;