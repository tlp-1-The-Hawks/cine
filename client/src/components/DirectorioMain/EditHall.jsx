
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { CustomFetch } from "../../api/customFetch.js"

export const EditHall = ({ halls }) => {

    const [hallState, setHallState] = useState([])
    useEffect(() => {
        setHallState(halls)
        console.log(halls)
    }, [halls])

    const deleteHall = (e) => {
        e.preventDefault()

        return Swal.fire({
            title: '¿Seguro que quieres eliminar?',
            icon: 'question',
            confirmButtonText: 'Aceptar',
            showCancelButton: 'Cancelar',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
        })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    hallState.map((hall) => (
                        <div key={hall.id} className="col-12 col-md-6 mt-2 mb-2">
                            <div className="container mt-3 border border-white rounded  bg-dark ">
                                <div className="row ms-2">
                                    <div className="col">
                                        <p className="">Número de sala: {hall.nr_hall}</p>
                                    </div>
                                    <div className="col">
                                        <p className="">Capacidad: {hall.capacity}</p>
                                    </div>
                                </div>
                                <div className="row ms-2">
                                    <div className="col">
                                        <p className="">Filas: {hall.row}</p>
                                    </div>
                                    <div className="col">
                                        <p className="">Columnas: {hall.column}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="">
                                    <button className="text-dark requestsButton bg-white btn btn-white ">Editar</button>
                                </div>
                                <div className="">
                                    <button
                                        id={hall.id} onClick={deleteHall} className="requestsButton  btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}