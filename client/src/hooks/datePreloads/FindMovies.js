import { useState } from "react";

export function FindMovies() {
    const [movies, setMovies] = useState([]);

    fetch("http://localhost:4000/api/movies", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error('Error:', error));


    return movies
}