import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'
// import { env } from '../config/config';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    // Se comprueba si el usuario está conectado o no


    const {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    } = useSocket('http://localhost:4000');

    return (
        <SocketContext.Provider value={{
            socket,
            online,
            conectarSocket,
            desconectarSocket
        }}>
            {children}
        </SocketContext.Provider>
    )
}