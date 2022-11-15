const URL = process.env.REACT_APP_API_PRODUCTOS;




export const crearProducto = async(producto)=>{
    try {
        const nuevoProducto = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(producto)
        })
        return nuevoProducto
    } catch (error) {
        console.log(error)
        return false
    }
}