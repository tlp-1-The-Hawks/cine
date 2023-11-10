export async function FindMovies() {

    const response = await fetch("http://localhost:4000/api/movies", {
        method: "GET",
    })


    const data = await response.json()

    return data

}


export async function FindMovieByCinema(cinemaId) {
    const response = await fetch(`http://localhost:4000/api/movies/${cinemaId}`)

    const data = await response.json()

    return data
}