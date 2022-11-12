import { Button, Form } from "react-bootstrap";

const ItemPedido = () => {
  return (
    <tr>
      <td>Pedido</td>
      <td>JuanPe5</td>
      <td>dd/mm/aaa</td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select className="w-select" disabled>
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
