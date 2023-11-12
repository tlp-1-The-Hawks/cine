export async function AddRequestCine(requestCine)  {
    const response = await fetch('http://localhost:4000/api/request-cine',{
        method: 'POST',
        body: JSON.stringify(requestCine),
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await response.json()

    return data 
}