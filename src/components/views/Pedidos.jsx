import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../css/app.css";
import { obtenerUsuario } from "../helpers/queriesUsuario";
import CardPedido from "./CardPedido";


const Pedidos = ({arregloPedidos, setArregloPedidos, usuario}) => {
  return (
    <div className="bajarFooter mt-5">
      <h1 className="display-4 text-center">Tus pedidos</h1>
      <Container>
        {arregloPedidos.map((item, indice) => (
          <CardPedido pedido={item} key={indice} setArregloPedidos={setArregloPedidos} usuario={usuario}></CardPedido>
        ))}
      </Container>
    </div>
  );
};

export default Pedidos;
