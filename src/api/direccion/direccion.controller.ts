import { Request, Response } from "express";
import { GenderService } from "./direccion.service";

export class adressController  {
    static async getAdressById(req: Request, res: Response) {
        try {
            const ProductId = req.params.id;
            const Product = await GenderService.getGenderById(ProductId);
            res.json(Product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getAdress(_req: Request, res: Response) {
        try {
            const Adress = await GenderService.getAdress();
            res.json(Adress);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}