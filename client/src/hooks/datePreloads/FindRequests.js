export async function FindRequestCine() {
    const response = await fetch('http://localhost:4000/api/request-cine')

    const data = response.json()

    return data
} 