import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Col md={4}>
      <Card className="mb-3 CardPP">
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombreProducto}
          />
          <Card.Body>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
            <Card.Text>Categoria: {producto.categoria}</Card.Text>
            <Button className="btn bg-rojo3 text-light buttonCard" as={Link} to={`/detalle/${producto.id}`}>Ver mas</Button>
          </Card.Body>
        </Card>
    </Col>
  );
};

export default CardProducto;
