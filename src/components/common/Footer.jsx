import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <section class='py-5 bg-dark text-light'>
            <Container>
                <Row className='d-flex'>
                    <Col md={4} className='d-flex flex-column align-items-center'>
                    <img src='https://trello.com/1/cards/636987e596b2de018dfa4d9c/attachments/636bbf6a4fc778028d53781f/previews/636bbf6a4fc778028d537889/download/Logo_Sham.png' alt='logo sham' className='w-50'></img>
                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center'>
                    <p>Home</p>
                    <p>Acerca de nosotros</p>
                    <p>Encontranos en</p>
                    <p>Contactanos</p>
                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center'>
                    <p>Seguinos en nuestras redes</p>
                    <div>
                    <i class="bi bi-facebook fs-4 me-2"></i>
                    <i class="bi bi-whatsapp fs-4 me-2"></i>
                    <i class="bi bi-instagram fs-4"></i>
                    </div>
                    </Col>
                </Row>
            </Container>
                <p className='text-center mt-4'>&copy; Todos los derechos reservados</p>
        </section>
    );
};

export default Footer;