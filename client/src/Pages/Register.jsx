import React from 'react';
import { FormRegister } from '../components/Formularios/FormRegister';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
export const Register = () => {
  // const { isLogged } = useContext(AuthContext)

  // if (isLogged) return (<Navigate to={'/'} />)
  return (
    <FormRegister />
  );
}
