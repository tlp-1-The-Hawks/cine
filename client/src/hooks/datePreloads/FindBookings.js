export async function FindBookings(movieId, cinemaId) {
    const response = await fetch(`http://localhost:4000/api/booking/${movieId}/${cinemaId}`)

    const data = await response.json()

    return data
}