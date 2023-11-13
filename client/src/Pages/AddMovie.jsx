import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { findHall } from '../hooks/datePreloads/FindHall.js';
import { FindOneUser } from '../hooks/datePreloads/FindOneUser.js';
import { CustomFetch } from '../api/customFetch.js';

export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)
    const [hallState, setHallState] = useState([]);
    const { isLogged } = useContext(AuthContext)
    if (!isLogged) return (<Navigate to={"/"} />)
    const token = localStorage.getItem('token');

    useEffect(() => {
        (async () => {

            const user = await FindOneUser(token);

            if (user.cinemaId === null) {
                return window.location.href = '/';
            } else {
                setCinemaId(user.cinemaId);
                const halls = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'GET')
                // const halls = await findHall(user.cinemaId);
                setHallState(halls.halls);
                setCinemaId(user.cinemaId)
            }

        })();
    }, []);
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
                hallState={hallState}
            />
        </>
    )

}