import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "../../css/nosotros.css"
import JavierUncos from "../../img/JavierUncos.jpg";
import GabrielAzubel from "../../img/GabrielAzubel.jpg";
import LopezNazarena from "../../img/LopezNazarena.jpg";
import JosefinaDaoua from "../../img/JosefinaDaoua.jpg";
import VictoriaPalacio from "../../img/VictoriaPalacio.jpg";

const Nosotros = () => {
  return (
    <Container className="my-5">
      <div className="text-center text-white mb-5">
        <h1 className="display-4">Acerca de nosotros</h1>
      </div>
      <Row className="my-5 d-flex justify-content-center">
        <Col md={6}>
          <Card className="card-fondo text-center p-2 text-white mb-2">
            <Card.Title>Misión</Card.Title>
            <Card.Text>Te ofrecemos un menu donde podrás degustar y compartir con tu familia o amigos nuestras comidas típicas.</Card.Text>
          </Card>
        </Col>
        <Col md={6}>
        <Card className="card-fondo text-center p-2 text-white mb-2">
            <Card.Title>Visión</Card.Title>
            <Card.Text>Somos un grupo de amigos y estudiantes cuyo objetivo es brindarte nuestras deliciosos platos.</Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="my-5 d-flex justify-content-center">
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={JavierUncos} alt="Uncos Javier" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Uncos Javier</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="redes" href="https://github.com/javieruncos" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={LopezNazarena} alt="Lopez Nazarena" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Lopez Nazarena</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="redes" href="https://www.linkedin.com/in/nazarena-lopez-1087a921a/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="redes" href="https://github.com/LopezNazarena" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={VictoriaPalacio} alt="Palacio Fernandez Victoria" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Palacio Fernandez Victoria</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="redes" href="https://www.linkedin.com/in/victoria-palacio-fernandez-49612b254/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="redes" href="https://github.com/Vicopalacio" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={JosefinaDaoua} alt="Daoua Josefina"/>
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Daoua Josefina</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="redes" href="https://www.linkedin.com/in/josefina-d/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="redes" href="https://github.com/jochyd" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4} lg={2} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={GabrielAzubel} alt="Azubel Cristian Gabriel" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Azubel Cristian Gabriel</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="redes" href="https://www.linkedin.com/in/gabriel-azubel-796b36244" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="redes" href="https://github.com/22AGabriel" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <article className="d-flex justify-content-center">
        <div className="my-5 card-fondo rounded p-2 text-center text-white w-form">
        <div className="my-3">
          <h3>Nos interesa tu opinión.</h3>
        </div>
        <Form>
          <Form.Group>
            <Row>
              <Col md={6} className="mb-2">
               <Form.Control type="text" className="bg-contacto" placeholder="Nombre y apellido"></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Control type="email" className="bg-contacto" placeholder="Email"></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Control type="number" className="bg-contacto" placeholder="Teléfono de contacto"></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Select className="bg-contacto">
                <option value="">Motivo de la consulta</option>
                <option value="Marketing">Marketing</option>
                <option value="Administración y Finanzas">Aministración y Finanzas</option>
                <option value="Sugerencias">Sugerencias</option>
               </Form.Select>
              </Col>
              <Col md={12} className="mb-2">
               <Form.Control as="textarea" className="bg-contacto" placeholder="Mensaje"></Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <div className="text-center">
          <Button type="submit" variant="dark" className="w-100">Enviar</Button>
          </div>
        </Form>
        </div>
      </article>
    </Container>
  );
};

export default Nosotros;
