import { AddHall } from "./AddHall.jsx";
import { EditHall } from "./EditHall.jsx";
import { useState } from "react";

export const HallsBox = () => {
    const [buttonHall, setButtonHall] = useState(1);

    const handleButtonHall = (e) => {
        const buttonId = parseInt(e.target.id);
        setButtonHall(buttonId);
    };

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
                            {buttonHall === 1 ? <AddHall /> : <EditHall />}
                </div>
            </div>
        </>
    );
};
