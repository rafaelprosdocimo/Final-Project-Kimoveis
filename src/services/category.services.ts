import { Category, RealEstate } from "../entities";
import { categoryCreate, returnRealEstateByCategory } from "../interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";
import { returnRealEstateByCategorySchema } from "../schemas";

const create = async (payload: categoryCreate): Promise<Category> => { 
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const findAll = async (): Promise<Array<Category>> => {
  const categories: Category[] = await categoryRepository.find();
  return categories;
};

const findRealEstatesById = async (categoryId: number): Promise<returnRealEstateByCategory> => {
  const realEstates = await categoryRepository.findOne({
    where: { id: categoryId },
    relations: {
      realEstate: true,
    },
  });
  const realEstatesReturn = returnRealEstateByCategorySchema.parse(realEstates);
  return realEstatesReturn;
}

export default { create , findAll, findRealEstatesById};