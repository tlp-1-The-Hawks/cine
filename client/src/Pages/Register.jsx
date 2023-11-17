import React from 'react';
import { FormRegister } from '../components/Formularios/FormRegister';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
export const Register = () => {
  const { authState } = useContext(AuthContext)

  if (authState.islogged) return (<Navigate to={'/'} />)
  return (
    <FormRegister />
  );
}
