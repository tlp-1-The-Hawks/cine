import { addRequestCine } from "../models/RequestCinema.js"

export const ctrlAddRequestCine = async (req,res) => {
    try {
        console.log(req.body)
        const newRequestCine = await addRequestCine(req.body)

        res.status(200).json(newRequestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error add request'
        })
    }
}