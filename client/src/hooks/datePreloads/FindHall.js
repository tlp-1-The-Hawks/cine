import { useState, useEffect } from "react";

export function findHall(cinemaId) {
    const [hallState, setHallState] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/hall/${cinemaId}`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => {
                setHallState(data.halls);
            })
            .catch((error) => console.log(error))

    }, [])



    return hallState
}