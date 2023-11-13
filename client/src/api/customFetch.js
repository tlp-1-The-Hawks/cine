export const CustomFetch = async (url, req, payload,) => {
    if (req === 'GET') {
        const response = await fetch(url)

        const data = await response.json()

        return data
    }

    if (req === 'POST') {
        const response = await fetch(url, {
            method: req,
            body: JSON.stringify(payload)
        })

        const data = await response.json()

        return data
    }
}