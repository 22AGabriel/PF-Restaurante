import { Routes, Route } from "react-router-dom";
import Pedidos from "../views/Pedidos";
import Error404 from "../views/Error404";

const RutasUsuarios = ({arregloPedidos,usuario, setArregloPedidos}) => {
    return (
        <>
        <Routes>
        <Route exact path="/pedidos" element={<Pedidos arregloPedidos={arregloPedidos} setArregloPedidos={setArregloPedidos} usuario={usuario}></Pedidos>}/>
        <Route exact path="*" element={<Error404></Error404>}/>
        </Routes>
        </>
    );
};

export default RutasUsuarios;