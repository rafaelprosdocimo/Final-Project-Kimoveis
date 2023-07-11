import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";
import { realEstateControllers } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    middlewares.validateBody(realEstateCreateSchema),
    middlewares.verifyAddress,

    realEstateControllers.create
);

realEstateRouter.get(
    "",
    realEstateControllers.getAll
);