import { useEffect, useState } from "react"
export const EditHallBox = ({ hall }) => {
    const [hallState, setHallState] = useState([])
    useEffect(() => {
        setHallState(hall)
    }, [])
    return (
        <div className="editHallBox">
            <div className="container">
                <h1 className="text-center">Edita tu sala</h1>
                <div className="row mt5">

                </div>
            </div>
        </div>
    )
}