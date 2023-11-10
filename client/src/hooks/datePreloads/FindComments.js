export async function FindComments(movie) {

    const response = await fetch(`http://localhost:4000/api/comment/${movie}`)


    const data = await response.json()

    return data
} 