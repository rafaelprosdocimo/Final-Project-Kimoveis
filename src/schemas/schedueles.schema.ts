import {z } from "zod";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string().or(z.date()),
    hour: z.string(),
    realEstateId: z.number().positive(),
    userId: z.number().positive()
});

const scheduleCreateSchema = scheduleSchema.omit({
    id: true
});

export { scheduleSchema, scheduleCreateSchema };	