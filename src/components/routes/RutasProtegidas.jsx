import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children, usuario}) => {
    if(usuario.perfil === 'Administrador'){
        return children;
    }else if(usuario.perfil === 'Usuario'){
        return <Navigate to={'/*'}></Navigate>
    }else{
        return <Navigate to={'/registro'}></Navigate>
    }
};

export default RutasProtegidas;