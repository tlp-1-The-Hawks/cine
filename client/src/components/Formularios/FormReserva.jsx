import '../../assets/style/FormReserva.css'
import { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { Seat } from '../otros/seats';
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movieId, cinemaId } = params;

export const FormReserva = () => {
  const [info, setInfo] = useState({})
  const [price, setPrice] = useState("Cargando...");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:4000/api/movies/${movieId}/${cinemaId}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data)
        console.log(info);
      })
      .catch((error) => console.log(error));
  }, [])

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-82fc2258-893e-4c80-b58f-2bcaa60fd171");


  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:4000/create_preference", {
        description: "Boleto de cine",
        price: price,
        quantity: 1,
      });

      const { id } = response.data;
      console.log(id);

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    const newPrice = newQuantity * info.cinemas[0].information[0].price;
    setPrice(newPrice);
    console.log(price)
  };

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
    }
  }, []);

  return (
    < div className="contenedorReserva" >

      <div className="formBoxReserva">

      <h2>Reserva de Asientos de Cine</h2>
<div className='datos'> <div >
<div className="inputBoxReserva">

          <label>Número de Boletos</label>
          <input
            min={1}
            max={50}
            type="number"
            value={quantity} // Asigna el estado 'quantity' al valor del input
            onChange={handleQuantityChange} // Maneja el cambio en el input
          />
        </div>
        <div className="inputBoxReserva">
          <p>
            $ {price}
          </p>
        </div>
     
        {
          preferenceId && <Wallet initialization={{ preferenceId }} />
        }
</div>
<Seat/></div>
<button className='botonReserva d-flex justify-content-center pt-2' type='button' onClick={handleBuy}>
          <box-icon name='cart-add' color='#ffffff' ></box-icon>
          <p>Pagar Mi Boleto</p>
        </button>



  
      </div>
    </div>
  )
}