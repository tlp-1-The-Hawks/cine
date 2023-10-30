import React from 'react';
import Swal from 'sweetalert2'

export const LogoutButton = () => {
  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');

        // Mostrar una alerta
        Swal.fire({
          title: 'Cierre de Sesión',
          text: 'Has cerrado sesión exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        
        // Recargar la página
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      };

  return (
    <button onClick={handleLogout} className="btn bg-dark d-flex justify-content-center pt-2 text-white " > <box-icon name='log-out' type='solid' color='#fffcfc' ></box-icon>      Cerrar Sesión </button>
  );
};

export default LogoutButton;
