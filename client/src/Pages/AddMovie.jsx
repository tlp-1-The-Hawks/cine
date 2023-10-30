import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
const token = localStorage.getItem('token');

export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)

    const { isLogged } = useContext(AuthContext)

    if (!isLogged) return (<Navigate to={"/"} />)

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
                if (data.cinemaId === null) return window.location.href = '/'
                else {
                    return setCinemaId(data.cinemaId)
                }
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
            />
        </>
    )

}