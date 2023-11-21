import { addCreateHall, deleteHall, getAllHallByCinemaId, getOneHallById } from "../models/Hall.models.js";
import { addHallxCinemas } from "../models/hallXCinemas.js";
import { addSeating } from "../models/seating.mode.js";

export const ctrlAddHall = async (req, res) => {
    try {
        if (req.body.selectedButtons.length === 0) {
            return res.status(400).json({
                errors: [
                    { msg: '¡Debes seleccinar tus asientos!' }
                ]
            })
        }

        const {
            cinemaId
        } = req.params;
        console.log(req.body)
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

export const ctrlDeleteHall = async (req, res) => {
    try {
        const { id } = req.params

        const halls = await deleteHall(id)

        res.status(200).json({
            msg: 'hall eliminated'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error delete hall'
        })
    }
}

export const ctrlGetOneHallById = async (req, res) => {
    try {
        const { id, cinemaId } = req.params

        const hall = await getOneHallById(id, cinemaId)

        res.status(200).json(hall)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error get one hall'
        })
    }
}