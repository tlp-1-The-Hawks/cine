import { types_user } from "../types/types.user.js";
import { AddRequestCine } from "../hooks/FetchPost/RequestCine.js";
import Swal from 'sweetalert2'

export const userReducer = (state, action) => {

    switch (action.type) {
        case types_user.USER_ADD:
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
            break;
        case types_user.USER_FIND_ONE:
            fetch("http://localhost:4000/auth/login", {
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
                                title: 'Inicio sesión correctamente',
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
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        title: 'El correo o contraseña son invalidos',
                        icon: 'error',
                        confirmButtonText: 'ok',
                        width: '50%',
                        padding: '1rem',
                        background: '#DBCBCB',
                        grow: 'row'
                    })
                });
            break;

            case types_user.CINE_REQUEST: 
            console.log(action.payload)
            AddRequestCine(action.payload)
            .then((data) => {
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
                        title: 'Solicitud enviada',
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

            break

    }



    return state
}