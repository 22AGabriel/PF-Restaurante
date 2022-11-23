import React from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUsuario } from "../helpers/queriesUsuario";
import Login from "../views/Login";


const Registro = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    delete data.confirmPassword;
    data.carrito = [];
    data.pedidos = [];
    data.perfil = "Usuario";
    data.estado = "Activo";
    crearUsuario(data).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          `Bienvenido ${data.nombreUsuario}`,
          "¡ya puedes comprar libremente en nuestra pagina!",
          "success"
        );
        localStorage.setItem('usuarioIniciado', JSON.stringify(respuesta))
        setUsuarioLogueado(respuesta);
        reset();
        navigate("/");
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Inténtelo nuevamente en unos minutos",
          "error"
        );
      }
    });
    console.log(data);
  };

  return (
    <Container className="bajarFooter">
      <div className="text-center my-5">
        <h1 className="display-4">Registrarse</h1>
      </div>
      <Card className="p-3 bg-rojo3">
        <Row>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="text"
                placeholder="Ej: Juan Martin"
                {...register("nombreUsuario", {
                  required: "el nombre de usuario es obligatoria",
                  minLength: {
                    value: 3,
                    message: "la cantidad minima de caracteres es de 3",
                  },
                  maxLength: 30,
                  message: "la cantidad maxima de caracteres es de 30",
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="text"
                placeholder="Ej: Ponce"
                {...register("apellidoUsuario", {
                  required: "el apellido es obligatoria",
                  minLength: {
                    value: 3,
                    message: "la cantidad minima de caracteres es de 3",
                  },
                  maxLength: 30,
                  message: "la cantidad maxima de caracteres es de 30",
                })}
              />
              <Form.Text className="text-danger">
                {errors.apellidoUsuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="email"
                placeholder="Ej: comida@gmail.com"
                {...register("email", {
                  required: "el email debe ser valido",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  },
                })}
              />
              <Form.Text>{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "la contraseña es obligatoria",
                  pattern: {
                    value:
                    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO contener un caracter especial.",
                  },
                })}
              />
              <Form.Text>{errors.password?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="password"
                placeholder="Ingrese nuevamente la contraseña"
                {...register("confirmPassword", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO contener un caracter especial.",
                  },
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
              />
              <Form.Text>{errors.confirmPassword?.message}</Form.Text>
            </Form.Group>
            <Button className="bg-rojo2 border-white w-100" type="submit">
              Registrar
            </Button>
          </Form>
          <div className="text-center mt-4">
          <h5>Si ya estas registrado <Button variant="success"><Login></Login></Button></h5>
          </div>
        </Row>
      </Card>
    </Container>
  );
};

export default Registro;
