import { Navigate } from "react-router-dom";


const RutasProtegidasUsuario = ({children}) => {
    const token = JSON.parse(localStorage.getItem('usuarioIniciado')) || {};
    if(token.perfil === 'Usuario'){
        return children;
    }else{
        return <Navigate to={'/registro'}></Navigate>
    }
};

export default RutasProtegidasUsuario;