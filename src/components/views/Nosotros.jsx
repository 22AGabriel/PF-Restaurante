import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "../../css/nosotros.css"
import JavierUncos from "../../img/JavierUncos.jpg";
import GabrielAzubel from "../../img/GabrielAzubel.jpg";
import JosefinaDaoua from "../../img/JosefinaDaoua.jpg";
import VictoriaPalacio from "../../img/VictoriaPalacio.jpg";
import { useForm } from "react-hook-form";

const Nosotros = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container className="my-5">
      <div className="text-center text-white mb-5">
        <h1 className="display-4">Acerca de nosotros</h1>
      </div>
      <Row className="my-5 d-flex justify-content-center">
        <Col md={6}>
          <Card className="bg-rojo2 text-center p-2 text-white mb-2">
            <Card.Title>Misión</Card.Title>
            <Card.Text>Te ofrecemos un menu donde podrás degustar y compartir con tu familia o amigos nuestras comidas típicas.</Card.Text>
          </Card>
        </Col>
        <Col md={6}>
        <Card className="bg-rojo2 text-center p-2 text-white mb-2">
            <Card.Title>Visión</Card.Title>
            <Card.Text>Somos un grupo de amigos y estudiantes cuyo objetivo es brindarte nuestras deliciosos platos.</Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="my-5 d-flex justify-content-center">
        <Col md={6} lg={3} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={JavierUncos} alt="Uncos Javier" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Uncos Javier</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="text-rojo2" href="https://github.com/javieruncos" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={VictoriaPalacio} alt="Palacio Fernandez Victoria" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Palacio Fernandez Victoria</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="text-rojo2" href="https://www.linkedin.com/in/victoria-palacio-fernandez-49612b254/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="text-rojo2" href="https://github.com/Vicopalacio" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={JosefinaDaoua} alt="Daoua Josefina"/>
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Daoua Josefina</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="text-rojo2" href="https://www.linkedin.com/in/josefina-d/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="text-rojo2" href="https://github.com/jochyd" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="Card border-0 bg-transparent">
            <Card.Img className="imgNosotros" src={GabrielAzubel} alt="Azubel Cristian Gabriel" />
            <Card.Body className="description text-center">
              <div className="text-white">
                <Card.Title>Azubel Cristian Gabriel</Card.Title>
                <Card.Text>Est. Programación FullStack</Card.Text>
                <Card.Link className="text-rojo2" href="https://www.linkedin.com/in/gabriel-azubel-796b36244" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </Card.Link>
                <Card.Link className="text-rojo2" href="https://github.com/22AGabriel" target="_blank">
                  <i className="bi bi-github"></i>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <article className="d-flex justify-content-center">
        <div className="my-5 bg-rojo2 rounded p-2 text-center text-white w-form">
        <div className="my-3">
          <h3>Nos interesa tu opinión.</h3>
        </div>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Row>
              <Col md={6} className="mb-2">
               <Form.Control type="text" className="bg-contacto bg-rojo2" placeholder="Nombre y apellido" {...register('Nombre', {required:'el nombre y apellido son obligatorios'})}></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Control type="email" className="bg-contacto bg-rojo2" placeholder="Email"{...register("email", {
                  required: 'el email es obligatorio',
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  },
                })}></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Control type="number" className="bg-contacto bg-rojo2" placeholder="Teléfono de contacto" {...register('telefono',{required: 'el telefono es obligatorio'})}></Form.Control>
              </Col>
              <Col md={6} className="mb-2">
               <Form.Select className="bg-contacto bg-rojo2" {...register ('motivo',{required: 'el motivo es obligatorio'})}>
                <option value="">Motivo de la consulta</option>
                <option value="Marketing">Marketing</option>
                <option value="Administración y Finanzas">Aministración y Finanzas</option>
                <option value="Sugerencias">Sugerencias</option>
               </Form.Select>
              </Col>
              <Col md={12} className="mb-2">
               <Form.Control as="textarea" className="bg-contacto bg-rojo2" placeholder="Mensaje" {...register("consulta",{
                required:'la consulta es obligatoria',
                 minLength: {
                  value: 25},
                 maxLength:{
                  value:300 }
              })}></Form.Control>
              </Col>
            </Row>
            <Form.Text className="text-danger">
                {errors.nombre?.message}      {errors.email?.message}
                {errors.telefono?.message}
                      {errors.motivo?.message}
                      {errors.consulta?.message}
              </Form.Text>          </Form.Group>
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
