import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthCtxt = ({ children }) => {

    const token = localStorage.getItem('token');
    const [rol, setRol] = useState(false)

    useEffect(() => {
        if (token) {

            fetch('http://localhost:4000/auth/user', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': token
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.cinemaId != null) {
                        setRol(true)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })



    return (
        <AuthContext.Provider
            value={{
                isLogged: token ? true : false,
                rolCinema: rol
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}