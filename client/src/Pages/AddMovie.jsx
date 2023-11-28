import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CustomFetch } from '../api/customFetch.js';
import { AuthContext } from '../context/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';

export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)
    const [hallState, setHallState] = useState([]);

    const { authState } = useContext(AuthContext)


    if (!authState.cinema) return (<Navigate to={"/"} />)

    useEffect(() => {
        (async () => {

            const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', localStorage.getItem('token'));

            setCinemaId(user.cinemaId);
            const halls = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'GET')
            setHallState(halls);
            setCinemaId(user.cinemaId)
        })();
    }, []);
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
                hallState={hallState}
                request={'POST'}
            />
        </>
    )

}