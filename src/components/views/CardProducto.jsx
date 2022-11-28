import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarUsuario } from "../helpers/queriesUsuario";

const CardProducto = ({ producto, carrito, setCarrito, usuarioLogueado }) => {
  const navigate = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    color: "#fff",
    background: "#c96752",
    timer: 5000
  })
  
  const editarCarrito = (producto) => {
    if(usuarioLogueado.perfil){
      let existeProducto = carrito.find(
        (item) => item._id === producto._id
      );
      if (existeProducto) {
        existeProducto.cantidad += 1;
      } else {
        setCarrito([...carrito, producto]);
        usuarioLogueado.carrito.push(producto);
      }
      editarUsuario(usuarioLogueado._id, usuarioLogueado);
      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
      })
    } else {
      navigate("/registro")
    }
  };

  return (
    <Col md={6} lg={4}>
      <Card className="mb-3 CardPP">
        <div className="imgCardProducto">
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="imgDiv"
          />
        </div>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <Card.Text>Categoria: {producto.categoria}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              className=" bg-rojo2 text-light buttonCard"
              as={Link}
              to={`/detalle/${producto._id}`}
            >
              Ver mas
            </Button>
            <Button
              className="bg-rojo2 text-light buttonCard"
              onClick={() => {
                editarCarrito(producto);
              }}
            >
              <i className="bi bi-cart-plus-fill"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
