import { createContext, useState } from 'react'

export const ContextoUsuario = createContext() //CONTEXTO QUE SE EXPORTA



const Usercontext = ({Children}) => {
  const [user, setUser] = useState("SIN USUARIOS")
  console.log(user)

  return (
    <ContextoUsuario.Provider value={{ user, setUser }}>
      {Children}
    </ContextoUsuario.Provider>
  )
}

export default Usercontext




/* MODO EN EL QUE SE EXPORTA Y SE LE PASAN LO QUE VAMOS A EXPORTAR , EN ESTE CASO USUARIOS:


const [user, setUser] = useState() ESTE ESTADO SE DISPONIBILIZA EN TODA NUESTRA APLICACION MEDIANTE-> (1) ADEMAS SI PODRA MODIFICAR EL ESTADO INICIAL DE USESTATE DESDE CUALQUIER PARTE DE NUESTRA APLICACION
  



return (
  <ContextoUsuario.Provider value={{user,setUser}}>    (1) EL PROVIDER Y EL VALUE  
  
  {Children}
  
  </ContextoUsuario.Provider>
)*/