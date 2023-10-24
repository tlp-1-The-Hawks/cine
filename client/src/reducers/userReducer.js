import { type } from "../types/types.js";
import Swal from 'sweetalert2'

export const userReducer = (state, action) => {

    switch (action.type) {
        case type.USER_ADD:
            if (action.payload.password != action.payload.confirmarpassword) {
                const alertpassword = Swal.fire({
                    title: 'Error',
                    text: 'Las contraseñas no coinciden',
                    icon: 'error',
                    width: '50%',
                    padding: '1rem',
                    background: '#DBCBCB',
                    grow: 'row'
                })
                return alertpassword
            }
            else {
                fetch("http://localhost:4000/auth/register", {
                    method: "POST",
                    body: JSON.stringify(action.payload),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
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
                            if (data.token) {
                                localStorage.setItem('token', data.token);
                                Swal.fire({
                                    title: 'Se registro correctamente',
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
                            } else {
                                console.error('Error al iniciar sesión');
                            }
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });

            }

    }
    return state
}