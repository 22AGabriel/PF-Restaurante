import { editarUsuario } from "./queriesUsuario";
const URL = process.env.REACT_APP_API_PEDIDOS;
const fecha = new Date();
const dia = fecha.getDate()
const mes = fecha.getMonth()
const year = fecha.getFullYear()

export const crearPedido = async(usuario) => {
    let pedido = {}
    pedido.usuario = usuario.nombreUsuario;
    pedido.productos = usuario.carrito;
    pedido.estado = "Pendiente";
    pedido.fecha = `${dia}/${mes+1}/${year}`
    try {
        const nuevoPedido = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(pedido)
        })
        usuario.pedidos.unshift(pedido)
        usuario.carrito = []
        editarUsuario(usuario._id,usuario)
        return nuevoPedido
    } catch (error) {
        console.log(error)
        return false
    }
}

export const listarPedidos = async()=>{
    try{
        const respuesta = await fetch(URL)
        const listarPedidos = await respuesta.json();
        return listarPedidos;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const editarPedido = async (id, producto) =>{
    try{
        const respuesta = await fetch(URL+'/'+ id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto) 
        });
    
    return respuesta;
    }catch(error){
        return false;
    }
}
export const obtenerPedido = async (id) =>{
    try {
        const obtenerPedido = await fetch (URL + `/${id}` );
        const pedidoEncontrado = {
            dato : await obtenerPedido.json(),
            status: obtenerPedido.status,
        };
        return pedidoEncontrado;
    } catch (error) {
        return false;
    }
}
export const eliminarPedido = async (id)=>{
    try {
        const nuevoPedido = await fetch(URL +'/'+id,{
            method: 'DELETE',
        });
        return nuevoPedido;
    } catch (error) {
        return false;
    }
}


export const rehacerPedido =async (productos, usuario)=>{
    let pedido = {}
    pedido.usuario = usuario.nombreUsuario;
    pedido.productos = productos;
    pedido.estado = "Pendiente";
    pedido.fecha = `${dia}/${mes+1}/${year}`

    try {
        const nuevoPedido = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(pedido)
        })
        usuario.pedidos.unshift(pedido)
        usuario.carrito = []
        editarUsuario(usuario._id,usuario)
        return nuevoPedido
    } catch (error) {
        console.log(error)
        return false
    }
}