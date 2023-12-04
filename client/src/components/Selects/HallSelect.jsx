export const HallSelect = ({ formMovie, handleChange, hallState }) => {
    return (
      <div className="mt-3 col col-sm-12 col-md-6 mb-3">
        <div className="row">
          <label htmlFor="hall" className="form-label">
            Sala de emisión
          </label>
          <select
                   onChange={handleChange}
                   name='hallId'
                   value={formMovie.hallId}
                   id=''
                      >
                    <option  value='hall'>
                          seleccione una sala
                    </option>
                    {hallState.map((hall) => (
                    <option
                    name='hallId'
                    value={hall.id}
                    id={hall.id}
                    key={hall.id}
                      >
                       {hall.nr_hall}
                    </option>
                  ))}
            </select>
        </div>
      </div>
    );
  };
  
