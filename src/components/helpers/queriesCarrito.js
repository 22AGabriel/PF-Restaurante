import { editarUsuario } from "./queriesUsuario";
export const borrarProductosCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    let carritoNuevo = carrito.filter((item)=>item.id !== producto.id);
    usuario.carrito = carritoNuevo
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario));
}

export const Suma = (carrito) => {
    let suma = 0;
    carrito.forEach((item) => {
      suma += item.precio;
    });
    return suma
};