import React from 'react';
import { Button } from 'react-bootstrap';
import { editarUsuario } from '../../helpers/queriesUsuario';

const ItemModal = ({producto, setCarrito}) => {
  
    const borrarProductosCarrito = (producto)=>{
      let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
      let carritoNuevo = usuario.carrito.filter((item)=>item.id !== producto.id);
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
                <td>
                  <Button variant='danger' onClick={()=>{borrarProductosCarrito(producto)}}>
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
       </>
    );
};

export default ItemModal;