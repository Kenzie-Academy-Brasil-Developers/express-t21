import express, { json } from "express";
import { productsRouter } from "./routes/products.routes";

export const app = express();

app.use(json());

app.use("/products", productsRouter);