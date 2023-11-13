import { addRequestCine, getRequestCine, deleteRequestCine } from "../models/RequestCinema.js"

export const ctrlAddRequestCine = async (req, res) => {
    try {
        const newRequestCine = await addRequestCine(req.body)

        res.status(200).json(newRequestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error add request'
        })
    }
}


export const ctrlGetRequestCine = async (req, res) => {
    try {
        const RequestCine = await getRequestCine()

        res.status(200).json(RequestCine)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error get requests'
        })
    }
}


export const ctrlDeleteCine = async (req, res) => {
    try {

        const { id } = req.params

        const RequestCine = await deleteRequestCine(id)

        res.status(200).json({
            mesagge: 'Request rejected'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error rejected requests'
        })
    }
}