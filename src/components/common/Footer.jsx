import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../css/app.css';
import Logo_Sham from '../../img/Logo_Sham.png'


const Footer = () => {
    return (
        <section className='py-5 bg-footer text-light'>
            <Container>
                <Row>
                    <Col as={Link} to='/' md={4} className='d-flex flex-column align-items-center justify-content-center'>
                    <img src={Logo_Sham} alt='logo sham' className='w-50'></img>
                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center justify-content-center'>
                    <NavLink to={'/'} className='text-decoration-none text-white  my-2'>Inicio</NavLink>
                    <NavLink to={'/nosotros'} className='text-decoration-none text-white my-2'>Acerca de nosotros</NavLink>
                    <NavLink to={'/*'} className='text-decoration-none text-white my-2'>Preguntas frecuentes</NavLink>
                    <NavLink to={'/nosotros'} className='text-decoration-none text-white my-2'>Contactanos</NavLink>
                    </Col>
                    <Col md={4} className='d-flex flex-column align-items-center justify-content-center text-center'>
                    <p>Seguinos en nuestras redes</p>
                    <div>
                    <NavLink to={'/*'} className='text-decoration-none text-white'><i className="bi bi-facebook fs-4 me-2"></i></NavLink>
                    <NavLink to={'/*'} className='text-decoration-none text-white'><i className="bi bi-whatsapp fs-4 me-2"></i></NavLink>
                    <NavLink to={'/*'} className='text-decoration-none text-white'><i className="bi bi-instagram fs-4"></i></NavLink>
                    </div>
                    </Col>
                </Row>
            </Container>
                <p className='text-center mt-4'>&copy; Todos los derechos reservados</p>
        </section>
    );
};

export default Footer;