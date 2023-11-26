import Swal from "sweetalert2"
export const CorreoSubmit = ({ formState }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const correoIngresado = formState.email;

    try {
      const response = await fetch('http://localhost:4000/api/cinema');
      const data = await response.json();

      if (Array.isArray(data)) {
        const correosEnDatos = data.map((cinema) => cinema.email);
        const correoExiste = correosEnDatos.includes(correoIngresado);

        if (correoExiste) {
          Swal.fire({
            title: 'Correo válido',
            text: 'El correo ingresado está en la lista de correos.',
            icon: 'success',
          }).then(() => {
            // Envía el correo electrónico
            enviarCorreo(correoIngresado); // Llama a la función que envía el correo
            // Redirige a la página deseada
            window.location.href = '/Codigo-Correo'; 
          });
        } else {
          Swal.fire({
            title: 'Correo inválido',
            text: 'El correo ingresado no está en la lista de correos.',
            icon: 'error',
          });
        }
      } else {
        console.error('La respuesta no es un array de datos.');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  // Función para enviar el correo electrónico
 // Dentro de la función enviarCorreo en tu componente CorreoSubmit
 const enviarCorreo = async (correo) => {
  try {
    const response = await fetch('http://localhost:4000/codigo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: correo,
        subject: 'Asunto del correo',
        message: 'Contenido del correo',
        // ... Otros datos necesarios para el correo
      }),
    });
    const responseData = await response.json();
    console.log(responseData);

    if (responseData && responseData.codigo) {
      // Redirige a la página deseada después de obtener el código
      window.location.href = '/Codigo-Correo';
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

  return (
    <div className='botonLogin'>
      <input type='submit' onClick={handleSubmit} className='botonLogin' value='Verificar correo' />
    </div>
  );
};