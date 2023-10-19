  import '../../assets/style/FormReserva.css'
  import { useState, useEffect } from 'react';
  import {initMercadoPago, Wallet } from '@mercadopago/sdk-react';
  import axios from 'axios';
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

    const [preferenceId, setPreferenceId] = useState(null);

    
  
    const createPreference = async () => {
      try {
        const response = await axios.post("http://localhost:4000/create_preference", {
          description: "Boleto de cine",
          price: 1000,
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
        initMercadoPago("TEST-82fc2258-893e-4c80-b58f-2bcaa60fd171");
        setPreferenceId(id);
      }
    };

    useEffect(() => {

      const token = localStorage.getItem('token');
  
      if (!token) {
        window.location.href = '/';
      }
    }, []);

    return (
      < div className="contenedor" >

        <div className="formBoxes">
          <form>
            <h2>Reserva de Asientos de Cine</h2>


            <div className="inputBox">
              <label>Número de Boletos</label>
              <input
              min={1}
              max={50}
                type="number"
              />
            </div>

            <div className="inputBox">
            <p>
              {price}
            </p>
            </div>

            <div className='boton'>
            <button type='button' onClick={handleBuy}>Buy</button>
            {
              preferenceId && <Wallet initialization={{ preferenceId }} />
            }
            </div>

          </form>
        </div>

      </div >
    )
  }