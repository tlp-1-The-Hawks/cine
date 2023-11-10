import React, { useEffect, useState } from 'react';
import '../../assets/style/seat.css';

export const Seat = ({ info }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [capacity, setCapacity] = useState(0);
  const occupiedSeats = [];

  useEffect(() => {
    if (info && info.information && info.information.length > 0) {
      setCapacity(info.information[0].hall.capacity);
    }
  }, [info]);

  const selectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < capacity) { // Utiliza la capacidad en lugar de availableSeats
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const seatingPlan = [];

  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 10; col++) {
      const seatNumber = (row - 1) * 10 + col;
      const isOccupied = occupiedSeats.includes(seatNumber);
      const isSelected = selectedSeats.includes(seatNumber);
      const rowChar = String.fromCharCode(65 + Math.floor((seatNumber - 1) / 10));
      const seatLabel = rowChar + col;
      const seatClassName = `seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`;
      seatingPlan.push(
        <div key={seatNumber} className={seatClassName} onClick={() => selectSeat(seatNumber)}>
          {seatLabel}
        </div>
      );
    }
  }

  return (
    <div className="seats">
      <p>Asientos:</p>
      <div className='ejemplos container'>
        <div className="row">
          <div className="col-4 d-flex">
            <p>Disponible</p>
            <button className='ejemplos1'>A1</button>
          </div>
          <div className="col-4 d-flex">
            <p>Ocupado</p>
            <button className='ejemplos2'>A1</button>
          </div>
          <div className="col-4 d-flex">
            <p>Seleccionado</p>
            <button className='ejemplos3'>A1</button>
          </div>
        </div>
      </div>
      <div className="seating-plan">{seatingPlan}</div>
      <div id="selectedSeats">Asientos seleccionados: {selectedSeats.map(seatNumber => String.fromCharCode(65 + Math.floor((seatNumber - 1) / 10)) + (seatNumber % 10)).join(', ')}</div>
    </div>
  );
}
