import {Card, Container, Button, Breadcrumb} from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../helpers/queriesProducto";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editarUsuario } from "../helpers/queriesUsuario";
import "../../css/app.css";
import Swal from "sweetalert2";

const DetalleProducto = ({carrito, setCarrito, usuarioLogueado}) => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    color: "#fff",
    background: "#c96752",
    timer: 5000
  })

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      }
    });
  }, []);

  const editarCarrito = (producto) => {
    if(usuarioLogueado.perfil === "Usuario"){
      const existeProducto = usuarioLogueado.carrito.find(
        (item) => item._id === producto._id
      );
      if (existeProducto) {
        existeProducto.cantidad += 1;
      } else {
        setCarrito([...carrito, producto]);
        usuarioLogueado.carrito.push(producto);
      }
      editarUsuario(usuarioLogueado._id, usuarioLogueado);
      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
      })
    } else if(!usuarioLogueado.perfil){
      navigate("/registro")
    }
};

  return (
    <>
      <Container className="my-5 bajarFooter">
        <Breadcrumb>
          <Breadcrumb.Item><Link className="text-rojo2" to={"/"}>Inicio</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link className="text-rojo2" to={`/categoria/${producto.categoria}`}>{producto.categoria}</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>{producto.nombreProducto}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="text-center">
          <h1 className="display-4">{producto.nombreProducto}</h1>
        </div>
        <div className="my-3 d-flex flex-column detalleProductoDiv">
          <div className="divImgDetalle">
            <img className="w-100 rounded" src={producto.imagen} alt={producto.nombreProducto} />
          </div>
          <Card className="border-0">
            <Card.Body className="text-dark bg-rojo3 rounded">
              <div className="d-flex justify-content-between">
                <Card.Text>Precio: ${producto.precio}</Card.Text>
                <Button
                  className="bg-rojo2 text-dark borde-rojo3"
                  onClick={() => {
                    editarCarrito(producto);
                  }}
                >
                  {" "}
                  <i className="bi bi-cart-plus-fill"></i>
                </Button>
              </div>
              <hr />
              <Card.Text>Categoria: {producto.categoria}</Card.Text>
              <Card.Text>{producto.detalle}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default DetalleProducto;
