import React, { useEffect, useState } from 'react';
import '../../assets/style/seat.css';
import { CustomFetch } from '../../api/customFetch';

export const Seat = ({ hall, cinemaId, setQuantity, handleQuantityChange, seatingOccupied, setSeatOccupiedId }) => {
  const [columnState, setColumnState] = useState(1);
  const [rowState, setRowState] = useState(1);
  const [replicaHall, setReplicaHall] = useState([]);
  const [selectedSeatings, setSelectedSeatings] = useState([]);
  const [seatOccupied, setSeatOccupied] = useState([])


  useEffect(() => {
    (
      async () => {
        const dataHall = await CustomFetch(`http://localhost:4000/api/hall/${hall}/${cinemaId}`, 'GET')
        setRowState(dataHall.row)
        setColumnState(dataHall.column)
        setReplicaHall(dataHall.seatings)
        setSeatOccupied(seatingOccupied)
      }
    )()
  }, [hall, seatingOccupied])

  const selectButton = (e, i, j) => {
    const buttonInfo = {
      id: e,
      row: i,
      column: j
    };
    const buttonIndex = selectedSeatings.findIndex(button =>
      button.row === i && button.column === j
    );

    if (buttonIndex !== -1) {
      const updatedButtons = [...selectedSeatings];
      updatedButtons.splice(buttonIndex, 1);
      setSelectedSeatings(updatedButtons);
      setQuantity(updatedButtons.length)
      handleQuantityChange(updatedButtons.length)
      const idSeats = updatedButtons.map(seat => {
        return seat.id
      });
      setSeatOccupiedId(idSeats.join("-"))
    } else {
      const newState = [...selectedSeatings, buttonInfo]
      setSelectedSeatings(newState)
      setQuantity(newState.length)
      handleQuantityChange(newState.length)
      const idSeats = newState.map(seat => {
        return seat.id
      });
      setSeatOccupiedId(idSeats.join("-"))
    }
  };


  const generateButtons = () => {
    const buttons = [];
    let id = 0;

    for (let i = 0; i < rowState; i++) {
      const row = [];
      for (let j = 0; j < columnState; j++) {

        const isButtonSelected = replicaHall.some(button =>
          button.row === i && button.column === j
        );
        const isSelectSeatings = selectedSeatings.some(button =>
          button.row === i && button.column === j
        );

        let idButton = 0
        let idSeatOcupped = 0

        seatOccupied.forEach(seat => {
          if (seat.row === i && seat.column === j) {
            idSeatOcupped = seat.id
          }
        })

        replicaHall.forEach(button => {
          if (button.row === i && button.column === j) {
            idButton = button.id
          }
        })

        row.push(
          seatOccupied.some(seat => seat.row === i && seat.column === j) ?
            <button className='seatingButton btn m-1 btn-responsive btn-primary text-danger' disabled>-</button> :
            isSelectSeatings ?
              <button
                key={`button-${i}-${j}`}
                onClick={(e) => selectButton(idButton, i, j)}
                className={`seatingButton btn m-1 btn-responsive btn-success`}
              >
                -
              </button> :
              isButtonSelected ?
                <button
                  key={`button-${i}-${j}`}
                  value={replicaHall[id].id}
                  onClick={(e) => selectButton(idButton, i, j)}
                  className={`seatingButton btn m-1 btn-responsive btn-danger`}
                >
                  -
                </button>
                : <button className='seatingButton btn m-1 btn-responsive btn-dark text-dark' disabled>-</button>
        );


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