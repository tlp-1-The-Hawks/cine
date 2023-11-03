import React, { useState, useEffect } from 'react';
import "../../assets/style/FormMovie.css"
import { GenreSelect } from '../Selects/GenreSelect';
import { TypeEmissionSelect } from '../Selects/TypeEmissionSelect';
import { EditMovieSubmit } from '../Submits/EditMovieSubmit';
import { HallSelect } from '../Selects/HallSelect.jsx';

export const FormEditMovie = ({ movieData, onUpdate }) => {
    const [formMovie, setFormMovie] = useState({
        title: movieData.title,
        genreId: movieData.genreId,
        description: movieData.description,
        duration: movieData.duration,
        actors: movieData.actors,
        director: movieData.director,
        price: movieData.price,
        rutaImage: movieData.rutaImage,
        date_issue: movieData.date_issue,
        type_emissionId: movieData.type_emissionId,
        url_trailer: movieData.url_trailer,
        hallId: movieData.hallId
    });

    const [imageState, setImageState] = useState(null);
    const [sendImg, setSendImg] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = { ...formMovie, [name]: value };
        setFormMovie(newFormData);
    }

    useEffect(() => {
        setFormMovie({
            ...movieData,
            rutaImage: movieData.rutaImage,
        });
    }, [movieData]);

    return (
        <div className="fondoformmovie w-100 d-flex justify-content-center align-items-center">
            <div className="container w-75 h-75 d-flex">
                <div className="w-100">
                    <div className="d-flex justify-content-center">
                        <form method='POST' encType="multipart/form-data" className="mt-5 mb-5 formAddmovie rounded-5 p-3" id='editar'>
                            <div className='d-flex justify-content-center text-center'>
                                <h3 id='titulo'>Editar película</h3>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="titulo" className="form-label">Titulo</label>
                                    <input onChange={handleChange} value={formMovie.title} type="text" aria-label='' className="form-control" id="" name="title" />
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <div className='row align-items-center justify-content-center'>
                                        <label htmlFor="">Imagen de portada</label>
                                        <input type="file" aria-label='' name='rutaImage' onChange={handleChange} accept="image/*" />
                                        {imageState && <img className='imageFormMovie' src={imageState.image} alt="" />}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <TypeEmissionSelect
                                    formMovie={formMovie}
                                    handleChange={handleChange}
                                />
                                <GenreSelect
                                    formMovie={formMovie}
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className="row align-items-center">
                                <div className="mt-3 col-12 col-sm-12 col-md-6 mb-3">
                                    <label htmlFor="description" className="form-label">Descripción</label>
                                    <input onChange={handleChange} value={formMovie.description} type="text" aria-label='' className="form-control" id="" name="description" />
                                </div>
                                <div className="mt-3 col-12 col-sm-12 col-md-6 mb-3">
                                    <div className="row m-1">
                                        <label htmlFor="">Duración (en minutos)</label>
                                        <input
                                            type="number"
                                            id="minutos"
                                            name="duration"
                                            min="0"
                                            placeholder="Minutos"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="url_trailer" className="form-label">Url del trailer</label>
                                    <input onChange={handleChange} value={formMovie.url_trailer} type="text" className="form-control" id="url_trailer"
                                        name="url_trailer" />
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <div className="row">
                                        <label htmlFor="director" className="form-label">Fecha de emisión</label>
                                        <input onChange={handleChange} value={formMovie.date_issue} type="datetime-local" aria-label='' id="datetime" name="date_issue" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="director" className="form-label">Director</label>
                                    <input type="text" className="form-control" id="director"
                                        name="director" />
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="actors" className="form-label">Actores</label>
                                    <input onChange={handleChange} value={formMovie.actors} type="text" className="form-control" id=""
                                        name="actors" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="Precio" className="form-label">Precio</label>
                                    <input onChange={handleChange} value={formMovie.price} type="number" className="form-control" id=""
                                        name="price" />
                                </div>
                                <HallSelect
                                    formMovie={formMovie}
                                    handleChange={handleChange}
                                    hallState={hallState}
                                />
                            </div>

                            <EditMovieSubmit
                                formMovie={formMovie}
                                sendImg={sendImg}
                                onUpdate={onUpdate}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
