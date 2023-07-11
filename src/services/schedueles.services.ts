import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import { ScheduleCreate } from "../interfaces";
import { realEstateRepository, schedueleRepository } from "../repositories";

const create = async (payload: ScheduleCreate): Promise<void> => {
    const scheduele = schedueleRepository.create(payload);
    await schedueleRepository.save(scheduele);
}

const readAllByRealEstateId = async (realEstateId: number): Promise<RealEstate | null> => {
    realEstateId = Number(realEstateId)
    const schedulesRealEstate = await AppDataSource.createQueryBuilder(RealEstate, "real_estate").
    innerJoinAndSelect("real_estate.address", "address").
    innerJoinAndSelect("real_estate.category", "category").
    innerJoinAndSelect("real_estate.schedules", "schedules").
    innerJoinAndSelect("schedules.user", "user").
    where("real_estate.id = :id", {id: realEstateId}).
    getOne()

    return schedulesRealEstate 


}

export default {create, readAllByRealEstateId}; 