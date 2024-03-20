import express from "express";
import { ProductService } from "./product.service";
import { StatusCodes } from "http-status-codes";
import mongoose from 'mongoose';

const router = express.Router();
const productService = new ProductService();

router.get("/products", async (__, res) => {
  const products = await productService.findAllWithStockAvailable();
  res.send(products);
});

router.get("/price/:userId/:slugProduct", async (req, res) => {
  try {
    const { userId, slugProduct } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: StatusCodes.BAD_REQUEST, message: 'userId is invalid' });
    }

    const price = await productService.findProductWithSpecialPrice(
      slugProduct,
      new mongoose.Types.ObjectId(userId)
    );
    return res.json(price);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Product not found') {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ code: StatusCodes.NOT_FOUND, message: 'Product not found' });
      }
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ code: StatusCodes.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' });
  }
});

export { router as ProductController };
