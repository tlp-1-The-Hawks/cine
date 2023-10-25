import React, { useState } from 'react';
import '../../assets/style/seat.css';

export const Seat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const availableSeats = 50;
  const occupiedSeats = [];

  const selectSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Si el asiento ya está seleccionado, quítalo de la lista de asientos seleccionados
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else if (selectedSeats.length < 50) {
      // Si el asiento no está seleccionado y hay menos de 50 asientos seleccionados, agrégalo
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
      <div className='ejemplos'>        <p>Asientos : </p> <p>Disponible</p><button className='ejemplos1'>A1</button> <p>Ocupado</p> <button className='ejemplos2'>A1</button> <p>selecionado</p> <button className='ejemplos3'>A1</button></div>

      <div className="seating-plan">{seatingPlan}</div>
      <div id="selectedSeats">Asientos seleccionados: {selectedSeats.map(seatNumber => String.fromCharCode(65 + Math.floor((seatNumber - 1) / 10)) + (seatNumber % 10)).join(', ')}</div>
    </div>
  );
}