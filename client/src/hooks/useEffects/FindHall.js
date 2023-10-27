import { useEffect, useState } from "react";

export function Hall() {
    const { hallState, setHallState } = useState([]);
    useEffect(() => {
        fetch('http//localhost:4000/api/hall', {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => {
                setHallState(data);
            })
            .catch((error) => console.log(error))
    })

    return hallState
}