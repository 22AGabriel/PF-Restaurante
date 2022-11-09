import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className='py-5 bg-dark text-light'>
            <Container>
                <Row>
                    <Col>
                    <p>logo</p>
                    </Col>
                    <Col>
                    <p>Home</p>
                    <p>Acerca de nosotros</p>
                    <p>Encontranos en</p>
                    <p>Contactanos</p>
                    </Col>
                    <Col>
                    <p>Seguinos en nuestras redes</p>
                    <i class="bi bi-facebook fs-4 me-3"></i>
                    <i class="bi bi-whatsapp fs-4 me-3"></i>
                    <i class="bi bi-instagram fs-4"></i>
                    </Col>
                </Row>
            </Container>
                <p className='text-center mt-4'>&copy; Todos los derechos reservados</p>
        </section>
    );
};

export default Footer;