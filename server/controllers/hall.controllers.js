import { addCreateHall } from "../models/Hall.models.js";
import { addHallxCinemas } from "../models/hallXCinemas.js";

export const ctrlAddHall = async (req, res) => {
    try {
        const hall = req.body
        const {
            cinemaId
        } = req.params;

        const NewHall = await addCreateHall(hall)
        const hallId = NewHall.id

        const newHallxCinema = await addHallxCinemas(cinemaId, hallId)

        res.status(200).json({
            msg: "Hall added"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error addingHall"
        })
    }
}   