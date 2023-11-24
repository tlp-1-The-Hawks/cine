import { Link } from "react-router-dom"
import { CustomFetch } from "../../api/customFetch.js"
import Swal from "sweetalert2"
export const AddMovieSubmit = ({ formMovie, sendImg, cinemaId }) => {



    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', sendImg);



        const response = await CustomFetch(`http://localhost:4000/api/information/${cinemaId}`, 'MOVIE', formMovie)
        const data = await response.json()


        if (data.errors) {
            return Swal.fire({
                title: 'Error',
                text: data.errors[0].msg,
                icon: 'error',
                width: '50%',
                padding: '1rem',
                background: '#DBCBCB',
                grow: 'row'
            })
        }

        if (response.status === 200) {

            const response = await CustomFetch('http://localhost:4000/api/upload-imgmovi', 'IMAGE', formData)

            const data = await response.json()


            return Swal.fire({
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



    }

    return (
        <div className="row d-flex align-items-center justify-content-stard">
            <div className="col-12 mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12">
                <button type="submit" className="w-100 guardarBoton btn btn-dark" onClick={handleSubmit}>Guardar</button>
            </div>
            <div className="mt-4 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-12">
                <Link to="/" ><button className="w-100 cancelarBoton btn btn-light">Cancelar</button> </Link>
            </div>
        </div>
    )
}