export const HallSelect = ({ formMovie, handleChange, hallState, cinemaId }) => {



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
                    <option value={0}> Seleccione una sala</option>
                    {
                        (hallState && hallState.length === 0)
                            ? <option defaultValue={"Valor"}>--No hay opciones--</option>
                            :
                            hallState.map((hall) => (
                                <option key={hall.id} id={hall.id} value={hall.id}>

                                    {hall.nr_hall}
                                </option>
                            ))
                    }
                </select>
            </div>
        </div >
    );
};  
