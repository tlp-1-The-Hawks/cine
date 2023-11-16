import { useState, useEffect } from "react"
import { CustomFetch } from "../../api/customFetch.js"
export const RequestsBox = ({ reqCine }) => {

    const [requestCine, setRequestCine] = useState([])

    const rejectedRequest = async (e) => {
        e.preventDefault()
        const data = await CustomFetch(`http://localhost:4000/api/request-cine/${e.target.id}`, 'DELETE')
        console.log(data)

        setRequestCine(reqCine)
        window.location.reload()
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