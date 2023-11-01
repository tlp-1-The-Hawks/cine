import Swal from "sweetalert2";

export const HallSelect = ({ formMovie, handleChange, hallState }) => {


    const AddHall = (e) => {
        e.preventDefault()

        Swal.fire({
            title: "Añade tu sala",
            html:

                `<form>
                    <div className="hallForm">
                        <label htmlFor="">Ingresa el numero de sala</label>  
                        <input type="number" id="login" class="swal2-input" placeholder="">
                        <label htmlFor="">Ingresa la capacidad de la sala</label> 
                        <input type="number" id="password" class="swal2-input" placeholder="">
                    </div>
                 </form>
                 `,
            confirmButtonText: 'Enviar',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row',
            customClass: {
                htmlContainer: 'hallForm'
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
                    <button onClick={AddHall} className="btn btn-outline-light">Añadir sala</button>
                </div>
            </div>
        </div>
    );
};  
