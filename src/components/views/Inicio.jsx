import React from "react";
import "../../css/Inicio.css";
import { Row} from "react-bootstrap";
import CardInicio from "./CardInicio";

const Inicio = () => {
  return (
    <div className="mainSection">
      <div className=" text-light portada3 ">
        <div className="divPortada3">
          <h1 className="display-1">Sham Comidas Arabes</h1>
          <h2 className="tituloCel display-1">Sham</h2>
        </div>
      </div>
      <div className=" mb-5 container">
      <div className=" mx-auto my-5 d-flex  ">
             <form className=" mx-auto divSearch">
              <div className="d-flex w-100 ">
              <input type="text" className="form-control" />
              <span>
                <button type="submit" className="btn btn-outline-secondary px-3"> 
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
    </div>
  );
};

export default Inicio;
