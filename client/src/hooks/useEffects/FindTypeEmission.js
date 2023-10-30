import { useEffect, useState } from "react"
export function FindTypeEmission() {
    const [type_emission, setTypeEmission] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/api/type-emission', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setTypeEmission(data))
            .catch((error) => console.log(error))

    }, [])

    return type_emission
}