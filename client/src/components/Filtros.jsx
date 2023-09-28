import React from 'react';

export const Filtros = () => {
  return (
    <>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-sm-4 col-lg-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Ordenar por</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Popularidad</option>
                  <option>Fecha de lanzamiento</option>
                  <option>Alfabético</option>
                  <option>Calificación</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-sm-8 col-lg-6">
            <h1>Películas Estrenos</h1>
          </div>
        </div>
      </div>
    </>
  );
};
