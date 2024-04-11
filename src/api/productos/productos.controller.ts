import { Request, Response } from "express";
import { ProductsService } from "./productos.service";

export class userController  {
    static async getProductById(req: Request, res: Response) {
        try {
            const ProductId = req.params.id;
            const Product = await ProductsService.getProductById(ProductId);
            res.json(Product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getProducts(_req: Request, res: Response) {
        try {
            const Products = await ProductsService.getProducts();
            res.json(Products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}