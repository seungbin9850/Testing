import express, { Request, Response, NextFunction } from "express";
import { sequelize } from "./config/config";
import morgan from "morgan";
import router from "./routes";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const app = express();

app.use(morgan("dev"));

sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("jwt-secret", process.env.JWT_SECRET);

app.use("/", router);

app.use((err, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("server on!");
});

export default app;
