import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';
import { categoryServices } from '../services';
import { AppDataSource } from "../data-source";
import { categoryRepository } from '../repositories';
const verifyCategoriesExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const categoryId = Number(req.params.id);
    
    const category = await categoryRepository.findOneBy({id: categoryId})
    if (!category) throw new AppError("Category not found", 404);
    next();
};

export default verifyCategoriesExists;