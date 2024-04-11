import { Request, Response } from "express";
import { GenderService } from "./genero.service";

export class genderController  {
    static async getGenderById(req: Request, res: Response) {
        try {
            const ProductId = req.params.id;
            const Product = await GenderService.getGenderById(ProductId);
            res.json(Product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getGenders(_req: Request, res: Response) {
        try {
            const Products = await GenderService.getGenders();
            res.json(Products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}