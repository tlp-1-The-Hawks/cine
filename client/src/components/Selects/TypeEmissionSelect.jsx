import React from 'react';
import { FindTypeEmission } from '../../hooks/useEffects/FindTypeEmission.js';
export const TypeEmissionSelect = ({ formMovie, handleChange }) => {
  const type_emission = FindTypeEmission()

  return (
    <div className="mt-3 col col-sm-12 col-md-6 mb-3">
      <div className="row">
        <label htmlFor="type_emission" className="form-label">Tipo de emisión</label>
        <select
          name="type_emissionId"
          id="type_emission"
          onChange={handleChange}
          value={formMovie.type_emissionId}
        >
          {type_emission.map((emission) => (
            <option key={emission.id} value={emission.id}>
              {emission.type_emission}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

