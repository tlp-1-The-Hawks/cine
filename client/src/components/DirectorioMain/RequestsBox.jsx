import { useState, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import { types_user } from "../../types/types.user"

export const RequestsBox = ({ reqCine }) => {
    const { state, dispatch } = useContext(UserContext)
    const [requestCine, setRequestCine] = useState([])

    const rejectedRequest = (e) => {
        e.preventDefault()
        dispatch({
            type: types_user.DELETE_CINE_REQUEST,
            payload: e.target.id
        })
        setRequestCine(reqCine)
    }


    useEffect(() => {
        setRequestCine(reqCine)
    }, [reqCine])

    return (
        <div className="requestsBox">
            <div className="container">
                <div className="row">
                    <h1 className="text-center w-50">Solicitudes </h1>
                    <div className="col-8 text-white">
                        {
                            requestCine.map((cine) => (
                                <div className="border  border-white w-75 rounded-4 mt-3 mb-3">
                                    <div className="container text-center mt-3">
                                        <div className="row">
                                            <div className="col">
                                                <p className="">Nombre Cine: {cine.name_cinema}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">CUIT: {cine.cuit}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="">Telefono: {cine.phone}</p>
                                            </div>
                                            <div className="col">
                                                <p className="">Ubicación: {cine.province.name}, {cine.location.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="">Dirección: {cine.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="">
                                            <button className="requestsButton btn btn-danger">Aceptar</button>
                                        </div>
                                        <div className="">
                                            <button onClick={rejectedRequest}
                                                key={cine.id} id={cine.id} className="requestsButton  btn btn-success">Rechazar</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className="col">
                        <div className="row mt-1">
                            <h2 className="text-center text-white">Filtros</h2>
                            <div className="mt-1 mb-1">
                                <select name="" className="w-100 bg-danger rounded text-white text-center" id="">
                                    <option value="">
                                        Todos
                                    </option>
                                    <option value="">
                                        Hoy
                                    </option>
                                    <option value="">
                                        Esta semana
                                    </option>
                                    <option value="">
                                        Este mes
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}