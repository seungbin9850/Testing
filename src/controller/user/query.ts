import { User } from "../../models/user";

export const findOneById = async (id: string): Promise<User> => {
    try {
        const user: any = await User.findOne({ where: { id } });
        return user;
    } catch (e) {
        throw e;
    }
}

export const create = async (name: string, userId: string, password: string) => {
    await User.create({ name, userId, password });
}