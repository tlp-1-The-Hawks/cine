import React, { useState, useEffect } from 'react';

export const Codigo_Correo = ({ codigo }) => {
  const [codigoRecibido, setCodigoRecibido] = useState('');

  useEffect(() => {
    setCodigoRecibido(codigo);
  }, [codigo]);

  return (
    <div>
      <h2>Código Recibido</h2>
      {codigoRecibido ? (
        <div>
          <p>El código recibido es: {codigoRecibido}</p>
          <button onClick={() => {
            console.log('Código ingresado:', codigoRecibido);
            // Aquí podrías hacer cualquier otra acción que desees con el código recibido
          }}>
            Verificar Código
          </button>
        </div>
      ) : (
        <p>Aún no se ha recibido ningún código.</p>
      )}
    </div>
  );
};
