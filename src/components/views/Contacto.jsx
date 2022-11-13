import React from "react";
import { Row, Col } from "react-bootstrap";

const Contacto = () => {
  return (
    <div>
      <div className="bg-danger">
        <div className="w-75 mx-auto">
          <Row className="w-75 mx-auto">
            <Col md={6}>
              <div className="py-4">
                <h6>consultas y asesoramiento</h6>
                <h2 className="display-3">WhatsApp</h2>
                <h3 className="display-6">Sham</h3>
              </div>
            </Col>
            <Col md={6}>
              <div className="py-4">
                <p>
                  Sumanos a tu lista de WhatsApp y nos comuncamos para hablar
                  sobre presupuestos,eventos o seguimineto de pedidos .Pedidos
                  hasta las 00:00 hs
                </p>
                <h5 className="display-5">+3814567890</h5>
              </div>
            </Col>
          </Row>
        </div>
        <div className="divWhatsApp w-100"></div>
        <div className="w-75 mx-auto">
          <Row className="w-75 mx-auto">
            <Col md={6}>
              <div className="py-4">
                <h6>consultas y asesoramiento</h6>
                <h2 className="display-4">Lista de Precios</h2>
                <h3 className="display-6">Sham</h3>
              </div>
            </Col>
            <Col md={6}>
              <div className="py-4">
                <p>
                 Llamanos a nuestros telefonos fijos y te asesoramos sobre nuestros costos.Pedidos a hasta las 00:00hs
                </p>
                <h5 className="display-5">+3814274567</h5>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
