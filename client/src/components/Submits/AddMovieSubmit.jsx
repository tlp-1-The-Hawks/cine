import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

export const AddMovieSubmit = ({ formMovie, sendImg,cinemaId }) => {

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

    return(
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