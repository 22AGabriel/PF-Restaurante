import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import ItemModal from "./producto/ItemModal";
import { Suma } from "../helpers/queriesCarrito";
import { crearPedido } from "../helpers/queriesPedido";
import Swal from "sweetalert2";

const ModalCarrito = ({usuario, carrito,setCarrito,resultado,setResultado, setArregloPedidos}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    setResultado(Suma(carrito))
    setCarrito(carrito)
  },[carrito])

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    color: "#fff",
    background: "#292929",
    timer: 5000
  })

  const verificarUsuario = () => {
    if(usuario.estado === "Suspendido"){
      Toast.fire({
        icon: 'error',
        title: 'Usuario suspendido, no puedes realizar esta acción'
      })
    } else {
      crearPedido(usuario).then(() =>{
        setArregloPedidos(usuario.pedidos)
        setCarrito([])
        Toast.fire({
          icon: 'success',
          title: '¡Tu pedido fue enviado con éxito!'
        })
      })
    }
  }
 
  return (
    <div>
      <NavLink
        className={"nav-item nav-link"}
        variant="dark"
        onClick={handleShow}
      >
        Carrito <i className="bi bi-cart-plus-fill fs-4 text-light"></i>
      </NavLink>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-rojo2">
          <Modal.Title>Carrito de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-rojo2">
          {carrito.length > 0?(
            <>
              <Table className="text-center" striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <ItemModal
                      producto={item}
                      key={item._id}
                      carrito={carrito}
                      setCarrito={setCarrito}
                      usuario={usuario}
                    ></ItemModal>
                  ))}
                </tbody>
              </Table>
              <p>Total del pedido: {resultado}</p>
          <Button className="w-100 my-2" variant="danger" onClick={verificarUsuario}>
            Enviar pedido
          </Button>
            </>
          ):(
            <div className="text-center">
              <p>No hay productos cargados aún</p>
            </div>
          )}
          <Button className="w-100 mt-2" variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCarrito;
