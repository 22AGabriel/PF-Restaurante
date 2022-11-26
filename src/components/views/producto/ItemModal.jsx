import React from 'react';
import { Button } from 'react-bootstrap';
import { editarUsuario } from '../../helpers/queriesUsuario';

const ItemModal = ({producto, setCarrito, usuario}) => {
  
    const borrarProductosCarrito = (producto)=>{
      let carritoNuevo = usuario.carrito.filter((item)=>item._id !== producto._id);
      usuario.carrito = carritoNuevo
      setCarrito(usuario.carrito)
      editarUsuario(usuario._id,usuario)
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