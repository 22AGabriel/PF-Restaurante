import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem('usuarioIniciado')) || {};
    if(token.perfil === 'Administrador'){
        return children;
    }else if(token.perfil === 'Usuario'){
        return <Navigate to={'/*'}></Navigate>
    }else{
        return <Navigate to={'/registro'}></Navigate>
    }
};

export default RutasProtegidas;