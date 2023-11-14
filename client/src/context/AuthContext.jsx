import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthCtxt = ({ children }) => {

    const token = localStorage.getItem('token');
    const [rol, setRol] = useState(false)
    const [admin, setAdmin] = useState(false)



    return (
        <AuthContext.Provider
            value={{
                isLogged: token ? true : false,
                rolCinema: rol,
                admin: admin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}