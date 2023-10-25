import { useReducer } from "react";
import { createContext } from "react";
import { userReducer } from "../reducers/userReducer.js";

export const UserContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
}

export const UserCtxt = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, [], init)

    // const handleSubmit = (user) => {
    //     dispatch({
    //         type: type.USER_ADD,
    //         payload: user
    //     })
    // }

    return (
        <UserContext.Provider value={{
            dispatch,
            state,
        }}>
            {children}
        </UserContext.Provider>
    )
}
