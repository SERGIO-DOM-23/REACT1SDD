import { createContext, useState } from "react"

export const Contextousuarios = createContext()




const Contextousers = ({ children }) => {

    const [users, setUsers] = useState()


    return (
        <Contextousuarios.Provider value={{ users, setUsers }}>
            {children}
        </Contextousuarios.Provider>
    )
}

export default Contextousers