import { addSeating, getSeatingsByHallAndDate } from "../models/seating.mode.js"

export const ctrlAddSeating = async (req, res) => {
    try {
        const seating = req.body
        const { hallId } = req.params

        const newSeating = await addSeating(seating, hallId)

        res.status(200).json(newSeating)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error adding seating'
        })
    }
}

export const ctrlGetSeatingsByHallAndDate = async (req, res) => {
    try {
        const { hallId, dateId } = req.params

        const seatings = await getSeatingsByHallAndDate(hallId, dateId)

        res.status(200).json(seatings)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error get seatings'
        })
    }
}