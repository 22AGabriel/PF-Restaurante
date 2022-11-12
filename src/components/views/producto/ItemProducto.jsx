import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = () => {
    return (
        <tr>
            <td>1</td>
            <td>Falafel</td>
            <td>$500</td>
            <td>Garbanzo, verdura en hoja y condimento especial</td>
            <td>Al plato</td>
            <td className="text-truncate w-url">https://images.pexels.com/photos/6275187/pexels-photo-6275187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
            <td>
                <div className="d-flex">
                    <Link to={"/administrar/editar"} className="me-1 btn border">
                        <i className="bi bi-pencil-square text-rojo4"></i>
                    </Link>
                    <Button className="bg-transparent border">
                        <i className="bi bi-trash text-rojo2"></i>
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProducto;