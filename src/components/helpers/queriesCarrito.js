import { editarUsuario } from "./queriesUsuario";

export const editarCarrito = (producto)=>{
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    let carrito = usuario.carrito;
    const existe = carrito.some(producto=> producto.id === producto.id)

    if(existe){
        const prod = carrito.map((prod)=>{
            if(prod.id === producto.id){
                producto.cantidad++
            }
        })
    }
    carrito.push(producto)
    usuario.carrito = carrito
     editarUsuario(usuario.id,usuario)
     localStorage.setItem('usuarioIniciado', JSON.stringify(usuario))
    
}
