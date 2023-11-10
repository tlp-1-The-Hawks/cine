
export async function FindCinemas() {
    const response = await fetch('http://localhost:4000/api/cinema')

    const data = await response.json();

    return data
}

