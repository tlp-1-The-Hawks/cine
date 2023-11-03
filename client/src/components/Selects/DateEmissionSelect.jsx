export const DateEmissionSelect = ({ handleChange, formMovie }) => {

    return (
        <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
            <div className="row">
                <label htmlFor="" className="form-label">
                    Fechas de emisión
                </label>
                <select onChange={handleChange} value={formMovie.date_issue} name="date_issue" id="">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
        </div >
    );
};
