import React from "react";
import "../../Inicio.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="mainSection">
      <div className=" text-light portada ">
        <div className="subPortada">
          <h1 className="display-1">Shamy comidas Arabes</h1>
        </div>
      </div>
      <div className=" mb-5 container-fluid">
        <div className="container">
          <Row className="mx-auto menuCard">
            <Col md={4}>
              <Card className="cardCirculo ms-5">
                <div className="imgCardP">
                  <div>
                    <Button as={Link} to="/login" className="btnMenu">
                      <i class="bi bi-people-fill text-light display-4 iconMenu"></i>
                    </Button>
                  </div>
                  <Card.Img variant="top" src="" />
                </div>
                <Card.Body className="bodyCard text-light">
                  <Card.Title className="text-light my-3"> login</Card.Title>
                  <Link
                    variant="warning"
                    to="/nosotros"
                    className="btn btn-warning"
                  >
                    Ver mas
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="cardCirculo ms-5">
                <div className="imgCardP">
                  <div>
                    <Button as={Link} to="/nosotros" className="btnMenu">
                      <i class="bi bi-book text-light display-4 iconMenu"></i>
                    </Button>
                  </div>
                </div>
                <Card.Body className="bodyCard text-light">
                  <Card.Title className="text-light my-3">Nosotros</Card.Title>
                  <Link variant="warning" className="btn btn-warning">
                    Ver mas
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="cardCirculo ms-3">
                <div className="imgCardP">
                  <div>
                    <Button as={Link} className="btnMenu">
                      <i class="bi bi-cart text-light display-4 iconMenu"></i>
                    </Button>
                  </div>
                </div>
                <Card.Body className="bodyCard text-light">
                  <Card.Title className="text-light my-3">Pedidos</Card.Title>
                  <Link variant="warning" className="btn btn-warning">
                    Ver mas
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="portada2 ">
        <div className="divPortada2">
          <h1 className="display-2 text-light">
            Descubri nuestras especialidades
          </h1>
          <h2 className="display-1">Nombre</h2>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center text-light display-3 my-5">Productos</h1>
        <div>
          <Row>
            <Col md={4}>
              <Card className="mb-3 CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="danger">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3 CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="danger">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="danger">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="success">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="success">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="success">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="warning">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="warning">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="CardPP">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Precio: $500</Card.Text>
                  <Button variant="warning">Ver mas</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="portada2  mt-5">
        <div className="divPortada2">
          <h1 className="display-1 text-light">Los mejores Precios</h1>
          <h2 className="tituloCel display-3">Haz tu pedido</h2>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
