import React from 'react';
import { Container } from 'react-bootstrap';

const Error404 = () => {
    return (
        <Container>
      <nav aria-label="breadcrumb" className='mt-5'>
        <ol class="breadcrumb">
          <li class="breadcrumb-item text-light">
            <a href="/" className="text-light">Inicio</a>
          </li>
        </ol>
      </nav>
      <div className="w-50 mx-auto">
        <img
          src="https://img.freepik.com/vector-premium/vaya-error-404-pagina-no-encontrada-regresar-banner-error-sistema-pagina-rota-donut-mordido-comida-pagina-elementos-diseno-sitio-web-informe-problema-rosado_249405-3.jpg?w=2000"
          alt="error404"
          className="w-100"
        />
      </div>
      <div className="text-center my-5">
        <h2>Ocurrio un error al intentar cargar la pagina</h2>
      </div>
    </Container>
    );
};

export default Error404;