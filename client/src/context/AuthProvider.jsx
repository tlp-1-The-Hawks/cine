import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { types } from "../types/types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    
    const [authState, dispatch] = useReducer(authReducer, { islogged: false, rolCinema: false });


    const login = async (payload) => {
        dispatch({
            type: types.LOGIN,
            payload 
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{
            authState, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
