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

export const consultarProducto = async()=>{
    try{
        const nuevoProducto = await fetch(URL)
        const listaProductos = await nuevoProducto.json()
        console.log(listaProductos)
        return listaProductos;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarProducto = async(id)=>{
    try{
        const nuevoProducto = await fetch(URL+'/'+id,{
            method: 'DELETE',
        });
        return nuevoProducto;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const obtenerProducto = async(id)=> {
    try{
        const respuesta = await fetch(URL+`/${id}`);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch(error){
        console.log(error);
        return false;
    }
}

