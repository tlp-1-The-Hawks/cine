import { useState, useEffect } from 'react';
import { findHall } from '../../hooks/datePreloads/FindHall';

const obtenerHalls = async (cinemaId) => {
    const resp = await fetch(`http://localhost:4000/api/hall/${cinemaId}`)
    const data = await resp.json();
    return data;
}

export const HallSelect = ({ formMovie, cinemaId, handleChange }) => {

    const [hallState = [], setHallState] = useState([])

    console.log(hallState)

    useEffect(() => {

        if (hallState && hallState.length > 0) {
            return;
        }

        (
            async () => {
                const data = await obtenerHalls(cinemaId);
                console.log(data.halls)
                setHallState(data.halls)
            }

        )();

    }, [])

    return (
        <div className="mt-3 col col-sm-12 col-md-6 mb-3">
            <div className="row">
                <label htmlFor="hall" className="form-label">
                    Sala de emisión
                </label>

                <select
                    name="hallId"
                    id="hall" onChange={handleChange}
                    value={formMovie.hall}
                >
                    {
                        (hallState && hallState.length === 0)
                            ? <option defaultValue={"Valor"}>--No hay opciones--</option>
                            : hallState.map((hall) => (
                                <option key={hall.id} id={hall.id} value={hall.id}>
                                    {hall.nr_hall}
                                </option>
                            ))
                    }
                </select>
            </div>
        </div>
    );
};  
