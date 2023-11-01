import React, { useEffect, useState } from 'react';

function R() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Realiza la solicitud HTTP utilizando fetch cuando el componente se monta
        fetch('http://localhost:4000/api/booking')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud no se completó correctamente');
                }
                return response.json(); // Si esperas una respuesta JSON
            })
            .then(data => {
                // Almacena los datos en el estado del componente
                setData(data);
            })
            .catch(error => {
                // Maneja errores y almacénalos en el estado del componente
                setError(error);
            });
    }, []); // El segundo argumento vacío asegura que la solicitud se realice solo una vez al montar el componente

    return (
        <div>
            <h1>Reserva de Boletos</h1>
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <p>Datos recibidos:</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default R;
