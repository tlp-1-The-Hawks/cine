export async function AddComment(comment, userId, movieId) {

    const response = await fetch(`http://localhost:4000/api/comment/${movieId}/${userId}`,
        {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'content-type': 'application/json'
            }
        })

    const data = await response.json()

    return data
}
