export async function findMovieForCinema(cinemaId) {
    const response = await fetch(`http://localhost:4000/api/movies/${cinemaId}`)

    const data = await response.json()

    return data
}