import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddCommnet,
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddCommnet);

export default apiRouter;
