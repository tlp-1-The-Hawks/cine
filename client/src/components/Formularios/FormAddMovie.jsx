import React, { useState } from 'react';
import "../../assets/style/FormMovie.css"
import { GenreSelect } from '../Selects/GenreSelect';
import { TypeEmissionSelect } from '../Selects/TypeEmissionSelect';
import { AddMovieSubmit } from '../Submits/AddMovieSubmit';
import { HallSelect } from '../Selects/HallSelect.jsx';
import { DateEmissionSelect } from '../Selects/DateEmissionSelect.jsx';

export const FormAddMovie = ({ cinemaId, hallState }) => {
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
        type_emissionId: 1,
        url_trailer: "",
        hallId: "1",
        events: ""
    });

    const [imageState, setImageState] = useState(null);
    const [sendImg, setSendImg] = useState(null);
    const [dateArray, setDateArray] = useState([]);
    const [numberDates, setNumberDates] = useState(0);
    const [arrayForDates, setArrayForDates] = useState([]);


    const handleDatesChange = (e) => {

        const { name } = e.target
        const index = parseInt(name.split("_")[0])
        const newArrayDates = [
            ...arrayForDates
        ]

        newArrayDates[index - 1] = e.target.value

        console.log(newArrayDates);
        setArrayForDates(newArrayDates);

        setFormMovie(
            ...formMovie
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newFormData = {
            ...formMovie,
            [name]: value,
        };
        setFormMovie(newFormData);
        console.log(newFormData);

        if (name === 'rutaImage') {
            const file = e.target.files[0];
            if (file) {
                const imgName = file.name;
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImageState({
                        image: e.target.result
                    });
                };
                setFormMovie({
                    ...formMovie,
                    rutaImage: `${imgName}`
                });
                setSendImg(file);
                reader.readAsDataURL(file);
            } else {
                setImageState({
                    image: null
                });
            }
        }

        if (name === 'date_issue') {
            const newNumber = e.target.value
            setNumberDates(newNumber)
        }
        // if (name === 'date_issue') {
        //     const numDates = parseInt(value);
        //     const newDateArray = [];
        //     for (let index = 1; index <= numDates; index++) {
        //         newDateArray.push(
        //             <div className='col-6' key={index}>
        //                 <div className='row'>
        //                     <label htmlFor="">{index}° Fecha</label>
        //                     <input
        //                         name={`${index}_date`}
        //                         type="datetime-local"
        //                         onChange={handleDatesChange}
        //                     />
        //                 </div>
        //             </div>
        //         );
        //     }
        //     setDateArray(newDateArray);
        // }


    };

    const handleInputsCreate = (number) => {
        const numbers = []
        for (let i = 1; i <= number; i++) {
            numbers.push(i)
        }
        return numbers
    }


    return (

        <div onChange={handleChange} className="fondoformmovie w-100 d-flex justify-content-center align-items-center" >
            <div className='row container w-75 h-75 d-flex'>
                <div className="col-12 col-md-12 col-sm-12">
                    <div className="d-flex justify-content-center">
                        <form method='POST' encType="multipart/form-data" className="mt-5 mb-5 formAddmovie rounded-5 p-3 border w-100 ">
                            <div className='d-flex justify-content-center text-center'>
                                <h3 id='titulo' >Agrega tu película</h3>
                            </div>
                            <div className="row">
                                <div className="mt-3 col-12 col-md-6 col-sm-12  mb-3">
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
                                    <label htmlFor="director" className="form-label">Director</label>
                                    <input type="text" className="form-control" id="director"
                                        name="director" />
                                </div>



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
                            <div className="row">

                                <HallSelect
                                    formMovie={formMovie}
                                    handleChange={handleChange}
                                    hallState={hallState}
                                    cinemaId={cinemaId}
                                />
                                <DateEmissionSelect
                                    onChange={handleChange}
                                    formMovie={formMovie}
                                />
                            </div>
                            <div className='row'>
                                {/* {dateArray} */}
                                {
                                    numberDates > 0 ? (handleInputsCreate(numberDates)).map(number => (
                                        <div className='col-6' key={number}>
                                            <div className='row'>
                                                <label htmlFor="">{number}° Fecha</label>
                                                <input
                                                    name={`${number}_date`}
                                                    type="datetime-local"
                                                    onChange={handleDatesChange}
                                                />
                                            </div>
                                        </div>

                                    )) : null
                                }
                            </div>
                            <AddMovieSubmit
                                formMovie={formMovie}
                                sendImg={sendImg}
                                cinemaId={cinemaId}
                                arrayForDates={arrayForDates.join(" - ")}
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}