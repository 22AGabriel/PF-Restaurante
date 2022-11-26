const URL = process.env.REACT_APP_API_USUARIOS;
const URLLogin = process.env.REACT_APP_API_USUARIOSlogin

export const crearUsuario = async (usuario) => {
  try {
    const nuevoUsuario = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return nuevoUsuario;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const consultarUsuario = async () => {
  try {
    const leerUsuario = await fetch(URL);
    const listaUsuario = await leerUsuario.json();
    return listaUsuario;
  } catch (error) {
    return false;
  }
};

export const obtenerUsuario = async (id) => {
  try {
    const obtenerUsuario = await fetch(URL + `/${id}`);
    const usuarioEncontrado = {
      dato: await obtenerUsuario.json(),
      status: obtenerUsuario.status,
    };
    return usuarioEncontrado;
  } catch (error) {
    return false;
  }
};

export const editarUsuario = async(id, usuario) => {
  try{
      const respuesta = await fetch(URL+`/${id}`, {
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(usuario)
      });
      return respuesta;
  }catch(error){
      console.log(error);
      return false;
  }
}

export const borrarUsuario = async(id, token)=>{
  try{
    const respuesta = await fetch(URL+'/'+id,{
      method: 'DELETE',
      headers:{
        "x-token": token
      }
    });
    return respuesta;
  }catch(error){
    console.log(error)
    return false;
  }
}

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const usuarioEncontrado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return usuarioEncontrado;
  } catch (error) {
    console.log(error) 
    return false
  }
}