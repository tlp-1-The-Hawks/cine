import { getLocationByProvince } from "../models/location.model.js"
export const ctrlGetLocationByProvince = async (req,res) => {
    try {
        const {provinceId} = req.params

        const location = await getLocationByProvince(provinceId)

        res.status(200).json(location)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'error get location'
        })
    }
}