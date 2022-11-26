import React from "react";
import { Row, Col } from "react-bootstrap";

const Ubicacion = () => {
  return (
    <div>
      <div className="container ">
        <Row>
          <Col md={12}>
            <div className="d-flex flex-column mt-5 container" id="ubicacion">
                <h4 className="display-6 text-center " id="ubicacion">Visitanos</h4>
                  <ul className="ulUbicacion  visitanos">
                    <li>Pedidos hasta las 00:00hs</li>
                    <li>Domingos de 10hs a 14 hs</li>
                    <li>
                      Lunes a sábados hasta las 02:00
                    </li>
                  </ul>
            </div>
            <h3 className="text-center mb-5">
              Gral Paz 576,t4000 San Miguel de Tucuman
            </h3>
          </Col>
          <Col md={12}>
            <div className="mb-5 w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022203025154!2d-65.20939584923696!3d-26.836700883077715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1668354813269!5m2!1ses-419!2sar"
                style={{ height: 450, border: 0 }}
                className="w-100"
                frameBorder="0"
                title="mapa"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Ubicacion;
