import { Request, Response } from 'express';
import { User } from '../entities';
import { userServices } from '../services';
import { UserReturn } from '../interfaces';
import { userUpdateSchema } from '../schemas';

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.create(req.body);
    return res.status(201).json(user);
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const users: Array<UserReturn> = await userServices.read();
    return res.status(200).json(users);
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroy(res.locals.foundEntity);
    return res.status(204).json();
}

const update = async (req: Request, res: Response): Promise<Response> => {
    req.body = userUpdateSchema.parse(req.body);
    const user: UserReturn = await userServices.update(res.locals.foundEntity, req.body);
    return res.status(200).json(user);
}

export default{ create, read, destroy, update};