const URL = process.env.REACT_APP_API_PRODUCTOS;

export const crearProducto = async(producto, token)=>{
    try {
        const nuevoProducto = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "x-token": token
            },
            body:JSON.stringify(producto)
        })
        return nuevoProducto
    } catch (error) {
        console.log(error)
        return false
    }
}

export const consultarProducto = async()=>{
    try{
        const nuevoProducto = await fetch(URL)
        const listaProductos = await nuevoProducto.json()
        return listaProductos;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarProducto = async(id, token)=>{
    try{
        const nuevoProducto = await fetch(URL+'/'+id,{
            method: 'DELETE',
            headers:{
                "x-token": token
            }
        });
        return nuevoProducto;
    }catch(error){
        console.log(error)
        return false;
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
export const editarProducto = async (id, producto, token) =>{
    try {
        const respuesta = await fetch (URL+ '/' + id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
                "x-token": token
            },
            body: JSON.stringify(producto)
        });
        return respuesta
    } catch (error) {
        return false;
    }
}

