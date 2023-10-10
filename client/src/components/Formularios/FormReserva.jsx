import React from "react";
import '../../assets/style/FormReserva.css'

export const FormReserva = () => {

  return (
    <div className="contenedorReserva">
      <div className="formboxes">
        <form name="formreserva">

          <h2>Reserva</h2>

          <div className="inputBox">
            <input type="number"
            placeholder="Cantidad de personas" 
            name="" 
            id="" 
            />
          </div>

          <button id="checkout">
            Pagar
          </button>

        </form>
      </div>
    </div>
  )
}