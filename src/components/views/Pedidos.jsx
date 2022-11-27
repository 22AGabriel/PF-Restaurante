import { Container } from "react-bootstrap";
import "../../css/app.css";
import CardPedido from "./CardPedido";


const Pedidos = ({arregloPedidos, setArregloPedidos, usuario}) => {
  return (
      <Container className="bajarFooter my-5">
        <h1 className="display-4 text-center">Tus pedidos</h1>
        {arregloPedidos.length > 0?(
          <>
            {arregloPedidos.map((item, indice) => (
              <CardPedido pedido={item} key={indice} setArregloPedidos={setArregloPedidos} usuario={usuario}></CardPedido>
           ))}
          </>
        ) : (
          <>
            <div className="text-center my-5">
              <h4>Todavía no realizaste tu primer pedido</h4>
            </div>
          </>
        )}
      </Container>
  );
};

export default Pedidos;
