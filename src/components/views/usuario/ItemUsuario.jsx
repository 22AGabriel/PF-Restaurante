import { Button, Form, } from "react-bootstrap";

const ItemUsuario = () => {
  return (
    <tr>
      <td>1</td>
      <td>JuanPe5</td>
      <td>juanperez1997@gmail.com</td>
      <td>Administrador</td>
      <td>
        <Form>
          <Form.Group>
            <Form.Select className="w-select" disabled>
                <option value="Activo">Activo</option>
                <option value="Suspendido">Suspendido</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </td>
      <td>
      <div className="d-flex">
        <Button className="bg-transparent me-1 border">
          <i className="bi bi-pencil-square text-rojo4"></i>
        </Button>
        <Button className="bg-transparent border">
          <i className="bi bi-trash text-rojo2"></i>
        </Button>
      </div>
      </td>
    </tr>
  );
};

export default ItemUsuario;
