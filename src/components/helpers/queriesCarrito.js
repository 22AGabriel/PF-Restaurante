import { editarUsuario } from "./queriesUsuario";

export const editarCarrito = (producto) => {
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"));
    const existeProducto = usuario.carrito.find((item)=>item.id === producto.id)
    if(existeProducto){
        existeProducto.cantidad += 1
        existeProducto.precio = existeProducto.cantidad * producto.precio
    }else{
        usuario.carrito.push(producto)
    }
   
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario))
}

export const borrarProductosCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    let carritoNuevo = carrito.filter((item)=>item.id !== producto.id);
    usuario.carrito = carritoNuevo
    editarUsuario(usuario.id,usuario)
    localStorage.setItem('usuarioIniciado', JSON.stringify(usuario));
}