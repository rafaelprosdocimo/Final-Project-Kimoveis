import { RealEstateResult, RealEstateCreate, RealEstateResponse } from "../interfaces";
import {addressRepository, categoryRepository, realEstateRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
    const newAddress = addressRepository.create(payload.address);
    await addressRepository.save(newAddress);

    const category = await categoryRepository.findOne({ where: { id: payload.categoryId } });
    if (!category) {
      throw new Error("Category not found");
    }
    
    
    const newRealEstate: any = realEstateRepository.create({
        ...payload,
        address: newAddress,
        category: category!,
      });
    await realEstateRepository.save(newRealEstate);
    return newRealEstate;
}

const getAll = async (): Promise<any> => {
  const realEstates = await realEstateRepository.find({ relations: ["address"] });
  return realEstates;
}


export default {create, getAll}; 

