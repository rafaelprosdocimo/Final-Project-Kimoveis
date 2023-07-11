import { Request, Response } from 'express';
import { Schedule } from '../entities';
import { schedueleServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await schedueleServices.create(req.body);
    return res.status(201).json(realEstate);
}

export default{ create};