
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { RealEstate, User } from "../entities";
import { AppError } from "../errors";
import { realEstateRepository, userRepository } from "../repositories";

export const verifySchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const data = req.body;
    const  userId  = res.locals.userId;
    const realEstateSchedules = await realEstateRepository.createQueryBuilder("real_estate").
    select(["real_estate", "schedules_re"]).
    innerJoin("real_estate.schedules", "schedules_re").
    where("real_estate.id = :id", {id: data.realEstateId}).
    andWhere("schedules_re.date = :date", {date: data.date}).
    andWhere("schedules_re.hour = :hour", {hour: data.hour}).
    getOne()

    if(realEstateSchedules){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const userSchedules = await userRepository.createQueryBuilder("users").
    select(["users", "schedules_us"]).
    innerJoin("users.schedules", "schedules_us").
    where("users.id = :id", {id: userId}).
    andWhere("schedules_us.date = :date", {date: data.date}).
    andWhere("schedules_us.hour = :hour", {hour: data.hour}).
    getOne()

    if(userSchedules){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

