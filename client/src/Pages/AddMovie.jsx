import { FormAddMovie } from '../components/Formularios/FormAddMovie.jsx'
import { useEffect,useState } from 'react'
const token = localStorage.getItem('token');

export const AddMovie = () => {
    const [cinemaId, setCinemaId] = useState(null)
    const [genreState, setGenreState] = useState([])
    const [type_emission, setTypeEmission] = useState([])

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

        fetch('http://localhost:4000/api/genre', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                setGenreState(data)
            })
            .catch((error) => console.log(error))

        fetch('http://localhost:4000/api/type-emission', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setTypeEmission(data))
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            <FormAddMovie
            genreState={genreState}
            cinemaId={cinemaId}
            type_emission={type_emission}
            />
        </>
    )

}