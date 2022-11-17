import { editarUsuario } from "./queriesUsuario";

export const editarCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    carrito.push(producto)
    usuario.carrito = carrito
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario))
}

export const borrarProductosCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    let carritoNuevo = carrito.filter((item)=>item.id != producto.id);
    usuario.carrito = carritoNuevo
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario));
}