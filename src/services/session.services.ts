import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { UserCreate, UserReturn } from "../interfaces";
import { SessionCreate, SessionReturn } from "../interfaces/session.interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";

const create = async ({
    email,
    password,
}: SessionCreate): Promise<SessionReturn> => {
    const queryUser: User | null = await userRepository.findOneBy({email});
    if(!queryUser){
        throw new AppError("Invalid credentials", 401);
    }

    const samePassword: boolean = await compare(password, queryUser.password);
    if(!samePassword){
        throw new AppError("Invalid credentials", 401);
    }
    
    const token: string = sign(
        {admin: queryUser.admin },
        process.env.SECRET_KEY!,
        { subject: queryUser.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    );


    return {token};
};

export default { create };
