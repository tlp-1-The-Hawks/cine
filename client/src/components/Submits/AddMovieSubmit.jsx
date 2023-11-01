import { Link } from "react-router-dom"
import { useContext } from "react"
import { movieContext } from "../../context/MovieContext.jsx"
import { type_movie } from "../../types/types.movie.js"
import "../../assets/style/submit.css"
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
        <div  id="botones">
            <div>
                <button type="submit" className="guardarBoton" onClick={handleSubmit}>Guardar</button>
            </div>
            <div >
                <Link to="/" ><button className="cancelarBoton">Cancelar</button> </Link>
            </div>
        </div>
    )
}