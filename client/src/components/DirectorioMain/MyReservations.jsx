import { useState, useEffect } from "react";
import { CustomFetch } from "../../api/customFetch.js";

export const MyReservations = ({ movies, cinemaId, userToken }) => {
  const [titleMovie, setTitleMovie] = useState("");
  const [bookings, setBookings] = useState([]);
  const [cartelera, setCartelera] = useState([]);

  useEffect(() => {
    setCartelera(movies);
  }, [movies]);

  const handleMovie = async (e) => {
    try {
      const data = await CustomFetch(
        `http://localhost:4000/api/booking/${e.target.id}/${cinemaId}?userToken=${userToken}`,
        "GET"
      );

      setTitleMovie(e.target.name);
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div className="reservationsBox">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row mt-4">
              <h2 className="text-center text-white">Mi cartelera</h2>
              {cartelera.map((movies) => (
                <div className="miCartelera mt-1 mb-1" key={movies.id}>
                  <button
                    onClick={handleMovie}
                    id={movies.id}
                    name={movies.title}
                    className="w-100 btn btn-danger"
                  >
                    {movies.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-8">
            <h1 className="text-center">Reservas: {titleMovie}</h1>
            <div className="d-flex justify-content-center">
              {bookings.map((booking) => (
                <p key={booking.paymentId}>{booking.paymentId}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
