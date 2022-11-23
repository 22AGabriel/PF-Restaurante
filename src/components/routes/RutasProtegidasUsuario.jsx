import { Navigate } from "react-router-dom";


const RutasProtegidasUsuario = ({children}) => {
    const token = JSON.parse(localStorage.getItem('usuarioIniciado')) || {};
    if(token.perfil === 'Usuario'){
        return children;
    }else if(token.perfil === 'Administrador'){
        return <Navigate to={'/*'}></Navigate>
     }else{
         return <Navigate to={'/registro'}></Navigate>
     }
};

export default RutasProtegidasUsuario;