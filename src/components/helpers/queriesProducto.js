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

export const obtenerProducto = async(id)=> {
    try{
        const respuesta = await fetch(URL+'/'+id);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch(error){
        return false;
    }
}
export const editarProducto = async (id, producto) =>{
    try {
        const respuesta = await fetch (URL+ '/' + id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta
    } catch (error) {
        return false;
    }
}