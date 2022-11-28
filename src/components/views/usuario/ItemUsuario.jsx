import { Button, Form, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {borrarUsuario, consultarUsuario, editarUsuario, obtenerUsuario} from "../../helpers/queriesUsuario";
import Swal from "sweetalert2";

const ItemUsuario = ({setUsuarios, usuario}) => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};
  const {register, setValue} = useForm();
  const [editar, setEditar] = useState("disabled")
  
  useEffect(() => {
    obtenerUsuario(usuario._id).then((respuesta)=>{
      if(respuesta.status === 200){
        setValue('estado', respuesta.dato.estado)
        setValue('perfil', respuesta.dato.perfil)
      }
    })
  }, [])

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    color: "#fff",
    background: "#292929",
    timer: 5000
  })
  
  const updateUser = () => {
    let estado = document.getElementById(`${usuario._id}estado`)
    let perfil = document.getElementById(`${usuario._id}perfil`)
    if(editar === "disabled"){
      estado.disabled = false
      perfil.disabled = false
      setEditar("noDisabled")
    } else {
      estado.disabled = true
      perfil.disabled = true
      setEditar("disabled")
      if(usuario.estado !== estado.value || usuario.perfil !== perfil.value){
        usuario.estado = estado.value
        usuario.perfil = perfil.value
        editarUsuario(usuario._id, usuario)
        Toast.fire({
          icon: 'success',
          title: 'Usuario modificado'
        })
      }
    }
  }
  
    const borrarUnUsuario = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-danger mx-2",
        cancelButton: "btn bg-rojo2",
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
          borrarUsuario(usuario._id, usuarioLogueado.token).then((respuesta) => {
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
      <td className="w-id text-truncate">{usuario._id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select id={`${usuario._id}perfil`} className="w-select" disabled {...register("perfil",{
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
            <Form.Select id={`${usuario._id}estado`} className="w-select" disabled {...register("estado",{
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
