import { Modal, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from "../helpers/queriesUsuario"
import "../../css/login.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {register, handleSubmit, formState: { errors }, setError, reset} = useForm();
  const navegate = useNavigate();

  const onSubmit = (usuario) => {
    login(usuario).then((respuesta) => {
      if(!respuesta){
        setError("password", {message: "Email o contraseña incorrecta, intenta nuevamente"})
      } else {
        reset()
        navegate("/")
        setShow(false)
        localStorage.setItem('usuarioIniciado', JSON.stringify(respuesta))
      }
    })
  };
  
  return (
    <>
      <NavLink
        className={"nav-item nav-link"}
        variant="dark"
        onClick={handleShow}
      >
        <i className="bi bi-box-arrow-in-right fs-4 text-white"></i>
      </NavLink>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-rojo2">
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-rojo2">
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="usuario@sham.com"
                className="bg-rojo2 bg-login"
                autoFocus
                {...register("email", {
                  required: "Email o contraseña incorrecta, intenta nuevamente",
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="****"
                className="bg-rojo2 bg-login"
                {...register("password", {
                  required: "Email o contraseña incorrecta, intenta nuevamente",
                })}
              />
              <Form.Text className="text-black">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
              <Button className="w-100" variant="danger" type="submit">
                Iniciar sesión
              </Button>
            <hr></hr>
          </Form>
          <Button className="w-100 mt-2" variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
