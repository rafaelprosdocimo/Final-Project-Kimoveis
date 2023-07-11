import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoryControllers } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.uniqueCategory,
  categoryControllers.create
);

categoryRouter.get(
  "", 
  categoryControllers.readAll
);

categoryRouter.get(
  "/:id/realEstate",
  middlewares.verifyIdExists,
  categoryControllers.readRealEstatesById
);

