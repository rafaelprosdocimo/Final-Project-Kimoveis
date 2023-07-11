import { Request, Response } from 'express';
import { Schedule } from '../entities';
import { schedueleServices } from '../services';

const create = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await schedueleServices.create(req.body);
    return res.status(201).json({ "message": "Schedule created"});
}

const listSchedulesByRealEstateController = async (req: Request, res: Response) => {
console.log(req.params.id)
    const realEstateId = parseInt(req.params.id)

    const schedulesRealEstate = await schedueleServices.readAllByRealEstateId(realEstateId)

    return res.json(schedulesRealEstate)
}

export default{ create, listSchedulesByRealEstateController}; 