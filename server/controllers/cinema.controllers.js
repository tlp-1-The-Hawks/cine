import {
    addCinema,
    deleteCinema,
    getAllCinema,
    getCinemaById,
    updateCinema
} from "../models/Cinema.models.js";


export const ctrlAddCinema = async (req, res) => {
    try {
        const cinema = await addCinema(req.body)

        return res.status(200).json({
            message: 'Cinema was added'
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error when adding cinema'
        })
    }
}

export const ctrlgetAllCinema = async (req, res) => {
    try {
        const cinemas = await getAllCinema()

        return res.status(200).json(cinemas)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when get all cinemas'
        })
    }
}

export const ctrlGetCinemaById = async (req, res) => {
    try {
        const { id } = req.params

        const cinema = await getCinemaById(id)

        return res.status(200).json(cinema)
    } catch (error) {
        console.log(error),
            res.status(500).json({
                message: 'Error when get all by id cinema'
            })
    }
}

export const ctrlDeleteCinema = async (req, res) => {
    try {
        const { id } = req.params

        const cinemaId = await deleteCinema(id)

        return res.status(200).json({
            message: 'Cinema deleted'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Error when deleting'
        })
    }
}
export const ctrlEditCinema = async (req, res) => {
    try {
        const cinema = req.body
        const { id } = req.params

        const newcinema = await updateCinema(id, cinema)

        return res.status(200).json({
            message: 'Cinema Edited successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when edit cinema'
        })
    }
}

