import { useEffect, useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { FormRegisterCinema } from "../components/Formularios/FormRegisterCinema"
import { AuthContext } from "../context/AuthProvider.jsx"
import { CustomFetch } from "../api/customFetch.js"

export const RegisterCinema = () => {
    const { authState } = useContext(AuthContext)
    if (!authState.islogged) return (<Navigate to={"/"} />)

    const [province, setProvince] = useState([])

    useEffect(() => {
        (
            async () => {
                const data = await CustomFetch('http://localhost:4000/api/province', 'GET')
                setProvince(data)
            }
        )()
    }, [])
    return (
        <>
            <FormRegisterCinema
                province={province}
            />
        </>
    )

}