import { Router } from "express";
import middlewares from "../middlewares";
import { schedueleControllers } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    schedueleControllers.create
);