import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from '../views/Login'
import { Link } from 'react-router-dom';
const  NavBar = () => {
  return (
    <>
    {[false].map((expand) => (
      <Navbar key={expand}  expand={expand} className="mb-3 bg-rojo2">
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img src="https://trello.com/1/cards/636987e596b2de018dfa4d9c/attachments/636bbf6a4fc778028d53781f/previews/636bbf6a4fc778028d537889/download/Logo_Sham.png" alt="sham logo" width="60" height='40' className='d-inline-block align-center' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className='bg-rojo3'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src="https://trello.com/1/cards/636987e596b2de018dfa4d9c/attachments/636bbf6ba9c237020ff18570/previews/636bbf6ba9c237020ff18576/download/Letra_S_Logo.png" alt="sham logo" width="60" height='40' className='d-inline-block aling-center' />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Buscar"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <Nav.Link to="/registrar" className={'nav-item nav-link align-self-center'}>Registrar</Nav.Link>
              <Nav.Link className='align-self-center'>
                <Login></Login>
              </Nav.Link>
              <Nav.Link to="/admin" className={'nav-item nav-link d-flex align-self-center'}>Administrador</Nav.Link>
              <Nav.Link to="/pedidos" className={'nav-item nav-link align-self-center'}><i class="bi bi-cart-plus-fill fs-4"></i></Nav.Link>
              <Button variant={'danger'} className='d-flex align-items-center justify-content-center'>Cerrar Sesión <i class="bi bi-toggle2-on fs-3 ms-2"></i></Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);
}

export default NavBar;