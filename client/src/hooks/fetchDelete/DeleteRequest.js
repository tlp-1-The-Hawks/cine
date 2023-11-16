export async function deleteRequest(id) {
    const response = await fetch(`http://localhost:4000/api/request-cine/${id}`, {
        method: 'DELETE'
    })

    return response
}