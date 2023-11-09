// import { useState, useEffect } from "react";

export async function FindMovies() {

    const response = await fetch("http://localhost:4000/api/movies", {
        method: "GET",
    })


    const data = await response.json()

    return data

    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:4000/api/movies", {
    //         method: "GET",
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setMovies(data))
    //         .catch((error) => console.error('Error:', error));

    // }, [])


    // return movies
}