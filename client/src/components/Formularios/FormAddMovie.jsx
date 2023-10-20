import React, { useState, useEffect } from 'react';
import "../../assets/style/FormMovie.css"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const token = localStorage.getItem('token');


export const FormAddMovie = () => {
    const [formMovie, setFormMovie] = useState({
        title: "",
        genreId: "1",
        description: "",
        duration: "",
        actors: "",
        director: "",
        price: "",
        rutaImage: "",
        date_issue: ""
    })
    const [genreState, setGenreState] = useState([])
    const [imageState, setImageState] = useState(null)
    const [sendImg, setSenImg] = useState(null)
    const [cinemaId, setCinemaId] = useState(null)

    useEffect(() => {
        if(token){
            fetch('http://localhost:4000/auth/user', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': token
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.cinemaId === null) {
                        window.location.href = '/'
                    }
                    else {
                        return setCinemaId(data.cinemaId)
                    }
                })
                .catch((error) => console.log(error))
        }else {
            window.location.href = '/'
        }

    }, [])


    useEffect(() => {
        fetch('http://localhost:4000/api/genre', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                setGenreState(data)
            })
            .catch((error) => console.log(error))
    }, [])



    const handleChange = (e) => {
        const {
            name, value
        } = e.target

        setFormMovie({
            ...formMovie,
            [name]: value,

        })
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



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', sendImg);

        fetch(`http://localhost:4000/api/information/${cinemaId}`, {
            method: 'POST',
            body: JSON.stringify(formMovie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.status === 200) {

                    fetch('http://localhost:4000/api/upload-imgmovi', {
                        method: 'POST',
                        body: formData
                    })
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if (data.errors) {
                    Swal.fire({
                        title: 'Error',
                        text: data.errors[0].msg,
                        icon: 'error',
                        width: '50%',
                        padding: '1rem',
                        background: '#DBCBCB',
                        grow: 'row'
                    })
                } else {
                    Swal.fire({
                        title: 'Se guardo su película correctamente',
                        icon: 'success',
                        confirmButtonText: 'ok',
                        width: '50%',
                        padding: '1rem',
                        background: '#DBCBCB',
                        grow: 'row'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/'
                        }
                    })

                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (

        <div onChange={handleChange} className="fondoformmovie w-100 d-flex justify-content-center align-items-center" >
            <div className='container w-75 h-75 d-flex'>
                <div className="w-100">
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit} method='POST' encType="multipart/form-data" className="mt-5 mb-5 formAddmovie rounded-5 p-3 border w-100 ">
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
                                <div className="mt-3 col col-sm-12 col-md-6 mb-3">
                                    <div className="row">
                                        <label htmlFor="genre" className="form-label">Género</label>
                                        <select
                                            name="genreId"
                                            id="genre"
                                            onChange={handleChange}
                                            defaultValue={1}
                                            value={formMovie.genreId}
                                        >
                                            {genreState.map((genre) => (
                                                <option defaultValue={1} key={genre.id} value={genre.id}>
                                                    {genre.genre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
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
                            <div className="row d-flex align-items-center justify-content-stard">
                                <div className="mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                                    <button type="submit" className="text-white w-100 btn btn-sm btn-dark">Guardar</button>
                                </div>
                                <div className="mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                                    <Link to="/" className="btn-light w-100 btn btn-sm">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}