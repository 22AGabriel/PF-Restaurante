import { Routes, Route } from "react-router-dom";
import Pedidos from "../views/Pedidos";

const RutasUsuarios = ({usuarioLogueado}) => {
    return (
        <>
        <Routes>
        <Route exact path="/pedidos" element={<Pedidos usuarioLogueado={usuarioLogueado}></Pedidos>}/>
        </Routes>
        </>
    );
};

export default RutasUsuarios;