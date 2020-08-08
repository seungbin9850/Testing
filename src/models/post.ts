import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class Post extends Model {
    id: string;
    title: string;
    content: string;
}

Post.init (
    {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "Post"
    }
)