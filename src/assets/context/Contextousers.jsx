import { createContext, useState } from "react"

export const Contextousuarios = createContext()




const Contextousers = ({ children }) => {

    const [user, setUser] = useState("sin usuario")


    return (
        <Contextousuarios.Provider value={{ user, setUser }}>
            {children}
        </Contextousuarios.Provider>
    )
}

export default Contextousers