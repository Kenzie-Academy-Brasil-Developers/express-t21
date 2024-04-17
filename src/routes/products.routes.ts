import { Router } from "express";
import { productsControllers } from "../controllers/products.controller";

export const productsRouter = Router();

// Associando a lógica aos respectivos endereços
productsRouter.post("/", productsControllers.create);

productsRouter.get("/", productsControllers.get);

productsRouter.get("/:id", productsControllers.getOne);

productsRouter.delete("/:id", productsControllers.remove);

productsRouter.patch("/:id", productsControllers.update);
