import React, { useState } from 'react';

export const Codigo_Correo = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerification = async () => {
    try {
      const response = await fetch('http://localhost:4000/codigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'correo@ejemplo.com' }), // Reemplaza con el correo adecuado
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Código recibido del backend:', data.codigo); // Muestra el código en la consola
      setVerificationCode(data.codigo); // Establece el código recibido en el estado
    } catch (error) {
      console.error('Error fetching verification code:', error);
    }
  };

  return (
    <div>
      <h2>Código de Verificación</h2>
      <button onClick={handleVerification}>Obtener Código</button>
      {verificationCode && (
        <p>El código recibido es: {verificationCode}</p>
      )}
    </div>
  );
};
