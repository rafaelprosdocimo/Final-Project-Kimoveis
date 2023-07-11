import { schedueleRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
    const scheduele = schedueleRepository.create(payload);
    await schedueleRepository.save(scheduele);
    return scheduele;
}

export default {create}; 