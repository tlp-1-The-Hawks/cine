import { addCreateHall, getAllHallByCinemaId } from "../models/Hall.models.js";
import { addHallxCinemas } from "../models/hallXCinemas.js";
import { addSeating } from "../models/seating.mode.js";

export const ctrlAddHall = async (req, res) => {
    try {
      

        const {
            cinemaId
        } = req.params;

        const NewHall = await addCreateHall(req.body.formState)
        const hallId = NewHall.id

        const newSeating = await addSeating(req.body.selectedButtons, hallId)

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

export const ctrlGetAllHallByCinemaId = async (req, res) => {
    try {
        const { cinemaId } = req.params

        const halls = await getAllHallByCinemaId(cinemaId)

        res.status(200).json(halls)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error get all halls by cinemaId'
        })
    }
}