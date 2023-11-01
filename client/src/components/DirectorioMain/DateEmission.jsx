import Swal from "sweetalert2"

export const DateEmission = ({ handleChange, formMovie }) => {

    const addDateEmissions = (e) => {
        e.preventDefault()

        Swal.fire({
            title: 'Agrega las fechas de emisiones'
        })
    }
    return (
        <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
            <div className="row">
                <label htmlFor="" className="form-label">Fechas de emisión</label>
                {/* <input onChange={handleChange} value={formMovie.date_issue} type="datetime-local"
                    aria-label='' id="datetime" name="date_issue" /> */}

                <button className="btn" onClick={addDateEmissions}>Añadir fechas</button>

            </div>
        </div>
    )
}