import React, { useState, useEffect } from 'react';
import "../../assets/style/FormMovie.css"
import { Link } from 'react-router-dom';

export const FormAddMovie = () => {
    const [formMovie, setFormMovie] = useState({
        title: "",
        genreId: "",
        description:"",
        duration:"",
        actors:"",
        director:"",
        price:"",
        rutaImage:"",
        date_issue:""
    })
    const [genreState, setGenreState] = useState([])
    const [fondo, setFondoState] = useState({
        height: ""
    })
    const [imageState, setImageState] = useState(null)
    const [sendImg, setSenImg] = useState(null)


    useEffect(()=> {
        fetch('http://localhost:4000/api/genre', {
            method:'GET'
        })
        .then((res)=>res.json())
        .then((data) => {
            setGenreState(data)
        })
        .catch((error)=> console.log(error))
    },[])



    const handleChange= (e)=> {
        const {
         name, value
        } = e.target
        
        setFormMovie({
            ...formMovie,
            [name]:value,

        })
    if(name === 'rutaImage'){
        const file = e.target.files[0]
        if (file) {
           const imgName = file.name
           const reader = new FileReader();
           setFondoState({
               height:"fondoformmovie"
           })
           reader.onload = (e) => {
             setImageState({
               image:e.target.result
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
               image:null
           });
           
            setFondoState({
                   height:""
            })
         }
    }
       
       
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', sendImg);

        fetch(`http://localhost:4000/api/information/2`,{
            method: 'POST',
            body: JSON.stringify(formMovie),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res)=> {
            if(res.status === 200){
               
             fetch('http://localhost:4000/api/upload-imgmovi',{
                    method:'POST',
                    body: formData
                })
            }
            return res.json()
        })
        .then((data)=> {
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (

        <div onChange={handleChange} className="fondoformmovie w-100 d-flex justify-content-center align-items-center" id={fondo.height}>
            <div className='container w-75 h-75 d-flex'>
                <div className="w-100">
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit} method='POST' action="http://localhost:4000/api/information/1" encType="multipart/form-data" className="formAddmovie rounded-5 p-3 border w-100 ">
                            <div className='d-flex justify-content-center text-center'>
                                <h3 className="mb-3 text-center  text-light rounded-2 p-2">Agrega tu película</h3>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12  mb-3">
                                    <label htmlFor="titulo" className="form-label">Titulo</label>
                                    <input onChange={handleChange} value={formMovie.title} type="text" className="form-control" id="" name="title" />
                                </div>
                                <div className="col-12 col-md-6 col-sm-12 mb-3">
                                    <div className='row align-items-center justify-content-center'>
                                        <label htmlFor="">Imagen de portada</label>
                                        <input type="file" name='rutaImage' onChange={handleChange} accept="image/*" />
                                        {imageState && <img className='imageFormMovie' src={imageState.image} alt="" />}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-sm-12 col-md-6 mb-3">
                                    <div className="row">
                                        <label htmlFor="genre" className="form-label">Género</label>
                                        <select
                                         name="genreId"
                                         id="genre"
                                         onChange={handleChange}
                                         value={formMovie.genreId}
                                        >
                                        {genreState.map((genre) => (
                                        <option key={genre.id} value={genre.id}>
                                          {genre.genre}
                                         </option>
                                         ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-12 col-sm-12 col-md-6 mb-3">
                                    <label htmlFor="description" className="form-label">Descripción</label>
                                    <input onChange={handleChange}  value={formMovie.description} type="text" className="form-control" id="" name="description" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 mb-3">
                                    <div className="row m-1">
                                     <label htmlFor="">Duración (en minutos)</label>
                                     <input
                                         type="number"
                                         id="minutos"
                                         name="duration"
                                         min="0"
                                         max="59"
                                        placeholder="Minutos"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-sm-12 mb-3">
                                    <div className="row">
                                        <label htmlFor="director" className="form-label">Fecha de emisión</label>
                                        <input onChange={handleChange} value={formMovie.date_issue} type="datetime-local" id="datetime" name="date_issue"/> 
                                      
                                    </div>    
                                </div>
                            <div className="col-12 col-md-6 col-sm-12 mb-3">
                                <label htmlFor="director" className="form-label">Director</label>
                                <input  type="text"  className="form-control" id="director"
                                        name="director" />
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="actors" className="form-label">Actores</label>
                                    <input onChange={handleChange} value={formMovie.actors} type="text"  className="form-control" id=""
                                        name="actors" />
                                </div>
                                <div className="col-12 col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="Precio" className="form-label">Precio</label>
                                    <input onChange={handleChange} value={formMovie.price} type="number"  className="form-control" id=""
                                        name="price" />
                                </div>
                            </div>
                            <div className="row d-flex align-items-center justify-content-stard">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                                    <button type="submit" className="text-white w-100 btn btn-sm btn-outline-secondary">Guardar</button>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                                    <Link to="/" className="text-white btn-outline-danger w-100 btn btn-sm">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}