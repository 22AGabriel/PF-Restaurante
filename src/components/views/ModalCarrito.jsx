import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import ItemModal from "./producto/ItemModal";
import { Suma } from "../helpers/queriesCarrito";

const ModalCarrito = ({ usuario,carrito,setCarrito,resultado,setResultado }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    setResultado(Suma(carrito))
  },[carrito])
 
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
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {carrito ? (
                <>
                  {carrito.lenght !== 0 ? (
                    <>
                      {carrito.map((item) => (
                        <ItemModal producto={item} key={item.id}></ItemModal>
                      ))}
                    </>
                  ) : (
                    <>
                      <p>No hay productos cargados en el carrito aun</p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div></div>
                </>
              )}
            </tbody>
          </Table>
          <p>Total del pedido: {resultado}</p>
          <Button className="w-100 mt-2" variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCarrito;
