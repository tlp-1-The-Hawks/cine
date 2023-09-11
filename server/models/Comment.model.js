import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { UserModel} from "./user_model.js"

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
    return commentModel.findAll({
        include: [
            {
                model: UserModel,
                as: 'User'
            }
        ]
    }) ?? null
}

export async function getCommentByid(id) {
    return commentModel.findOne({
        where: {
            id
        },
        include:{
            model: UserModel,
            as: 'User'
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