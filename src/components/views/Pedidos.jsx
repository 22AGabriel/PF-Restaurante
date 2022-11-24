import { Container } from "react-bootstrap";
import "../../css/app.css";
import CardPedido from "./CardPedido";
import { useState } from "react";


const Pedidos = ({ usuarioLogueado }) => {
  const [arregloPedidos, setArregloPedidos] = useState(usuarioLogueado.pedidos)
  return (
    <div className="bajarFooter mt-5">
      <h1 className="display-4 text-center">Tus pedidos</h1>
      <Container>
        {arregloPedidos.map((item, indice) => (
          <CardPedido pedido={item} key={indice} setArregloPedidos={setArregloPedidos}></CardPedido>
        ))}
      </Container>
    </div>
  );
};

export default Pedidos;
