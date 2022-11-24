import { Routes, Route } from "react-router-dom";
import Pedidos from "../views/Pedidos";
import Error404 from "../views/Error404";

const RutasUsuarios = ({usuarioLogueado}) => {
    return (
        <>
        <Routes>
        <Route exact path="/pedidos" element={<Pedidos usuarioLogueado={usuarioLogueado}></Pedidos>}/>
        <Route exact path="*" element={<Error404></Error404>}/>
        </Routes>
        </>
    );
};

export default RutasUsuarios;