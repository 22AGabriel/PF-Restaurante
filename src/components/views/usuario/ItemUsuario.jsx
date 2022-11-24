import { Button, Form, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {borrarUsuario, consultarUsuario, editarUsuario, obtenerUsuario} from "../../helpers/queriesUsuario";
import Swal from "sweetalert2";

const ItemUsuario = ({setUsuarios, usuario}) => {
  const {register, setValue} = useForm();
  const [editar, setEditar] = useState("disabled")
  
  useEffect(() => {
    obtenerUsuario(usuario.id).then((respuesta)=>{
      if(respuesta.status === 200){
        setValue('estado', respuesta.dato.estado)
        setValue('perfil', respuesta.dato.perfil)
      }
    })
  }, [])
  
  const updateUser = () => {
    let estado = document.getElementById(`${usuario.id}estado`)
    let perfil = document.getElementById(`${usuario.id}perfil`)
    if(editar === "disabled"){
      estado.disabled = false
      perfil.disabled = false
      setEditar("noDisabled")
    } else {
      estado.disabled = true
      perfil.disabled = true
      setEditar("disabled")
      usuario.estado = estado.value
      usuario.perfil = perfil.value
      editarUsuario(usuario.id, usuario)
    }
  }
  
    const borrarUnUsuario = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn bg-rojo2 mx-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Estas Seguro?",
        text: "Los cambios seran irreversibles!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Borrar!",
        color: "#fff",
        background: "#292929",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          borrarUsuario(usuario.id).then((respuesta) => {
            if (respuesta.status === 200) {
              consultarUsuario().then((respuesta) => {
                setUsuarios(respuesta);
                swalWithBootstrapButtons.fire({
                  color: "#fff",
                  background: "#292929", 
                  confirmButtonColor: "#c96752",
                  title: "Borrado!",
                  text: "El usuario ha sido borrado con éxito",
                  icon: "success"
              })
              });
            } 
          });
        }
        else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            color: "#fff",
            background: "#292929", 
            confirmButtonColor: "#c96752",
            title: "Cancelado",
            text: "Los cambios no fueron realizados",
            icon: "info"
        });
        }
      });
}

  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select id={`${usuario.id}perfil`} className="w-select" disabled {...register("perfil",{
                required: true
               })}>
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select id={`${usuario.id}estado`} className="w-select" disabled {...register("estado",{
                required: true
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
        <Button className="bg-transparent me-1 border" onClick={updateUser}>
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
            </>
          ) : (
            <>
        <Button className="bg-transparent me-1 border" onClick={updateUser}>
        <i className="bi bi-check-square text-rojo4"></i>
        </Button>
            </>
          )
        }
        <Button className="bg-transparent border" onClick={borrarUnUsuario}>
          <i className="bi bi-trash text-rojo2"></i>
        </Button>
      </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
