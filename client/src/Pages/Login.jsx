import React from 'react'
import { FormLogin } from '../components/Formularios/FormLogin.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider.jsx'

export const Login = () => {

  const { authState } = useContext(AuthContext)

  if (!authState.isLogged) return (<Navigate to={"/"} />)
  return (
    <FormLogin />
  )
}
