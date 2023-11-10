

export async function findHall(cinemaId) {

    const response = await fetch(`http://localhost:4000/api/hall/${cinemaId}`, {
        method: 'GET'
    })

    const data = await response.json()

    return data
}