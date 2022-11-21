const URL = process.env.REACT_APP_API_PEDIDOS;
const fecha = new Date();

export const crearPedido = async() => {
    let usuario = JSON.parse(localStorage.getItem("usuarioIniciado"))
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const year = fecha.getFullYear()
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
        return nuevoPedido
    } catch (error) {
        console.log(error)
        return false
    }
}