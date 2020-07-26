import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class User extends Model {
    name: string;
    userId: string;
    password: string;
    accessToken: string;
}

User.init (
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accessToken: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: "User"
    }
)