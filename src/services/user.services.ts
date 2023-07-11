import { DeepPartial } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserCreate, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepository.create(payload);
    await userRepository.save(user);
    return userReturnSchema.parse(user);
}
const read = async (): Promise<Array<UserReturn>> => {
    const users: User[] = await userRepository.find();
    const usersWithoutPassword: UserReturn[] = users.map((user: User) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
    return usersWithoutPassword;
}
const destroy = async (user: User): Promise<void> => {
    await userRepository.softRemove(user);
}

const update = async (user: User, payload: DeepPartial<User>): Promise<UserReturn> => {

    const updatedUser: User = userRepository.merge(user, payload);
    await userRepository.save(updatedUser);
    const userWithoutPassword: UserReturn = userReturnSchema.parse(updatedUser);

    return userWithoutPassword;
}


export default {create,read,destroy, update}; 