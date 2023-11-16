import { getAllProvinces } from "../models/Province.model.js";


export const ctrlGetAllProvinces = async (req,res) => {
    try {
        const provinces = await getAllProvinces()

        res.status(200).json(provinces)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error get all provinces'
        })
    }
}