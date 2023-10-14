import '../../assets/style/FormReserva.css'
import { useState, useEffect } from 'react';
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movie, cinema } = params;


export const FormReserva = () => {
  const [info, setInfo] = useState({})
  const [price, setPrice] = useState("Cargando...");

  useEffect(() => {
    fetch(`http://localhost:4000/api/movies/${movie}/${cinema}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
        setPrice(data.cinemas[0].information[0].price)
      })
      .catch((error) => console.log(error));
  }, [])



  return (
    < div className="contenedor" >

      <div className="formBoxes">
        <form key={info.id} name='formreserva'>
          <h2>Reserva de Asientos de Cine</h2>

          <p>{info.hasOwnProperty("cinemas") ? info.cinemas[0].name : ""}</p>
          <p>{price}</p>
          <div className="inputBox">
            <label>Número de Boletos</label>
            <input
              type="number"
            />
          </div>

          <div className="inputBox">
            <label>Precio Final</label>
            <p>(Precio del cine)</p>
          </div>

          <div className='boton'>
            <input type="submit" className='boton' />
          </div>

        </form>
      </div>

    </div >
  )
}