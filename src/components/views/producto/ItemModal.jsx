import React from 'react';
import { Button } from 'react-bootstrap';
import { editarUsuario } from '../../helpers/queriesUsuario';

const ItemModal = ({producto,carrito,setCarrito}) => {
    const borrarProductosCarrito = (producto)=>{
      let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
      let carrito = usuario.carrito;
      let carritoNuevo = carrito.filter((item)=>item.id !== producto.id);
      usuario.carrito = carritoNuevo
      setCarrito(usuario.carrito)
      editarUsuario(usuario.id,usuario)
      localStorage.setItem('usuarioIniciado', JSON.stringify(usuario));
  }

    return (
       <>
          <tr>
                <td>{producto.nombreProducto}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td><Button onClick={()=>{borrarProductosCarrito(producto)}} className="ms-4"><i className="bi bi-trash"></i></Button></td>
              </tr>
       </>
    );
};

export default ItemModal;