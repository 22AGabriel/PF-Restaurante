import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button, Card, Col, Row } from "react-bootstrap";
import Pedidos from "./Pedidos";

const CardPedido = ({ pedido }) => {
  return (
    <>
      <div className="w-100 mx-auto container text-dark ">
        <div className="row bg-rojo3 text-dark mt-5 contenerdorPedidos">
          <div className="d-flex justify-content-between mt-1">
            <h3 className="text-light">pedido</h3>
            <h5 className="mt-2">{pedido.fecha}</h5>
          </div>
          <hr className="text-dark" />
          <div className="col-12 col-md-6">
            <ul>
              {pedido.productos.map((item) => (
                <li>
                  {item.nombreProducto} / cantidad: {item.cantidad}{" "}
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
                    <p>Agregar al carrito</p>
                  </Tooltip>
                }
              >
                <Button className="text-rojo1 btn-light mx-3" size="sm">
                  <i className="bi bi-bag-plus fs-2"></i>
                </Button>
              </OverlayTrigger>
            ))}
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
                <Button className="text-rojo1 btn-light" size="sm">
                  <i className="bi bi-arrow-repeat fs-2"></i>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPedido;
