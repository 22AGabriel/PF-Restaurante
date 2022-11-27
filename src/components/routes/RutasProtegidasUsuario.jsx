import { Navigate } from "react-router-dom";


const RutasProtegidasUsuario = ({children, usuario}) => {
    if(usuario.perfil === 'Usuario'){
        return children;
    }else if(usuario.perfil === 'Administrador'){
        return <Navigate to={'/*'}></Navigate>
     }else{
         return <Navigate to={'/registro'}></Navigate>
     }
};

export default RutasProtegidasUsuario;