import { useEffect, useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { FormRegisterCinema } from "../components/Formularios/FormRegisterCinema"
import { FindPrivinces } from "../hooks/datePreloads/FindProvinceAndLocation.js"
import { AuthContext } from "../context/AuthContext.jsx"

export const RegisterCinema = () => {
    const { isLogged } = useContext(AuthContext)
    if (!isLogged) return (<Navigate to={"/"} />)

    const [province, setProvince] = useState([])

    useEffect(() => {
        (
            async() => {
                const data = await FindPrivinces()
                setProvince(data)
            }
        )()
    },[])
    return(
        <>
             <FormRegisterCinema
             province={province}
             />
    </>
    )
    
}