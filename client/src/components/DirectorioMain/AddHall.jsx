import { useState, useEffect } from "react";
import { AddHallSubmit } from "../Submits/AddHallSubmit.jsx";
export const AddHall = () => {
    const [columnState, setColumnState] = useState(1);
    const [rowState, setRowState] = useState(1);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [formState, setFormState] = useState({
        nr_hall: "",
        capacity: "",
        column: "",
        row: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })

        if (e.target.name === "row") {
            setRowState(e.target.value);
        }
        if (e.target.name === "column") {
            setColumnState(e.target.value);
        }
    };

    useEffect(() => {

        const availableWidth = document.getElementById("buttons-container")?.clientWidth || 0;
        const calculatedButtonWidth = availableWidth / columnState;
        setButtonWidth(calculatedButtonWidth);
    }, [columnState]);

    const selectButton = (i, j) => {
        const buttonInfo = {
            row: i,
            column: j
        };

        const buttonIndex = selectedButtons.findIndex(button =>
            button.row === i && button.column === j
        );

        if (buttonIndex !== -1) {

            const updatedButtons = [...selectedButtons];
            updatedButtons.splice(buttonIndex, 1);
            setSelectedButtons(updatedButtons);
        } else {

            setSelectedButtons(prevSelected => [...prevSelected, buttonInfo]);

        }
    };

    const generateButtons = () => {
        const buttons = [];
        let buttonValue = 1;

        for (let i = 0; i < rowState; i++) {
            const row = [];
            for (let j = 0; j < columnState; j++) {
                const isButtonSelected = selectedButtons.some(button =>
                    button.row === i && button.column === j
                );
                row.push(
                    <button
                        key={`button-${i}-${j}`}
                        onClick={(e) => selectButton(i, j)}
                        className={`seatingButton btn m-1 btn-responsive ${isButtonSelected ? 'btn-danger' : 'btn-dark'}`}

                    >
                        {buttonValue}
                    </button>
                );
                buttonValue++;
            }
            buttons.push(
                <div key={`row-${i}`} className="d-flex justify-content-center">
                    {row}
                </div>
            );
        }

        return buttons;
    };


    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col">
                    <div className="row justify-content-center">
                        <label htmlFor="">Numero de sala</label>
                        <input onChange={handleChange} value={formState.nr_hall} name="nr_hall" className="rounded w-75" type="text" />
                    </div>
                </div>
                <div className="col">
                    <div className="row justify-content-center">
                        <label htmlFor="">Capacidad</label>
                        <input onChange={handleChange} value={formState.capacity} name="capacity" className="rounded w-75" type="text" />
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <div className="row justify-content-center">
                        <label htmlFor="">Indique las filas</label>
                        <input
                            name="row"
                            value={rowState}
                            onChange={handleChange}
                            className="rounded w-75"
                            type="text"
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="row justify-content-center">
                        <label htmlFor="">Indique las columnas</label>
                        <input
                            name="column"
                            value={columnState}
                            onChange={handleChange}
                            className="rounded w-75"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-5 text-center">

                {generateButtons()}
            </div>
            <AddHallSubmit
                request={'POST'}
                formState={formState}
                selectedButtons={selectedButtons}
            />


        </div>
    );
};