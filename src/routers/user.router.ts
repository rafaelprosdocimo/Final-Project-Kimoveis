import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.uniqueEmail,
  middlewares.validateBody(userCreateSchema),

  userController.create
);
userRouter.get("", 
  middlewares.verifyToken,  
  middlewares.verifyUserPermission,
  userController.read
);


userRouter.delete("/:id", 
middlewares.verifyIdExists,
middlewares.verifyToken,
middlewares.verifyUserPermission,
  userController.destroy
); 

userRouter.patch("/:id",
middlewares.validateBody(userUpdateSchema),
middlewares.verifyIdExists,
middlewares.verifyToken,
middlewares.isAdminOrOwner,
middlewares.uniqueEmail,

  userController.update
);