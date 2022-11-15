import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers/queriesProducto";

const EditarProducto = () => {
  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  const { id } = useParams();

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
  }, [])

  return (
    <Container>
      <div className=" my-5">
        <h1 className="text-center my-5">Editar Producto</h1>
        <div className="shadow py-5 w-100 mx-auto">
          <Form className="w-75 mx-auto" onSubmit={handleSubmit()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control 
              type="text"
               placeholder="Producto"
               {...register("nombreProducto",{
                 required:"es nombre del producto es obligatorio",
                 minLenght:{
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
               placeholder="00,00"
               {...register("precio",{
                required:"es nombre del producto es obligatorio",
                 min:{
                  value:100,
                  message:"el precio minimo es de 100"
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
               placeholder="detalle"
               {...register("detalle",{
                required:"el detalle del producto es obligatorio",
                 minLenght:{
                  value:25,
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
              <Form.Label>imagen</Form.Label>
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
              <Form.Label>Categoria</Form.Label>
              <Form.Select aria-label="Default select example"
               {...register("categoria",{
                require:"el campo de la categoria es obligatorio",
               })}
              >
                <option value="">Menu</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Al plato">Al plato</option>
                <option value="Pures">Pures</option>
                <option value="Agregados">Agregados</option>
                <option value="Bebida sin alcohol">Bebidas sin alcohol</option>
                <option value="Bebidas con alcohol">Bebidas con alcohol</option>
              </Form.Select>
              <Form.Text className="text-danger">
              {errors.categoria?.message}
              </Form.Text>
            </Form.Group>

            <Button variant="danger" type="submit">
              crear
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditarProducto;
