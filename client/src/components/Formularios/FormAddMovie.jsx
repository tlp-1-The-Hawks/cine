
import React, { useState } from 'react';
import "../../assets/style/FormMovie.css"


export const FormAddMovie = () => {

    return (
       
<div class="container mt-5">
  <div class="row">
      <div class="mx-auto">
          <form action="#" id="formNuevaReserva" class="rounded p-3">
            
            <div className='d-flex justify-content-center text-center'>
                     <h3 class="mb-3 text-center bg-primary text-light rounded p-2">Agrega tu película</h3>
            </div>
             
              <div class="row">
                  <div class="col col-md-6 col-sm-12 mb-3">
                      <label for="titulo" class="form-label">Titulo</label>
                      <input type="text" required="true" class="form-control" id="titulo" name="titulo"/>
                  </div>
                  <div class="col col-md-6 col-sm-12 mb-3">
                      <label for="director" class="form-label">Director</label>
                      <input type="text" required="true" class="form-control" id="director"
                          name="director"/>
                  </div>
              </div>

              <div class="row">
                  <div class="col col-sm-12 col-md-6 mb-3">
                      <label for="genre" class="form-label">Género</label>
                      <input type="text" required="true" class="form-control" id="genre"
                          name="genre"/>
                  </div>
                  <div class="col col-sm-12 col-md-6 mb-3">
                      <label htmlFor="">Duración</label>
                      <input type="time" required="true" class="form-control" id="duration"
                          name="duration"/>
                  </div>
              </div>
              <div class="row">
                <div class="col col-md-6 col-sm-12 mb-3">
                    <label for="actors" class="form-label">Actores</label>
                    <input type="text" required="true" class="form-control" id="actors"
                        name="actors"/>
                </div>
                <div class="col col-md-6 col-sm-12 mb-3">
                    <label for="Precio" class="form-label">Precio</label>
                    <input type="text" required="true" class="form-control" id="precio"
                        name="precio"/>
                </div>

            </div>
              <div class="row">
                  <div class="col col-sm-12 col-md-6 mb-3">
                      <label for="description" class="form-label">Descripción</label>
                      <input type="text" required="true" class="form-control" id="description"
                          name="description"/>
                  </div>
              </div>

              <div class="row d-flex align-items-center justify-content-end">
                  <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-2 mb-1">
                      <button type="submit" class="w-100 btn btn-sm btn-primary">Guardar</button>
                  </div>
                  <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-2 mb-1">
                      <a href="/" class="w-100 btn btn-sm btn-secondary">Cancelar</a>
                  </div>
              </div>
          </form>
      </div>
  </div>
</div>
      
    )
}


