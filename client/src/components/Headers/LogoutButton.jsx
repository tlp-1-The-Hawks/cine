import React from 'react';

export const LogoutButton = () => {
  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');
    // Recargar la página
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} className="btn bg-dark text-white me-2">Cerrar Sesión</button>
  );
};

export default LogoutButton;
