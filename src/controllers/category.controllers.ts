import { Request, Response } from "express";
import { categoryServices } from "../services";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
  const categories: Array<Category> = await categoryServices.findAll();
  return res.status(200).json(categories);
};

const readRealEstatesById = async (req: Request, res: Response): Promise<Response> => {
  const categoryId = Number(req.params.id);

  const readRealEstates = await categoryServices.findRealEstatesById(categoryId);
  return res.status(200).json(readRealEstates);
};

export default { create , readAll, readRealEstatesById};