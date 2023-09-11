import { Router } from "express";
import { ctrlAddcomment } from "../controllers/comment.controllers.js";

const commentRouter = Router();

commentRouter.post('/comment/:userId', ctrlAddcomment)

export { commentRouter }