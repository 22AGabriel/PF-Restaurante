import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button, Container } from "react-bootstrap";
import { rehacerPedido } from "../helpers/queriesPedido";
import Swal from "sweetalert2";

const CardPedido = ({ pedido,setArregloPedidos, usuario }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    color: "#fff",
    background: "#c96752",
    timer: 5000
  })

   const reciclarPedido = ()=>{
    rehacerPedido(pedido.productos, usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta.status === 201){
        setArregloPedidos(usuario.pedidos)
        Toast.fire({
          icon: 'success',
          title: 'Pedido enviado'
        })
      }
    })
   }
  return (
    <>
      <Container className="bajarFooter">
        <div className="row bg-rojo3 text-dark mt-4 rounded">
          <div className="d-flex justify-content-end mt-2">
            <h6>{pedido.fecha}</h6>
          </div>
          <hr />
          <div className="col-12 col-md-6">
            <ul>
              {pedido.productos.map((item,indice) => (
                <li item={item} key={indice}>
                  {item.nombreProducto} / cantidad: {item.cantidad}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 cardPedidos2">
            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip`}>
                    <p>Volver a pedir</p>
                  </Tooltip>
                }
              >
                <Button className="text-rojo1 btn-light" size="sm" onClick={reciclarPedido}>
                  <i className="bi bi-arrow-repeat fs-2"></i>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardPedido;