import { Header } from "../components/Headers/Header.jsx";
import { Footer } from "../components/Footers/Footer.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";
import { RequestsBox } from "../components/DirectorioMain/RequestsBox.jsx";
import '../assets/style/ManageRequests.css'
import { useState, useEffect } from "react";
import { FindRequestCine } from "../hooks/datePreloads/FindRequests.js";

export const ManageRequests = () => {
    const { admin } = useContext(AuthContext)


    const [reqCine, setReqCine] = useState([])

    useEffect(() => {
        (
            async () => {
                const data = await FindRequestCine()

                setReqCine(data)
                if (!admin) return (<Navigate to={'/'} />)
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