import '../../assets/style/FormReserva.css'
import { useState, useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import { Seat } from '../otros/seats';
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movieId, cinemaId } = params;
const token = localStorage.getItem('token');
export const FormReserva = () => {
  const [info, setInfo] = useState({})
  const [price, setPrice] = useState("Cargando...");
  const [quantity, setQuantity] = useState(1);
  const [idUser, setIdUser] = useState('')
  const [infoDate, setInfoDate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {

    fetch('http://localhost:4000/auth/user', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setIdUser(data.id)
      })
      .catch((error) => {
        console.log(error)
      })
  })


  useEffect(() => {
    fetch(`http://localhost:4000/api/movies/${movieId}/${cinemaId}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
        setInfoDate(data.information[0].date_emissions);
        setPrice(data.information[0].price)
      })
      .catch((error) => console.log(error));
  }, [])

  initMercadoPago("TEST-82fc2258-893e-4c80-b58f-2bcaa60fd171");


  const createPreference = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/api/create-order/${cinemaId}/${movieId}/${idUser}/${price}`, {
        description: "Boleto de cine",
        price: price,
        quantity: 1,
      });
      window.location.href = response.data.init_point
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    const newPrice = newQuantity * info.information[0].price;
    setPrice(newPrice);
  };

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
    }
  }, []);

  const handleDateClick = (dateId) => {
    const selectedDateInfo = infoDate.find((date) => date.id === dateId);
    setSelectedDate(selectedDateInfo);
    console.log('Horario seleccionado:', selectedDateInfo.date);
  };

  return (
    < div className="contenedorReserva" >

      <div className="formBoxReserva">
        <div className='container'>
          <h2>Reserva de Asientos de Cine</h2>
          <div className="row">
            <div className='col'>
              <div className='datos row d-flex justify-content-center'>
                <div className="inputBoxReserva">

                  <label>Número de Boletos</label>
                  <input
                    min={1}
                    max={50}
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </div>
                <div className="inputBoxReserva">
                  <p>
                    $ {price}
                  </p>
                </div>
              </div>
              <div>
                {
                  infoDate.map((date) => {
                    const formattedDate = new Date(date.date);
                    const month = formattedDate.toLocaleString('default', { month: 'short' });
                    const day = formattedDate.getDate();
                    const hour = formattedDate.getHours() + ':' + (formattedDate.getMinutes() < 10 ? '0' : '') + formattedDate.getMinutes();

                    return (
                      <div className="col">
                        <button
                          className="text-center text-white bg-dark p-1 rounded"
                          key={date.id}
                          id={date.id}
                          onClick={() => handleDateClick(date.id)}
                        >
                          {month} {day}, {hour}
                        </button>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <Seat info={info} />
            </div>
          </div>
        </div>
        <button className='botonReserva d-flex justify-content-center pt-2' onClick={() => createPreference()}>
          <div className='mt-1'>
            <box-icon name='cart-add' color='#ffffff' ></box-icon>
          </div>
          <p className='p-1'>Pagar Mi Boleto</p>
        </button>
      </div>
    </div>
  )
}