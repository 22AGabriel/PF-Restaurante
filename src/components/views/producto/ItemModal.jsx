import React from 'react';
import { Button } from 'react-bootstrap';

const ItemModal = ({producto,setTotal,total}) => {
    // setTotal(total + producto.precio)
    const sumarPrecio = ()=>{
        setTotal(total + producto.precio)
    }

    // sumarPrecio()
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