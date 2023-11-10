export async function FindOneUser(token) {
    const response = await fetch("http://localhost:4000/auth/user", {
        method: 'GET',
        headers: {
            'authorization': token
        }
    })

    const data = await response.json();

    return data
}