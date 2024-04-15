//Express
// API Rest com o Express

import express, { Request, json } from "express";


export const app = express();
// A minha API seja capaz de processar o formato JSON
app.use(json());

// Criar rotas de API

//app.get - Rotas de GET
//app.post - Rotas de POST
//patch, put, delete
/*
app.get("/", (request, response) => {
    return response.status(201).json({ message: "Olá mundo!"});
});

app.get("/products/:id/:name", (request, response) => {
    // params - parâmetros obrigatórios definidos da rota 
    // identicador e slug
    // sempre virão como string   
    //console.log(request.params);

    // headers - cabeçalho da requisição - costuma carregar autorização e configurações da requisição
    //console.log(request.headers);

    // query - parâmetros opcionais (query) - filtros, busca, paginação
    // somente valores em string
    console.log(request.query);

    return response.send("Deu boa"); 
})

app.post("/products", (request, response) => {
    // request - Tudo que vem de fora da minha api
    // body - corpo da requisição
    console.log(request.body);

    return response.send("Deu boa");
});
*/

interface IProduct{
    id: number;
    name: string;
    price: number;
}

export const productList: IProduct[] = [];
let id = 1;

app.post("/products", (request, response) => {
    const newProduct: IProduct = {
        id,
        name: request.body.name,
        price: request.body.price
    }

    productList.push(newProduct);

    id++;

    return response.status(201).json(newProduct);
});

app.get("/products", (request, response) => {
    return response.status(200).json(productList);
});

app.get("/products/:id", (request, response) => {
    const product = productList.find(product => product.id === Number(request.params.id));

    return response.status(200).json(product);
});

app.delete("/products/:id", (request, response) => {
    const index = productList.findIndex(product => product.id === Number(request.params.id));

    if(index === -1){
        return response.status(404).json({ message: "Product not found"});
    }

    productList.splice(index, 1);

    return response.status(204).json();
});


// Inicia a minha API (localmente)

app.listen(3001, () => {
    console.log("API sucessfully started at port 3001");
});