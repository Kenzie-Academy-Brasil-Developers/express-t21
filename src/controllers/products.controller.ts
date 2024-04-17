import { Request, Response } from "express";
import { createProduct, getOneProduct, getProducts, removeProduct, updateProduct } from "../services/product.services";

// Lidando com os parâmetros de rotas - receber a requisição e emitir a resposta.

// Entradas (requisição) / Saídas (respostas)
const create = (request: Request, response: Response) => {
   const product = createProduct(request.body);

   return response.status(201).json(product);
};

const get = (request: Request, response: Response) => {
   const productList = getProducts();

   return response.status(200).json(productList);
};

const getOne = (request: Request, response: Response) => {
   const product = getOneProduct(Number(request.params.id));

   return response.status(200).json(product);
};

const remove = (request: Request, response: Response) => {
   removeProduct(Number(request.params.id)); 

   return response.status(204).json();
};

const update = (request: Request, response: Response) => {
   const product = updateProduct(Number(request.params.id), request.body);

   return response.status(200).json(product);
}

export const productsControllers = { create, get, getOne, remove, update };