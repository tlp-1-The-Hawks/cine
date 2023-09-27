import React from 'react';

export const Filtros = () => {
  return (
    <>
      <div class="container pt-4 pb-4">
        <div class="row">
          <div class="col-sm-4 col-lg-6">
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Ordenar por</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Popularidad</option>
                  <option>Fecha de lanzamiento</option>
                  <option>Alfabético</option>
                  <option>Calificación</option>
                </select>
              </div>
            </form>
          </div>
          <div class="col-sm-8 col-lg-6">
            <h1>Películas Estrenos</h1>
          </div>
        </div>
      </div>
    </>
  );
};
