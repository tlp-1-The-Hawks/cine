import React from 'react'
import { FormLogin } from '../components/Formularios/FormLogin.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

export const Login = () => {

  const { isLogged } = useContext(AuthContext)

  if (isLogged) return (<Navigate to={"/"} />)
  return (
    <FormLogin />
  )
}
