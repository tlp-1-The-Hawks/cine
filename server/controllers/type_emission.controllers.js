import { getAllTypesEmissions } from "../models/TypeEmission.model.js";

export const ctrlGetAllTypesEmissions = async (req, res, next) => {
    try {
        const types_emissions = await getAllTypesEmissions()

        res.status(200).json(types_emissions);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error getting all types emissions'
        })
    }
};