import React from "react";
import "../../Inicio.css";
import { Row} from "react-bootstrap";
import CardInicio from "./CardInicio";

const Inicio = () => {
  return (
    <div className="mainSection">
      <div className=" text-light portada3 ">
        <div className="divPortada3">
          <h1 className="display-1">Shamy comidas Arabes</h1>
          <h2 className="tituloCel display-1">Shamy</h2>
        </div>
      </div>
      <div className=" mb-5 container">
      <div className="w-75 mx-auto my-5 d-flex  divSearch">
            <input type="search" className="form-control " />
            <span>
              <i class="bi bi-search display-5 ms-4"></i>
            </span>
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
          <h1 className="display-1 text-light">
            {" "}
            Descubri nuestras especialidades
          </h1>
          <h2 className="tituloCel display-3">Haz tu pedido</h2>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
