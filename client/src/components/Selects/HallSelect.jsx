import { useState } from 'react';
import { findHall } from '../../hooks/datePreloads/FindHall.js';
export const HallSelect = ({ formMovie, cinemaId, setFormMovie }) => {
    const hallState = findHall(cinemaId);
    const [selectedHall, setSelectedHall] = useState('');

    const handleHallChange = (e) => {
        const newHallValue = e.target.value;
        setSelectedHall(newHallValue);
        setFormMovie({
            ...formMovie,
            hall: ""
        })
    };

    return (
        <div className="mt-3 col col-sm-12 col-md-6 mb-3">
            <div className="row">
                <label htmlFor="hall" className="form-label">
                    Sala de emisión
                </label>

                <select name="hall" id="hall" onChange={handleHallChange} value={selectedHall}>
                    {
                        hallState.map((hall) => (
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
