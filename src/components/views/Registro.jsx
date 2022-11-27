import React from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
        Swal.fire({
          color: "#fff",
          background: "#292929", 
          confirmButtonColor: "#c96752",
          title: `Bienvenido ${data.nombreUsuario}`,
          text: "¡ya puedes comprar libremente en nuestra pagina!",
          icon: "success"
      });
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
    const config ={
      SecureToken: 'faed1da8-899f-43f3-8468-567dff7e046f',
      To : data.email,
      From : "shamrestaurante2022@gmail.com",
      Subject : "Bienvenidos a Sham!",
      Body : `Te damos la bienvenida a nuestro Restaurante`,
    
    }
    if(window.Email){
      window.Email.send(config);
    }
  };


  return (
    <Container className="bajarFooter">
      <div className="text-center mt-3">
          <p>Si ya estás registrado <Button className="bg-rojo3 borde-rojo3"><Login></Login></Button></p>
          </div>
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
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 3,
                    message: "La cantidad mínima de caracteres es de 3",
                  },
                  maxLength: 30,
                  message: "La cantidad máxima de caracteres es de 30",
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
                  required: "El apellido es obligatorio",
                  minLength: {
                    value: 3,
                    message: "La cantidad mínima de caracteres es de 3",
                  },
                  maxLength: 30,
                  message: "La cantidad máxima de caracteres es de 30",
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
                  required: "El email debe ser válido",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="bg-contacto bg-rojo3"
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value:
                    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO contener un caracter especial.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
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
              <Form.Text className="text-danger">
                {errors.confirmPassword?.message}
              </Form.Text>
            </Form.Group>
            <Button className="bg-rojo2 border-white w-100" type="submit">
              Registrar
            </Button>
          </Form>
        </Row>
      </Card>
    </Container>
  );
};

export default Registro;
