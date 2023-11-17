

import Swal from "sweetalert2";


export const HallSelect = ({ formMovie, handleChange, hallState, cinemaId }) => {



    const addHall = async (e) => {
        e.preventDefault()

        Swal.fire({
            title: 'Formulario de ejemplo',
            html: `<form class="container" action="">
            <div class="row justify-content-center">
                <label htmlFor="">Ingresa el número de sala</label>
                <input id="nr_hall" class="w-50" type="text" />
            </div>
            <div class="row justify-content-center">
            <label htmlFor="">Ingresa la capacidad de la sala</label>
            <input id="capacity" class="w-50" type="text" />
        </div>
        </form>`,
            showCancelButton: true,
            confirmButtonText: 'Añadir',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row',
            preConfirm: async () => {
                const nr_hall = Swal.getPopup().querySelector('#nr_hall').value;
                const capacity = Swal.getPopup().querySelector('#capacity').value;

                const hall = {
                    nr_hall,
                    capacity
                }

                const response = await fetch(`http://localhost:4000/api/hall/${cinemaId}`, {
                    method: 'POST',
                    body: JSON.stringify(hall),
                    headers: {
                        'content-type': 'application/json'
                    }
                })

                const data = await response.json()

                console.log(data)
            }
        })
    }


    return (
        <div className="mt-3 col col-sm-12 col-md-6 mb-3">
            <div className="row">
                <label htmlFor="hall" className="form-label">
                    Sala de emisión
                </label>

                <select
                    name="hallId"
                    id="hall" onChange={handleChange}
                    value={formMovie.hallId}
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
                <div className="d-flex justify-content-center mt-1">
                    <button onClick={addHall} className="btn btn-outline-light">Añadir sala</button>
                </div>
            </div>
        </div>
    );
};  
