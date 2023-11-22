import React, { useEffect, useState } from 'react';
import '../../assets/style/seat.css';
import { CustomFetch } from '../../api/customFetch';

export const Seat = ({ hall, cinemaId }) => {
  const [columnState, setColumnState] = useState(1);
  const [rowState, setRowState] = useState(1);
  const [selectedButtons, setSelectedButtons] = useState([]);

  useEffect(() => {
    (
      async () => {
        const dataHall = await CustomFetch(`http://localhost:4000/api/hall/${hall}/${cinemaId}`, 'GET')
        setRowState(dataHall.row)
        setColumnState(dataHall.column) 
        setSelectedButtons(dataHall.seatings)
      }
    )()
  },[hall])

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
              isButtonSelected ? 
                <button
                    key={`button-${i}-${j}`}
                    onClick={(e) => selectButton(i, j)}
                    className={`seatingButton btn m-1 btn-responsive btn-danger`}
                >
                    {buttonValue}
                </button>
                : <button className='seatingButton btn m-1 btn-responsive btn-dark' disabled>-</button>
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
    <div className="text-center">
    {generateButtons()}
    </div>
  );
}
