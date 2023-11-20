import { CustomFetch } from "../../api/customFetch.js";
import { AddHall } from "./AddHall.jsx";
import { EditHall } from "./EditHall.jsx";
import { useEffect, useState } from "react";
const token = localStorage.getItem('token')
export const HallsBox = () => {
    const [buttonHall, setButtonHall] = useState(1);
    const [halls, setHalls] = useState([])

    const handleButtonHall = (e) => {
        const buttonId = parseInt(e.target.id);
        setButtonHall(buttonId);
    };

    useEffect(() => {
        
        (
            async () => {
                const user = await CustomFetch('http://localhost:4000/auth/user', 'TOKEN',token )
                const dateHalls = await CustomFetch(`http://localhost:4000/api/hall/${user.cinemaId}`, 'GET')
                setHalls(dateHalls)
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
                            <button onClick={handleButtonHall} id={2} className="hallbutton btn w-100 text-white">Editar Sala</button>
                        </div>
                  </div>
                            {buttonHall === 1 ? <AddHall /> : <EditHall halls={halls} />}
                </div>
            </div>
        </>
    );
};
