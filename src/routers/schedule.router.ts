import { Router } from "express";
import middlewares from "../middlewares";
import { schedueleControllers } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.dateAndHour,
  middlewares.verifySchedule,
  middlewares.verifyIdRealEstateExists,

  schedueleControllers.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.verifyIdRealEstateExistsParams, 
  schedueleControllers.listSchedulesByRealEstateController
);
