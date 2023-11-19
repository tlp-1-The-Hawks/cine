import { Footer } from "../components/Footers/Footer.jsx"
import { Header } from "../components/Headers/Header.jsx"
import { HallsBox } from "../components/DirectorioMain/HallsBox.jsx"

import '../assets/style/Halls.css'
export const Halls = () => {
    return (
        <>
            <Header />
                <HallsBox />
            <Footer />
        </>
    )
}