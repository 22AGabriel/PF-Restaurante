import React from 'react';
import { Button } from 'react-bootstrap';

const ItemModal = ({producto}) => {
    return (
       <>
          <tr>
                <td>{producto.nombreProducto}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td><Button>Eliminar</Button></td>
              </tr>
       </>
    );
};

export default ItemModal;