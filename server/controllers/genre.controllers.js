import { addGenre, getAllGenre } from "../models/genre.models.js"

export const ctrlAddgenre = async (req, res) => {
    try {
        const {genre} = req.body

        const createGenre = await addGenre(genre)
        
        res.status(200).json(createGenre)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error add genre'
        })
    }
}

export const ctrlGetAllGenre = async (req,res) => {
    try {
        const genres = await getAllGenre()

        res.status(200).json(genres)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Erro get all genre'
        })
    }
}