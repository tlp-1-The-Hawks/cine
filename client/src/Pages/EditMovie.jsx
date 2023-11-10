import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { findHall } from '../hooks/datePreloads/FindHall.js';
import { FormAddMovie } from '../components/Formularios/FormEditMovie.jsx';

export const EditMovie = () => {
    const [cinemaId, setCinemaId] = useState(null);
    const [hallState, setHallState] = useState([]);
    const { isLogged } = useContext(AuthContext);
    
    if (!isLogged) return <Navigate to={"/"} />;
    
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
        .then(async (cinemaId) => {
            const halls = await findHall(cinemaId);
            setHallState(halls);
        })
        .catch((error) => console.log(error));
    }, []);
    
    // Obtén los datos de la película que se va a editar
    const movieData = {
        // Aquí debes proporcionar los datos de la película que se desea editar
        title: "Título de la película",
        genreId: "1",
        description: "Descripción de la película",
        duration: "120", // Duración en minutos
        actors: "Actores de la película",
        director: "Director de la película",
        price: "10.00", // Precio de la película
        rutaImage: "ruta-de-imagen.jpg", // Ruta de la imagen de portada
        date_issue: "2023-11-03T12:00", // Fecha de emisión en formato ISO
        type_emissionId: "1",
        url_trailer: "URL del tráiler de la película",
        hallId: "1"
    };
    
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
                hallState={hallState}
                movieData={movieData} // Pasa los datos de la película a editar
            />
        </>
    );
};
