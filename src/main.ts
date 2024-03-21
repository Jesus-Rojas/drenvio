import express from "express";
import { AppDataSource } from "./modules/database/data-source";
import { ProductController } from "./modules/product/product.controller";

const app = express();
const port = process.env.PORT || 3000;

AppDataSource
  .initialize()
  .then(() => {
    app.get('/', (__, res) => {
      res.json('Welcome to api');
    });
    
    app.use('/', ProductController);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(error => console.log("Error: ", error));
