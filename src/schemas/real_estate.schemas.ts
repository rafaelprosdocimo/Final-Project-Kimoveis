import { z } from "zod";
import { addressSchema } from "./address.schema";
import { addressCreateSchema } from "./address.schema";
import { categorySchema } from "./categories.schemas";
const realEstateSchema = z.object({
    id: z.number().positive(),
    value: z.union([z.number().positive().default(0), z.string()]),
    size: z.number().positive().int(),
    address: addressCreateSchema,
    categoryId: z.number().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string().or(z.date()).optional(),
    updatedAt: z.string().or(z.date()).optional()
});
const realEstateResponseSchema = z.object({
    id: z.number().positive(), 
    value: z.union([z.number().positive().default(0), z.string()]),
    size: z.number().positive().int(),
    address: addressSchema,
    category: categorySchema,
    sold: z.boolean().default(false),
    createdAt: z.string().or(z.date()).optional(),
    updatedAt: z.string().or(z.date()).optional()
});
const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
});
const realEstatesSchema = realEstateSchema.array();


export { realEstateSchema, realEstateCreateSchema, realEstatesSchema, realEstateResponseSchema };