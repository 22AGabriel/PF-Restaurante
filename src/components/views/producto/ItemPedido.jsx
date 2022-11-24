import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { obtenerPedido, editarPedido } from "../../helpers/queriesPedido";
import { useEffect } from "react";

const ItemPedido = ({ pedido, setPedidos }) => {
  const {register, setValue} = useForm();
  
  const [updatePedido, setUpdatePedido] = useState('disabled');

  useEffect(() => {
    obtenerPedido(pedido.id).then((respuesta)=>{
      if(respuesta.status === 200){
        setValue('estado', respuesta.dato.estado)
      }
    })
  }, [])
  

  const actualizarPedido = ()=> {
    let estadoPedido = document.getElementById(`${pedido.id}`);
    if(updatePedido === 'disabled'){
      estadoPedido.disabled = false;
      setUpdatePedido('noDisabled');
    }else{
      estadoPedido.disabled = true;
      setUpdatePedido('disabled');
      pedido.estado = estadoPedido.value;
      editarPedido(pedido.id, pedido)
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
              disabled {...register("estado",{
                required: true
              })}>
              <option value="Pendiente">Pendiente</option>
              <option value="Realizado">Realizado</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </td>
      <td>
        <div className="d-flex">
          {updatePedido === 'disabled'? (
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
