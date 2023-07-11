import { z}  from "zod";
import { categoryCreateSchema, categorySchema, returnRealEstateByCategorySchema } from "../schemas";

type categoryReturn = z.infer<typeof categorySchema>;
type categoryCreate = z.infer<typeof categoryCreateSchema>;
type returnRealEstateByCategory = z.infer<typeof returnRealEstateByCategorySchema>;

export { categoryReturn, categoryCreate, returnRealEstateByCategory };