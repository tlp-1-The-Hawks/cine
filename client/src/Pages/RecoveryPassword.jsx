import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider.jsx'
import { FormRecovery } from "../components/Formularios/FormRecovery.jsx"

export const RecoveryPassword = () => {
    const { authState } = useContext(AuthContext)


    return (

        <FormRecovery />
    )
}
