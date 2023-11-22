import { Header } from "../components/Headers/Header.jsx"
import { Footer } from "../components/Footers/Footer.jsx"
import { useLocation } from "react-router-dom"
import { CustomFetch } from "../api/customFetch.js"
import { useEffect, useState } from "react"
import { EditHallBox } from "../components/DirectorioMain/EditHallBox.jsx"
import '../assets/style/EditHall.css'

export const EditHall = () => {
    const [hall, setHall] = useState([])
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const cinemaId = searchParams.get('cinema');
    const hallId = searchParams.get('hall');


    useEffect(() => {
        (
            async () => {
                const response = await CustomFetch(`http://localhost:4000/api/hall/${hallId}/${cinemaId}`, 'GET')
                setHall(response)
            }
        )()
    }, [])
    return (
        <>
            <Header />
            <EditHallBox
                hall={hall}
            />
            <Footer />
        </>
    )
}