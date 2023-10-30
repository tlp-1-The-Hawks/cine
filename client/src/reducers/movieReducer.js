import { type_movie } from "../types/types.movie.js";
import Swal from 'sweetalert2'

export const movieReducer = (state, action) => {
    switch (action.type) {
        case type_movie.MOVIE_ADD:
            const { sendImg, cinemaId, formMovie } = action.payload

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

    return state
}