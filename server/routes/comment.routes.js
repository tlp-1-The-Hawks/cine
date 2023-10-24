import { Router } from "express";
import {
    ctrlAddcomment,
    ctrlDeleteComment,
    ctrlEditComment,
    ctrlGetAllcomment,
    ctrlGetCommentById
} from "../controllers/comment.controllers.js";


const commentRouter = Router();

commentRouter.post('/comment/:movieId/:userId', ctrlAddcomment);

commentRouter.get('/comment/:id', ctrlGetCommentById);

commentRouter.get('/comment', ctrlGetAllcomment);

commentRouter.put('/comment/:id', ctrlEditComment);

commentRouter.delete('/comment/:id', ctrlDeleteComment);

export { commentRouter }