import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarProducto, obtenerProducto } from "../../helpers/queriesProducto";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};
  const { id } = useParams();
  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  const navegacion = useNavigate();
  
  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if(respuesta.status === 200){
        setValue('nombreProducto', respuesta.dato.nombreProducto)
        setValue('precio', respuesta.dato.precio)
        setValue('detalle', respuesta.dato.detalle)
        setValue('imagen', respuesta.dato.imagen)
        setValue('categoria', respuesta.dato.categoria)
      }
    })
  }, []);
  
  const onSubmit = (datos) =>{
    editarProducto(id, datos, usuario.token).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire({
          color: "#fff",
          background: "#292929", 
          confirmButtonColor: "#c96752",
          title: 'Producto Modificado', 
          text: 
          'El producto fue modificado correctamente',
          icon:'success'
          });
        navegacion('/administrar')
      }else{
        Swal.fire({
          color: "#fff",
          background: "#292929", 
          confirmButtonColor: "#c96752",
          title:'Ocurrion un error', 
          text:'El producto no pudo ser modificado',
          icon:'error'
      })
      }
    });
  }

  return (
    <Container>
      <div className=" my-5">
        <h1 className="text-center my-5">Editar Producto</h1>
        <div className="shadow py-5 w-100 mx-auto">
          <Form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control 
              type="text"
               placeholder="Producto"
               {...register("nombreProducto",{
                 required:"es nombre del producto es obligatorio",
                 minLength:{
                  value:5,
                  message:"la cantidad minima de caracteres es de 5"
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
                  message:"el precio mínimo es de 50"
                 },
                 max:{
                  value:10000,
                  message:"el precio máximo es de 10000"
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
               placeholder="detalle"
               {...register("detalle",{
                required:"el detalle del producto es obligatorio",
                 minLength:{
                  value:5,
                  message:"el numero de caracteres minimo es de 5"
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
               })}
              >
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
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditarProducto;
