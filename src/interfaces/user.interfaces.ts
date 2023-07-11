import { z } from "zod";
import {userCreateSchema, userReadSchema, userReturnSchema, userSchema, userUpdateSchema} from "../schemas"
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = z.infer<typeof userUpdateSchema>;

type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserReturn, UserUpdate, UserRepo }; 