import React from "react";
import { Row, Col } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
    <div className="d-flex justify-content-center bg-rojo1" id="whats">
      <Row className="container text-center">
        <Col md={6}>
           <div className="mt-5">
           <ul className="ulUbicacion text-center">
            <li className="display-6">Consultas</li>
            <li className="display-6">Whatsapp</li>
            <li className="display-6">Sham</li>
           </ul>
           </div>
        </Col>
        <Col md={6}>
           <div className="mt-5">
            <p>Sumanos a tus contactos y nos comunicamos para hablar sobre los presupuestos para eventos.Pedidos hastas las 00 hs</p>
            <h4>3813455667</h4>
           </div>
        </Col>
      </Row>
    </div>
    <div className="b-dark py-5"></div>
    <div className="d-flex justify-content-center bg-rojo1">
      <Row className="container text-center">
        <Col md={6}>
           <div className="mt-5">
           <ul className="ulUbicacion">
            <li className="display-6">Consultas</li>
            <li className="display-6">Precios</li>
            <li className="display-6">Sham</li>
           </ul>
           </div>
        </Col>
        <Col md={6}>
           <div className="mt-5">
            <p>Llama a nuestros telefonos figos y te asesoramos sobre nuestros costos</p>
            <h4>3814272345</h4>
           </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Contacto;
