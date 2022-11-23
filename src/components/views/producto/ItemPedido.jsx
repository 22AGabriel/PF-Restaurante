import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const ItemPedido = ({ pedido, setPedidos }) => {

  const [editarPedido, setEditarPedido] = useState('disabled');

  const actualizarPedido = ()=> {
    let estadoPedido = document.getElementById(`${pedido.id}`);
    if(editarPedido === 'disabled'){
      estadoPedido.disabled = false;
      setEditarPedido('noDisabled');
    }else{
      estadoPedido.disabled = true;
      setEditarPedido('disabled');
    }
  }

  return (
    <tr>
      <td>
        <ul>
          {pedido.productos.map((item,indice) => (
            <li item={item} key={indice}>
              {item.nombreProducto} / cantidad: {item.cantidad}
            </li>))}
        </ul>
      </td>
      <td>{pedido.usuario}</td>
      <td>{pedido.fecha}</td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select
              id={`${pedido.id}`}
              className="w-select"
              disabled 
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Realizado">Realizado</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </td>
      <td>
        <div className="d-flex">
          {editarPedido === 'disabled'? (
            <>
        <Button className="bg-transparent me-1 border" onClick={actualizarPedido}>
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
            </>
          ):(
            <>
        <Button className="bg-transparent me-1 border" onClick={actualizarPedido}>
        <i className="bi bi-check-square text-rojo4"></i>
        </Button>
            </>
          )}
        <Button className="bg-transparent border">
          <i className="bi bi-trash text-rojo2"></i>
        </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPedido;
