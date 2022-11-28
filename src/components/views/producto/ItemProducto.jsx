import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, consultarProducto} from "../../helpers/queriesProducto";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setProductos }) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioIniciado")) || {};

  const borrarUnProducto = () => {
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
        color: "#fff",
        background: "#292929",
        showCancelButton: true,
        confirmButtonText: "Borrar!",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          borrarProducto(producto._id).then((respuesta) => {
            if (respuesta.status === 200) {
              consultarProducto().then((respuesta) => {
                setProductos(respuesta);
                swalWithBootstrapButtons.fire({
                  color: "#fff",
                  background: "#292929",
                  confirmButtonColor: "#c96752",
                  title: "Borrado!",
                  text: "El producto fue borrado con exito",
                  icon: "success",
                });
              });
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            color: "#fff",
            background: "#292929",
            confirmButtonColor: "#c96752",
            title: "Cancelado",
            text: "Los cambios no fueron realizados",
            icon: "info",
          });
        }
      });
  };
  return (
    <tr>
      <td className="w-id text-truncate">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td className="w-detalle">{producto.detalle}</td>
      <td>{producto.categoria}</td>
      <td className="text-truncate w-url">{producto.imagen}</td>
      <td>
        <div className="d-flex">
          <Link
            to={`/administrar/editar/${producto._id}`}
            className="me-1 btn border"
          >
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
