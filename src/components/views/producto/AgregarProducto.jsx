import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { crearProducto } from "../../helpers/queriesProducto";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregarProducto = () => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const navigate = useNavigate();

  const onSubmit =(producto)=>{
    const usuario = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};
    producto.cantidad = 1
    crearProducto(producto, usuario.token).then((respuesta)=>{
      if(respuesta.status === 201){
        Swal.fire({
          color: "#fff",
          background: "#292929", 
          confirmButtonColor: "#c96752",
          title:"Producto creado",
          text: "el producto se creo correctamente",
          icon: "success"
        })
        reset()
        navigate("/administrar")
      }else{
        Swal.fire({
          color: "#fff",
          background: "#292929", 
          confirmButtonColor: "#c96752",
          title:"Error",
          text: "El producto no pudo ser creado",
          icon: "error"
        })
      }
    })
  }

  return (
    <Container>
      <div className=" my-5">
        <h1 className="text-center my-5">Agregar Producto</h1>
        <div className="shadow py-5 w-100 mx-auto">
          <Form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control 
              type="text"
               placeholder="Producto"
               {...register("nombreProducto",{
                 required:"es nombre del producto es obligatorio",
                 minLength: {
                  value: 5,
                  message: "la cantidad minima de caracteres es de 5"
                 },
                 maxLength:{
                  value:50,
                  message:"la cantidad maxima de caracteres es de 50"
                 }
               })}
               />
              <Form.Text className="text-danger">
                {errors.nombreProducto?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control 
              type="number"
               placeholder="$00"
               {...register("precio",{
                required:"es nombre del producto es obligatorio",
                 min:{
                  value:50,
                  message:"el precio minimo es de 50"
                 },
                 max:{
                  value:10000,
                  message:"el precio maximo es de 10000"
                 }
              })}
               />
              <Form.Text className="text-danger">
               {errors.precio?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Detalle</Form.Label>
              <Form.Control 
              type="text"
              as="textarea"
               placeholder="Detalle"
               {...register("detalle",{
                required:"el detalle del producto es obligatorio",
                 minLength: {
                  value: 25,
                  message:"el numero de caracteres minimo es de 25"
                 },
                 maxLength:{
                  value:300,
                  message:"el numero maximo de caracteres es de 300"
                 }
              })}
               />
              <Form.Text className="text-danger">
               {errors.detalle?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Imagen</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="URL"
              {...register("imagen",{
                required:"la url de la imagen es obligatoria",
                pathern:{
                  value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message:"debe ingresar una url valida"
                }
              })}
              />
              <Form.Text className="text-danger">
               {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
             
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Categoría</Form.Label>
              <Form.Select aria-label="Default select example"
               {...register("categoria",{
                required:"el campo de la categoria es obligatorio",
               })}>
                <option value="">Menu</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Al plato">Al plato</option>
                <option value="Pures">Pures</option>
                <option value="Dulces típicos">Dulces típicos</option>
                <option value="Agregados">Agregados</option>
                <option value="Bebida sin alcohol">Bebidas sin alcohol</option>
                <option value="Bebida con alcohol">Bebidas con alcohol</option>
              </Form.Select>
              <Form.Text className="text-danger">
              {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
            <Button className="borde-rojo3 bg-rojo2" type="submit">
              Crear
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default AgregarProducto;
