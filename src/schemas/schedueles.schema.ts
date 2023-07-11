import {z } from "zod";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive(),
});


const scheduleCreateSchema = scheduleSchema.omit({
    id: true
});

const returnScheduleSchema = scheduleSchema.extend({
    userId: z.number().positive()
}); 


export { scheduleSchema, scheduleCreateSchema, returnScheduleSchema };	