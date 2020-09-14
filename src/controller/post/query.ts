import { Post } from "../../models/post";
import uuid4 from "uuid4";

export const mkId = async (): Promise<string> => {
    const id = await uuid4().split("-");
    return id[2] + id[1] + id[0] + id[3] + id[4]
}

export const writeOne = async (id: string, title: string, content: string, writerId: string): Promise<Post> => {
    return await Post.create({ id, title, content, writerId });
}