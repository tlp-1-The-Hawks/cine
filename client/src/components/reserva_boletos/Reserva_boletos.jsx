import React from 'react';
import "../../assets/style/Reserva_boletos.css"
import img from "../../../public/img/logo.png"

function Reserva_boletos() {
    const reservar = (titulo, precio, sala, duracion) => {
        alert(`Reservando: ${titulo}, Precio: $${precio}, Sala: ${sala}, Duración: ${duracion}`);
    };

    // Sample data
    const cant_boletos = 27;
    const peliculas_espera = 8;
    const pelicula_pagadas = 20;
    const total = 15000;

    const titulo = 'Título de la Película 1';
    const precio = 10.00;
    const sala = 'Sala 1';
    const duracion = '2 horas';

    return (
        <>
            <section>
                <h2 className="titulo_De_mis_reservas">Informacion de mis peliculas reservadas reservas</h2>
                <div className="info_reserva">
                    <p>Cantidad de Boletos: <span id="cantBoletosReserva">{cant_boletos}</span></p>
                    <p>Cantidad de peliculas en espera: <span id="cantBoletosReserva">{peliculas_espera}</span></p>
                    <p>Cantidad de peliculas de pagadas: <span id="cantBoletosReserva">{pelicula_pagadas}</span></p>
                    <p>Costo Total: $<span id="costoTotalReserva">{total}</span></p>
                </div>
            </section>

            <section className="movieSelection">
                <div className="pelicula_contenedor">
                    <h2>Selección de Película</h2>
                    <div className="movie">
                        <div className="movie-info">
                            <h3>Título de la Película: {titulo}</h3>
                            <p>Duración: {duracion}</p>
                            <p>Sala: {sala}</p>
                            <p>Precio: ${precio}</p>
                            <button onClick={() => reservar(titulo, precio, sala, duracion)}>Reservar</button>
                        </div>
                        <div className="movie-image">
                            <img src={img} alt="Imagen de la película" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reserva_boletos;
