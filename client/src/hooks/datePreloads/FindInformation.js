export async function FindInformation(movie, cinema){
    const response = await fetch(`http://localhost:4000/api/movies/${movie}/${cinema}`)

    const data = await response.json()

    return data
}