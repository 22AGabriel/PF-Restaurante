import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button, Card, Col, Row } from "react-bootstrap";
import Pedidos from "./Pedidos";

const CardPedido = ({ pedido }) => {
  return (
    <>
      <div className="w-100 mx-auto container ">
        <div className="row bg-light text-dark mt-5 contenerdorPedidos">
          <div className="d-flex justify-content-between mt-1">
            <h3>pedido</h3>
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
                <Button className="text-rojo1 btn-light" size="sm">
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

      {/* <Card className="my-5">
          <div className="row">
          {pedido.productos.map((item)=> <div className="col-12 col-md-4">
            <Card.Img
              variant="top"
              src= {item.imagen}
              className="w-100 p-2"
              style={{"height":300}}
            />
            </div> )}
          </div>
          <Col md={8}>
            <Card.Body className="text-dark  ">
              <Card.Title className="bolder d-flex justify-content-between">{pedido.usuario}</Card.Title>
              <Card.Text className="mt-4">
                estado: 
                {pedido.estado}
                <br />
                Productos:
                {pedido.productos.map((item)=> <span> {item.nombreProducto}</span>)}
                <br />
                fecha: {pedido.fecha}
                <div className="d-flex justify-content-end mt-4">
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
                      <Button className="text-rojo1 btn-light" size="sm">
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
                <i className="bi bi-basket2-fill fs-5"></i><br/>
              </Card.Text>
            </Card.Body>
          </Col>
      </Card> */}
      {/* <Card className="my-5">
        <Row>
          <Col md={4}>
          {pedido.productos.map((item)=> <Card.Img
              variant="top"
              src= {item.imagen}
              className="w-100 p-2"
            /> )}
          </Col>
          <Col md={8}>
            <Card.Body className="text-dark">
              <Card.Title className="bolder">{pedido.usuario}</Card.Title>
              <Card.Text className="mt-4">
                estado: 
                {pedido.estado} <br />
                {pedido.productos.map((item)=> <span>{item.nombreProducto}</span>)}
                <br />
                fecha: {pedido.fecha}
                <div className="d-flex justify-content-end mt-4">
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
                      <Button className="text-rojo1 btn-light" size="sm">
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
                <i className="bi bi-basket2-fill fs-5"></i><br/>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card> */}
    </>
  );
};

export default CardPedido;
