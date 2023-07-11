import { z } from "zod";
import { scheduleCreateSchema, scheduleSchema } from "../schemas";

type ScheduleResult = z.infer<typeof scheduleSchema>;
type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export { ScheduleCreate, ScheduleResult }; 