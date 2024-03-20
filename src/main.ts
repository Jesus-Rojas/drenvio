import express from "express";
import { AppDataSource } from "./modules/database/data-source";

const app = express();
const port = process.env.PORT || 3000;

AppDataSource
  .initialize()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello World with Express and TypeORM!");
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => console.log("Error: ", error));
