import React, { useState, useEffect } from 'react';
import { Codigo_Correo } from './Codigo-Correo';

export const Logica_codigo = () => {
  const [codigoRecibido, setCodigoRecibido] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/codigo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'bresanovichaxel43@ejemplo.com' })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        // Verificar si data es un código válido (ejemplo: es un número de 6 dígitos)
        const esCodigoValido = /^\d{6}$/.test(data);

        if (esCodigoValido) {
          setCodigoRecibido(data);
        } else {
          throw new Error('El código recibido no es válido');
        }
      })
      .catch(error => {
        console.error('Error al obtener el código:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error en la interfaz
      });
  }, []);

  return (
    <div>
      <h1>Tu App</h1>
      {codigoRecibido ? (
        <div>
          <p>El código recibido es: {codigoRecibido}</p>
          {/* Puedes hacer más con el código recibido aquí si es necesario */}
        </div>
      ) : (
        <p>Aún no se ha recibido ningún código.</p>
      )}
      <Codigo_Correo codigo={codigoRecibido} />
    </div>
  );
};
