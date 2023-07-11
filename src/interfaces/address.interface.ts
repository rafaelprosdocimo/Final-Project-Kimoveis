import { z } from "zod";
import { addressCreateSchema, addressSchema, addressCheckNumberSchema } from "../schemas";
import { DeepPartial } from "typeorm";

type TAddressResult = z.infer<typeof addressSchema>;
type TAddressCreate = z.infer<typeof addressCreateSchema>;
type TAddressesRead = DeepPartial<TAddressResult>[];
type TAddressCreateNumber = z.infer<typeof addressCheckNumberSchema>;

export { TAddressCreate, TAddressResult, TAddressesRead, TAddressCreateNumber };