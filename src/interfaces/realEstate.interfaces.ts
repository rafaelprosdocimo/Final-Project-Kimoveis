import { z } from "zod";
import { realEstateCreateSchema, realEstateSchema, realEstateResponseSchema } from "../schemas";
import { DeepPartial } from "typeorm";

type RealEstateResult = z.infer<typeof realEstateSchema>;
type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateResponse = z.infer<typeof realEstateResponseSchema>;
type RealEstatesRead = DeepPartial<RealEstateResult>[];
type RealEstateRequest = z.infer<typeof realEstateSchema>
export { RealEstateCreate, RealEstateResult, RealEstatesRead, RealEstateResponse }; 