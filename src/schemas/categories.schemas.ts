import {z}  from "zod";

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
});

const categoryCreateSchema = categorySchema.omit({
    id: true
});

const returnRealEstateByCategorySchema = categorySchema.extend({
    realEstate: z.object({
      id: z.number(),
      value: z.string().or(z.number()),
      size: z.number(),
      sold: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string()
    }).array()
  });


export { categorySchema , categoryCreateSchema, returnRealEstateByCategorySchema};