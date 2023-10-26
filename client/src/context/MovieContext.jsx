import { useReducer } from "react";
import { movieReducer } from "../reducers/movieReducer.js";
import { createContext } from "react";

export const movieContext = createContext()
const init = () => {
    return JSON.parse(localStorage.getItem('movies')) || []
}
export const MovieCtxt = ({ children }) => {

    const [state, dispatch] = useReducer(movieReducer, [], init)

    return (

        <movieContext.Provider value={{
            dispatch,
            state
        }}>
            {children}
        </movieContext.Provider>
    )
}