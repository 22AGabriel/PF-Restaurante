import { Button, Form, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {editarUsuario, obtenerUsuario} from "../../helpers/queriesUsuario";

const ItemUsuario = ({setUsuarios, usuario}) => {
  const {register, setValue} = useForm();
  const [editar, setEditar] = useState("disabled")
  
  useEffect(() => {
    obtenerUsuario(usuario.id).then((respuesta)=>{
      if(respuesta.status ===200){
        setValue('estado', respuesta.dato.estado)
      }
    })
  }, [])
  
  const editarEstado = () => {
    let estado = document.getElementById(`${usuario.id}`)
    if(editar === "disabled"){
      estado.disabled = false
      setEditar("noDisabled")
    } else {
      estado.disabled = true
      setEditar("disabled")
      usuario.estado = estado.value
      editarUsuario(usuario.id, usuario)
    }
  }

  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.perfil}</td>
      <td>
        <Form >
          <Form.Group>
            <Form.Select id={usuario.id} className="w-select" disabled {...register("estado",{
                require: true
               })}>
                <option value="Activo">Activo</option>
                <option value="Suspendido">Suspendido</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </td>
      <td>
      <div className="d-flex">
        {editar === "disabled"? (
            <>
        <Button className="bg-transparent me-1 border" onClick={editarEstado}>
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
            </>
          ) : (
        <Button className="bg-transparent me-1 border" onClick={editarEstado}>
        <i className="bi bi-check-square text-rojo4"></i>
        </Button>
          )
        }
        <Button className="bg-transparent border">
          <i className="bi bi-trash text-rojo2"></i>
        </Button>
      </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
