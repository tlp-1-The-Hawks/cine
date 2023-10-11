import '../../assets/style/FormReserva.css'

export const FormReserva = () => {

  return (
    <div className="contenedor">
      <div className="formBoxes">
        <form name='formreserva'>
          <h2>Reserva de Asientos de Cine</h2>

        <div className="inputBox">
          <input
            type="text"
            placeholder='Nombre Completo'
          />
        </div>

        <div className="inputBox">
          <input
            type="tel"
            placeholder='Teléfono'
          />
        </div>

        <div className="inputBox">
          <label>Fecha y Hora</label>
          <input
            type="datetime-local"
          />
        </div>

        <div className="inputBox">
          <label>Número de Boletos</label>
          <input
            type="number"
          />
        </div>
        
        <div className='boton'>
            <input type="submit" className='boton' />
        </div>

      </form>
      </div>
    </div>
  )
}