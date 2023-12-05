import '../../assets/style/FormReserva.css';
import { useState, useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import { Seat } from '../otros/seats';
import { useLocation } from 'react-router-dom';
import { CustomFetch } from '../../api/customFetch';

export const FormReserva = () => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [seatOccupiedId, setSeatOccupiedId] = useState("")
  const movieId = searchParams.get('movieId');
  const cinemaId = searchParams.get('cinemaId');
  const [hall, setHall] = useState("")
  const [info, setInfo] = useState({})
  const [price, setPrice] = useState("Cargando...");
  const [quantity, setQuantity] = useState(1);
  const [idUser, setIdUser] = useState('');
  const [infoDate, setInfoDate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [seatingOccupied, setSeatingOccupied] = useState([])
  const [hallSeating, setHallSeating] = useState(0)
  const [seatingSelect, setSeatingSelect] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIdUser(data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    (
      async () => {
        const response = await CustomFetch(`http://localhost:4000/api/movies/${movieId}/${cinemaId}`, 'GET')

        setInfo(response);
        setInfoDate(response.information[0].date_emissions);
        setPrice(response.information[0].price)
        setHall(response.information[0].hallId)
        setHallSeating(response.information[0].hall.column * response.information[0].hall.row)
        const dataSeatings = await CustomFetch(`http://localhost:4000/api/seating/${response.information[0].date_emissions[0].id}`,
          'GET')
        setSeatingOccupied(dataSeatings)
      }
    )()
  }, []);

  initMercadoPago('TEST-82fc2258-893e-4c80-b58f-2bcaa60fd171');

  const createPreference = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/create-order/${cinemaId}/${movieId}/${idUser}/${price}/${selectedDate}`,
        {
          description: 'Boleto de cine',
          price: price,
          quantity: 1,
          seatOccupiedId: seatOccupiedId
        }
      );
      window.location.href = response.data.init_point;
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (data) => {
    const newQuantity = parseInt(data, 10);
    setQuantity(newQuantity);
    const newPrice = newQuantity * info.information[0].price;
    setPrice(newPrice);
  };

  const handleDateClick = async (dateId) => {
    const selectedDateInfo = infoDate.find((date) => date.id === dateId);
    setSelectedDate(selectedDateInfo.id);
    setSelectedButton(dateId);
    const dataSeatings = await CustomFetch(`http://localhost:4000/api/seating/${dateId}`,
      'GET')
    setSeatingOccupied(dataSeatings)

  };

  useEffect(() => {
    if (infoDate.length > 0) {
      const defaultDateInfo = infoDate[0];
      setSelectedDate(defaultDateInfo.id);
      setSelectedButton(defaultDateInfo.id);
    }
  }, [infoDate]);


  return (
    <div className="contenedorReserva d-flex justify-content-center" >
      <div className="formBoxReserva">
        <div className="container">
          <h2>Reserva de Asientos de Cine</h2>
          <div className="row">
            <div className="col-12">
              <div className="datos row d-flex justify-content-center">
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
                  <p defaultValue={0}>${price}</p>
                </div>
              </div>

            </div>
            <div className='col  mb-1'>
              <div className='text-center'>
                {infoDate.map((date) => {
                  const formattedDate = new Date(date.date);
                  const month = formattedDate.toLocaleString('default', { month: 'short' });
                  const day = formattedDate.getDate();
                  const hour =
                    formattedDate.getHours() +
                    ':' +
                    formattedDate.getMinutes();

                  return (

                    <button
                      key={date.id}
                      className={` text-white ms-1 me-1 rounded ${selectedButton === date.id ? 'selectedButton' : 'bg-dark'
                        }`}
                      onClick={() => handleDateClick(date.id)}
                    >
                      {month} {day} {hour}
                    </button>

                  );
                })}
              </div>
              <p className='text-white text-center'>Reservas: {seatingOccupied.length}/{hallSeating}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-md-2 col-sm-12">
              <div className="row">
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <p className='text-white'>Asientos ocupados:</p>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <button className='btn btn-primary text-danger m-4' disabled>-</button>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <p className='text-white'>Asientos disponibles:</p>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <button className='btn  btn-danger m-4' disabled>-</button>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <p className='text-white'>Asientos seleccionados:</p>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className='d-flex'>
                    <button className='btn btn-success mt-2 m-4' disabled>-</button>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6 ">
                  <div className='d-flex'>
                    <p className='text-white'>Pasillos:</p>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6 ">
                  <div className='d-flex'>
                    <button className='btn btn-dark text-white' disabled>-</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col d-flex justify-content-center">

                <Seat hall={hall} cinemaId={cinemaId} setQuantity={setQuantity} handleQuantityChange={handleQuantityChange}
                  seatingOccupied={seatingOccupied} setSeatOccupiedId={setSeatOccupiedId} />
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button
              className="botonReserva d-flex justify-content-center pt-2"
              onClick={() => createPreference()}
            >
              <div className="mt-1">
                <box-icon name="cart-add" color="#ffffff"></box-icon>
              </div>
              <p className="p-1">Pagar Mi Boleto</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
