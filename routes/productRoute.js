import express from "express";
import {
	addProduct,
	listProducts,
	removeProduct,
	singleProductInfo,
} from "../controllers/productController.js";

const productRouter = express.Router();
productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProductInfo);
productRouter.get("/list", listProducts);

export default productRouter;
