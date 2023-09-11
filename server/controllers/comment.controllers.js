import { addcomment } from "../models/Comment.model.js";

export const ctrlAddcomment = async (req, res) => {
    try {
        const { userId } = req.params
        const { description } = req.body

        const newcomment = await addcomment(description, userId)

        return res.status(200).json({
            message: 'Comment added successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error adding comment'
        })
    }
}