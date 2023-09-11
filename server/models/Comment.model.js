import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const commentModel = sequelize.define(
    'comment', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
})

//services
export async function addcomment(description, userId) {
    const newcomment = {
        description,
        userId
    }
    return await commentModel.create(newcomment)
}

export async function getAllComments() {
    return commentModel.findAll() ?? null
}

export async function getCommentByid(id) {
    return commentModel.findOne({
        where: {
            id
        }
    })
}

export async function editComment(id, comment) {
    const newcomment = await commentModel.findOne({
        where: {
            id
        }
    })

    return await newcomment.update(comment)
}

export async function deleteComment(id) {
    return await commentModel.destroy({
        where: {
            id
        }
    })
}