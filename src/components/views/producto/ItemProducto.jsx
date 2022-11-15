import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, consultarProducto } from "../../helpers/queriesProducto";
import Swal from "sweetalert2";

const ItemProducto = ({producto, setProductos}) => {
    const borrarUnProducto = () => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
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
            cancelButtonText: "Cancelar!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              borrarProducto(producto.id).then((respuesta) => {
                if (respuesta.status === 200) {
                  consultarProducto().then((respuesta) => {
                    setProductos(respuesta);
                    swalWithBootstrapButtons.fire(
                      "Borrado!",
                      "Ha sido borrado con exito",
                      "success"
                    )
                  });
                } 
              });
            }
            else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelado",
                "Los cambios no fueron realizados",
                "error"
              );
            }
          });
      };
    return (
        <tr>
            <td>1</td>
            <td>Falafel</td>
            <td>$500</td>
            <td>Garbanzo, verdura en hoja y condimento especial</td>
            <td>Al plato</td>
            <td className="text-truncate w-url">https://images.pexels.com/photos/6275187/pexels-photo-6275187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
            <td>
                <div className="d-flex">
                    <Link to={"/administrar/editar"} className="me-1 btn border">
                        <i className="bi bi-pencil-square text-rojo4"></i>
                    </Link>
                    <Button className="bg-transparent border" onClick={borrarUnProducto}>
                        <i className="bi bi-trash text-rojo2"></i>
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProducto;