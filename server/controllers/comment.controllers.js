import {
    addcomment,
    deleteComment,
    editComment,
    getAllComments,
    getCommentByid
} from "../models/Comment.model.js";

export const ctrlAddcomment = async (req, res) => {
    try {
        const { movieId, userId } = req.params

        const { description, title } = req.body

        const newcomment = await addcomment(title, description, userId, movieId)

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

export const ctrlGetAllcomment = async (req, res) => {
    try {
        const comments = await getAllComments()

        return res.status(200).json(comments)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when getall comments'
        })
    }
}

export const ctrlGetCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await getCommentByid(id)
        return res.status(200).json(comment)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when get comment by id'
        })
    }
}

export const ctrlEditComment = async (req, res) => {
    try {
        const { id } = req.params
        const comment = req.body

        const updatecomment = await editComment(id, comment)

        return res.status(200).json({
            message: 'Comment edited'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when edit comment'
        })
    }
}

export const ctrlDeleteComment = async (req, res) => {
    try {
        const { id } = req.params

        const deletedComment = await deleteComment(id)

        return res.status(200).json({
            message: 'Comment deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error when deleting comment'
        })
    }
}