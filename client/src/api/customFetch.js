export const CustomFetch = async (url, req, payload,) => {
    if (req === 'GET') {
        const response = await fetch(url)

        const data = await response.json()
        return data
    }

    if (req === 'POST') {
        const response = await fetch(url, {
            method: req,
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await response.json()

        return data
    }

    if (req === 'DELETE') {
        const response = await fetch(url, {
            method: req
        })

        const data = await response.json()

        return data
    }

    if (req === 'PUT') {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        })
        // const data = await response.json()

        return response
    }
    if (req === 'TOKEN') {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': payload
            }
        })

        const data = await response.json()

        return data
    }

    if (req === 'MOVIE') {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        })


        return response
    }


    if (req === 'IMAGE') {
        const response = await fetch(url, {
            method: 'POST',
            body: payload,
        })


        return response
    }
}