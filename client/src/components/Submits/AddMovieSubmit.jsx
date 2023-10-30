import { Link } from "react-router-dom"
import { useContext } from "react"
import { movieContext } from "../../context/MovieContext.jsx"
import { type_movie } from "../../types/types.movie.js"
export const AddMovieSubmit = ({ formMovie, sendImg, cinemaId }) => {
    const { state, dispatch } = useContext(movieContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: type_movie.MOVIE_ADD,
            payload: {
                formMovie: formMovie,
                sendImg: sendImg,
                cinemaId: cinemaId
            }
        })
    }

    return (
        <div className="row d-flex align-items-center justify-content-stard">
            <div className="mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                <button type="submit" className="text-white w-100 btn btn-sm btn-dark" onClick={handleSubmit}>Guardar</button>
            </div>
            <div className="mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12 mb-1">
                <Link to="/" className="btn-light w-100 btn btn-sm">Cancelar</Link>
            </div>
        </div>
    )
}