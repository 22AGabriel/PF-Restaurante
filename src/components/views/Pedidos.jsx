import { Container } from "react-bootstrap";
import "../../css/app.css";
import CardPedido from "./CardPedido";

const Pedidos = ({ usuarioLogueado }) => {
  return (
    <div className="bajarFooter mt-5">
      <h1 className="display-4 text-center">Tus pedidos</h1>
      <Container>
        {usuarioLogueado.pedidos.map((item, indice) => (
          <CardPedido pedido={item} key={indice}></CardPedido>
        ))}
      </Container>
    </div>
  );
};

export default Pedidos;
