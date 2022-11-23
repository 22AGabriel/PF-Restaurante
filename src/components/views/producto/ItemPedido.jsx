import { Button, Form } from "react-bootstrap";


const ItemPedido = ({ pedido, setPedidos }) => {

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
              id={`${pedido.id}estado`}
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
        <Button className="bg-transparent border">
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
