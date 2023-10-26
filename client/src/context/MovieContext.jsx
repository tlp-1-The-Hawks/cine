import { useReducer } from "react";
import { createContext } from "react";

export const movieContext = createContext()
const init = () => {
    return JSON.parse(localStorage.getItem('movies')) || []
}
export const MovieContext = ({children}) => {

    const [state, dispatch] = useReducer() 

    return (
        <movieContext.Provider>
            {children}
        </movieContext.Provider>
    )
}