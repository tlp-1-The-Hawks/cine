
import { useEffect, useState } from "react"

export const EditHall = ({halls}) => {

    const [hallState, setHallState] = useState([])
    useEffect(() => {
        setHallState(halls)
        console.log(halls)
    }, [halls])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    hallState.map((hall) => (
                        <div key={hall.id} className="col-12 col-md-4 col-sm-6 border border-white rounded bg-dark ms-2 me-2 mt-2 mb-2">
                                    <div className="container mt-3">
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
                                            <button  className="text-dark requestsButton bg-white btn btn-white ">Editar</button>
                                        </div>
                                        <div className="">
                                            <button 
                                                className="requestsButton  btn btn-danger">Eliminar</button>
                                        </div>
                                    </div>
                              
                             
                        </div>
                       
                    ))
                }
            </div>
        </div>
    )
}