import React, { useState } from 'react';
import "../../assets/style/FormMovie.css"
import { GenreSelect } from '../Selects/GenreSelect';
import { TypeEmissionSelect } from '../Selects/TypeEmissionSelect';
import { AddMovieSubmit } from '../Submits/AddMovieSubmit';

export const FormAddMovie = ({ cinemaId }) => {
    const [formMovie, setFormMovie] = useState({
        title: "",
        genreId: "1",
        description: "",
        duration: "",
        actors: "",
        director: "",
        price: "",
        rutaImage: "",
        date_issue: "",
        type_emissionId: "1"
    })
    const [imageState, setImageState] = useState(null)
    const [sendImg, setSenImg] = useState(null)


    const handleChange = (e) => {
        const {
            name, value
        } = e.target

        const newFormData = {
            ...formMovie,
            [name]: value,
        }
        console.log(newFormData)
        setFormMovie(newFormData)
        if (name === 'rutaImage') {
            const file = e.target.files[0]
            if (file) {
                const imgName = file.name
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImageState({
                        image: e.target.result
                    });
                };
                setFormMovie({
                    ...formMovie,
                    rutaImage: `${imgName}`
                })
                setSenImg(file)
                reader.readAsDataURL(file);
            } else {
                setImageState({
                    image: null
                });
            }
        }
    }




    return (

        <div onChange={handleChange} className="fondoformmovie w-100 d-flex justify-content-center align-items-center" >
            <div className='container w-75 h-75 d-flex'>
                <div className="w-100">
                    <div className="d-flex justify-content-center">
                        <form method='POST' encType="multipart/form-data" className="mt-5 mb-5 formAddmovie rounded-5 p-3 border w-100 ">
                            <div className='d-flex justify-content-center text-center'>
                                <h3 className="mb-3 text-center bg-dark text-light rounded-5 p-2">Agrega tu película</h3>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12  mb-3">
                                    <label htmlFor="titulo" className="form-label">Titulo</label>
                                    <input onChange={handleChange} value={formMovie.title} type="text" className="form-control" id="" name="title" />
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <div className='row align-items-center justify-content-center'>
                                        <label htmlFor="">Imagen de portada</label>
                                        <input type="file" name='rutaImage' onChange={handleChange} accept="image/*" />
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
                                    <input onChange={handleChange} value={formMovie.description} type="text" className="form-control" id="" name="description" />
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
                                    <div className="row">
                                        <label htmlFor="director" className="form-label">Fecha de emisión</label>
                                        <input onChange={handleChange} value={formMovie.date_issue} type="datetime-local" id="datetime" name="date_issue" />

                                    </div>
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="director" className="form-label">Director</label>
                                    <input type="text" className="form-control" id="director"
                                        name="director" />
                                </div>
                            </div>

                            <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="Url" className="form-label">link del trailer</label>
                                <input type="text" className="form-control" id="Url"
                                    name="Url" />

                            </div>
                            <div className="row">

                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="actors" className="form-label">Actores</label>
                                    <input onChange={handleChange} value={formMovie.actors} type="text" className="form-control" id=""
                                        name="actors" />
                                </div>
                                <div className="mt-3 col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="Precio" className="form-label">Precio</label>
                                    <input onChange={handleChange} value={formMovie.price} type="number" className="form-control" id=""
                                        name="price" />
                                </div>
                            </div>
                            <AddMovieSubmit
                                formMovie={formMovie}
                                sendImg={sendImg}
                                cinemaId={cinemaId}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}