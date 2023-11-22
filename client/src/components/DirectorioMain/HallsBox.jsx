import { CustomFetch } from "../../api/customFetch.js";
import { AddHall } from "./AddHall.jsx";
import { ManageHalls } from "./ManagaHalls.jsx";
import { useEffect, useState } from "react";
const token = localStorage.getItem('token')
export const HallsBox = () => {
    const [buttonHall, setButtonHall] = useState(1);
    const [halls, setHalls] = useState([])
    const [cinemaId, setCinemaId] = useState("")

    const handleButtonHall = (e) => {
        const buttonId = parseInt(e.target.id);
        setButtonHall(buttonId);
    };

    useEffect(() => {

        (
            async () => {
                const user = await CustomFetch('http://localhost:4000/auth/user', 'TOKEN', token)
                const dateHalls = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'GET')
                setHalls(dateHalls)
                setCinemaId(user.cinemaId)
            }
        )()
    }, [])

    return (
        <>
            <div className="hallsBox">
                <div className="container">
                    <div className="row text-center">
                        <div className="col mt-5">
                            <button onClick={handleButtonHall} id={1} className="hallbutton btn w-100 text-white">Agregar Sala</button>
                        </div>
                        <div className="col mt-5">
                            <button onClick={handleButtonHall} id={2} className="hallbutton btn w-100 text-white">Mis Salas</button>
                        </div>
                    </div>
                    {buttonHall === 1 ? <AddHall /> : <ManageHalls halls={halls} cinemaId={cinemaId} />}
                </div>
            </div>
        </>
    );
};
