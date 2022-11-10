import React from "react";
import "./Inicio.css";
import { Row, Col, Card, Button } from "react-bootstrap";

const Inicio = () => {
  return (
    <div className="mainSection">
      <div className=" text-light portada ">
        <div className="subPortada">
          <h1 className="display-3">Comidas Arabes</h1>
        </div>
      </div>
      <div className=" mb-5 container-fluid">
        <div className="container">
          <Row className="mx-auto menuCard">
            <Col md={4}>
              <Card style={{ width: "18rem" }} className="cardCirculo ms-5">
                <div className="imgCardP">
                  <Card.Img variant="top" src="" />
                </div>
                <Card.Body className="bodyCard">
                  <Card.Title> Sobre Nosotros</Card.Title>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }} className="cardCirculo ms-5">
                <div className="imgCardP">
                  <Card.Img variant="top" src="" />
                </div>
                <Card.Body className="bodyCard">
                  <Card.Title>Categorias</Card.Title>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }} className="cardCirculo ms-3">
                <div className="imgCardP">
                  <Card.Img variant="top" src="" />
                </div>
                <Card.Body className="bodyCard">
                  <Card.Title>Pedidos</Card.Title>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="portada2 container-fluid">
        <div className="divPortada2">
          <h1 className="display-1 text-light">Descubri nuestras especialidades</h1>
          <h2 className="display-1">Nombre</h2>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center text-dark display-3 my-5">Productos</h1>
        <div>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.serargentino.com/public/images/2020/02/comida-arabe-773x458.jpeg"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="portada2 container-fluid mt-5">
        <div className="divPortada2">
          <h1 className="display-1 text-light">Descubri nuestras especialidades</h1>
           <h2 className="tituloCel display-3">Haz tu pedido</h2>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
