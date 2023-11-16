import { Header } from "../components/Headers/Header.jsx";
import { Footer } from "../components/Footers/Footer.jsx";
import { RequestsBox } from "../components/DirectorioMain/RequestsBox.jsx";
import '../assets/style/ManageRequests.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomFetch } from "../api/customFetch.js";

export const ManageRequests = () => {
    const admin = localStorage.getItem('admin')
    if (!admin) return (navigate('/'))

    const navigate = useNavigate()

    const [reqCine, setReqCine] = useState([])

    useEffect(() => {


        (

            async () => {
                const data = await CustomFetch('http://localhost:4000/api/request-cine', 'GET')

                setReqCine(data)

            }
        )()

    }, [])


    return (
        <>
            <Header />
            <RequestsBox
                reqCine={reqCine}
            />
            <Footer />
        </>
    )
}