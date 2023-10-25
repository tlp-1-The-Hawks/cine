import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx'
import { useEffect, useState } from 'react'
const token = localStorage.getItem('token');

export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)


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
                    if (data.cinemaId === null) {
                        window.location.href = '/'
                    }
                    else {
                        return setCinemaId(data.cinemaId)
                    }
                })
                .catch((error) => console.log(error))
        } else {
            window.location.href = '/'
        }
    }, [])
    return (
        <>
            <FormAddMovie
                cinemaId={cinemaId}
            />
        </>
    )

}