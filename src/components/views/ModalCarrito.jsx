import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import ItemModal from "./producto/ItemModal";

const ModalCarrito = ({ usuario }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { carrito } = { ...usuario };

  return (
    <div>
      <NavLink
        className={"nav-item nav-link"}
        variant="dark"
        onClick={handleShow}
      >
        <i className="bi bi-cart-plus-fill fs-4 text-light"></i>
      </NavLink>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-rojo2">
          <Modal.Title>Carrito de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-rojo2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {/* {usuario.carrito.map((item) => (
                <ItemModal producto={item} key={item.id}></ItemModal>
              ))} */}
            </tbody>
          </Table>
          <p>Total del pedido:</p>
          <Button className="w-100 mt-2" variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCarrito;
