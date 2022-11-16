import { Button, Form, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {obtenerUsuario} from "../../helpers/queriesUsuario";

const ItemUsuario = ({setUsuarios, usuario}) => {

  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  
  useEffect(() => {
    obtenerUsuario(usuario.id).then((respuesta)=>{
      if(respuesta.status ===200){
        console.log(respuesta)
        setValue('estado', respuesta.dato.estado)
      }
    })
  }, [])

  const onSubmit = (datos)=>{
    console.log(datos)
  }

  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.perfil}</td>
      <td>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Select className="w-select" disabled {...register("estado",{
                require:"El campo de la categoria es obligatorio",
               })}>
                <option value="Activo">Activo</option>
                <option value="Suspendido">Suspendido</option>
            </Form.Select>
            <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
          </Form.Group>
        </Form>
      </td>
      <td>
      <div className="d-flex">
        <Button className="bg-transparent me-1 border">
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
        <Button className="bg-transparent border">
          <i className="bi bi-trash text-rojo2"></i>
        </Button>
      </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
