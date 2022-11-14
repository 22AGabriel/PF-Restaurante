import React from "react";
import "../../css/Inicio.css";
import { Row, Col } from "react-bootstrap";
import CardInicio from "./CardInicio";
import Contacto from "./Contacto";
import { Link } from "react-router-dom";
import Ubicacion from "./Ubicacion";

const Inicio = () => {
  return (
    <div className="mainSection">
      <div className=" text-light portada3 ">
        <div className="divPortada3">
          <h1 className="display-1">Sham Comidas Arabes</h1>
          <h2 className="tituloCel display-1">Sham</h2>
        </div>
      </div>
      <div className="container py-5 divPedidos">
        <div className="w-100 mx-auto my-5">
          <Row>
            <Col md={4}>
              <div className="divCirculo ">
                <a href="#whats">
                  <i class="bi bi-telephone display-3"></i>
                </a>
              </div>
              <div className="d-flex flex-column text-center   mt-3">
                <h4 className="text-center">Realiza tu pedido</h4>
                <p>
                  Llamanos a nuestros telefonos fijos y registramos tu pedido
                </p>
                <a href="#whats" className="btn bg-rojo1 text-light btnLink">Nuestros telefono</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="divCirculo">
                 <a href="#whats">
                  <i class="bi bi-whatsapp display-3"></i>
                </a>
              </div>
              <div className="d-flex flex-column text-center mx-auto  mt-3">
                <h4 className="text-center">Consultá precios</h4>
                <p>
                  sumanos a tus contactos y te asesoramos sobre los costos de envio
                </p>
                <a href="#whats" className="btn bg-rojo1 text-light btnLink">Nuestros telefono</a>
              </div>
            </Col>
            <Col md={4}>
              <div className="divCirculo">
              <a href="#ubicacion">
                  <i class="bi bi-geo-alt display-3"></i>
              </a>
              </div>
              <div className="d-flex flex-column text-center mx-auto  mt-3">
                <h4 className="text-center">Visitanos</h4>
                <p>
                 Visitanos en nuestro local y conocenos te estamos esperando
                </p>
                <a href="#ubicacion" className="btn bg-rojo1 text-light btnLink">Ver ubucacion</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className=" mb-5 container my-5">
        <div className=" mx-auto my-5 d-flex  ">
          <form className=" mx-auto divSearch">
            <div className="d-flex w-100 ">
              <input type="text" className="form-control" />
              <span>
                <button
                  type="submit"
                  className="btn btn-outline-secondary px-3"
                >
                  <i class="bi bi-search "></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center text-light display-3 my-5">Productos</h1>
        <div>
          <Row>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
            <CardInicio></CardInicio>
          </Row>
        </div>
      </div>
      <div className="portada3  mt-5">
        <div className="divPortada3">
          <h1 className="display-5 text-light">
            Descubri nuestras especialidades
          </h1>
          <h2 className="tituloCel display-3">Haz tu pedido</h2>
        </div>
      </div>
      <div className="bg-rojo1">
      <Contacto></Contacto>
      </div>
      <Ubicacion></Ubicacion>
    </div>
  );
};

export default Inicio;
