import React, { Children } from 'react'
import { useContext,createContext } from 'react'

 export const ContextoUsuario = createContext()



const USERCONTEXT = ({Children}) => {
  return (
    <ContextoUsuario.Provider>
    
    {Children}
    
    </ContextoUsuario.Provider>
  )
}

export default USERCONTEXT