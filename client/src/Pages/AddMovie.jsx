import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { findHall } from '../hooks/datePreloads/FindHall.js';
export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)
    const [hallState, setHallState] = useState([]);
    const { isLogged } = useContext(AuthContext)
    if (!isLogged) return (<Navigate to={"/"} />)
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:4000/auth/user', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.cinemaId === null) {
                    return window.location.href = '/';
                } else {
                    setCinemaId(data.cinemaId);
                    return data.cinemaId;
                }
            })
            .then(
                async (cinemaId) => {
                    const halls = await findHall(cinemaId)
                    setHallState(halls)
                }
            )
            .catch((error) => console.log(error));
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