import { User } from "../../models/user";

export const findOneById = async (userId: string): Promise<User> => {
  try {
    const user: any = await User.findOne({ where: { userId } });
    return user;
  } catch (e) {
    throw e;
  }
};

export const create = async (
  name: string,
  userId: string,
  password: string
) => {
  await User.create({ name, userId, password });
};
