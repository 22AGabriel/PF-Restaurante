const URL = process.env.REACT_APP_API_USUARIOS;

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

export const borrarUsuario = async(id)=>{
  try{
    const respuesta = await fetch(URL+'/'+id,{
      method: 'DELETE',
    });
    return respuesta;
  }catch(error){
    console.log(error)
    return false;
  }
}

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
    if(usuarioBuscado){
      if(usuarioBuscado.password === usuario.password){
        return usuarioBuscado
      } else {
        return false
      }
    } else {
      return false 
    }
  } catch (error) {
    console.log(error) 
    return false
  }
}