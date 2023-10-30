import { useReducer } from "react";
import { createContext } from "react";
import { userReducer } from "../reducers/userReducer.js";

export const UserContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
}

export const UserCtxt = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, [], init)


    return (
        <UserContext.Provider value={{
            dispatch,
            state,
        }}>
            {children}
        </UserContext.Provider>
    )
}
