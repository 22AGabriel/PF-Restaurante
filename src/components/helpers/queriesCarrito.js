import { editarUsuario } from "./queriesUsuario";

export const editarCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    carrito.push(producto)
    usuario.carrito = carrito
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario))
}




