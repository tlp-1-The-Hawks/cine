import { useState } from "react"

export function FindGenre() {
    const [genreState, setGenreState] = useState([])


    fetch('http://localhost:4000/api/genre', {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((data) => {
            setGenreState(data)
        })
        .catch((error) => console.log(error))


    return genreState
}