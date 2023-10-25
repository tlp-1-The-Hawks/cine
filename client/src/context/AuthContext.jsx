import { createContext } from "react";
export const AuthContext = createContext();



export const AuthCtxt = ({ children }) => {

    const token = localStorage.getItem('token');

    return (
        <AuthContext.Provider
            value={{
                isLogged: token ? true : false
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}