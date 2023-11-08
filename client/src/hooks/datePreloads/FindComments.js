export async function FindComments() {
    const response = await fetch('http://localhost:4000/api/comment')

    const data = await response.json()

    return data
}