import { Category, RealEstate } from "../entities";
import { categoryCreate } from "../interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";

const create = async (payload: categoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const findAll = async (): Promise<Array<Category>> => {
  const categories: Category[] = await categoryRepository.find();
  return categories;
};

const findRealEstatesById = async (categoryId: number): Promise<RealEstate[]> => {
  const realEstates = await realEstateRepository
  .createQueryBuilder("realEstate")
  .innerJoinAndSelect("realEstate.category", "category", "category.id = :categoryId", { categoryId })
  .getMany();
  return realEstates;
}

export default { create , findAll, findRealEstatesById};