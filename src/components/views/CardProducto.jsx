import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editarCarrito } from "../helpers/queriesCarrito";

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
            <div className="d-flex justify-content-between">
            <Button className=" bg-rojo3 text-light buttonCard" as={Link} to={`/detalle/${producto.id}`}>Ver mas</Button>
            <Button className="bg-rojo3 text-light buttonCard borde-rojo3" onClick={()=>{editarCarrito(producto)}}>Agregar<i className="bi bi-cart-plus-fill"></i></Button>
            </div>
          </Card.Body>
        </Card>
    </Col>
  );
};

export default CardProducto;
