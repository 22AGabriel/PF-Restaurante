const URL = process.env.REACT_APP_API_USUARIOS




export const crearUsuario = async(usuario)=>{

    try {
        const nuevoUsuario = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        return nuevoUsuario
    } catch (error) {
        console.log(error)
        return false
    }

}