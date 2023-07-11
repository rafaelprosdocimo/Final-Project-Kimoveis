import { z}  from "zod";
import { categoryCreateSchema, categorySchema } from "../schemas";

type categoryReturn = z.infer<typeof categorySchema>;
type categoryCreate = z.infer<typeof categoryCreateSchema>;

export { categoryReturn, categoryCreate };