import React from 'react';
import { Button } from 'react-bootstrap';
import { borrarProductosCarrito } from '../../helpers/queriesCarrito';

const ItemModal = ({producto,setTotal,total}) => {

    return (
       <>
          <tr>
                <td>{producto.nombreProducto}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td><Button onClick={()=>{borrarProductosCarrito(producto)}}>Eliminar</Button></td>
              </tr>
       </>
    );
};

export default ItemModal;