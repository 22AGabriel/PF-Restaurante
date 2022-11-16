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
    console.log("creado ");
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
