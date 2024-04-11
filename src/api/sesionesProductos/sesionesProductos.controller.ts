import { Request, Response } from "express";
import { ProductSessionsService } from "./sesionesProductos.service";

export class userController  {
    static async getProductSessionById(req: Request, res: Response) {
        try {
            const productSession = req.params.id;
            const session = await ProductSessionsService.getProductSessionById(productSession);
            res.json(session);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getProductSessions(_req: Request, res: Response) {
        try {
            const ProductSessions = await ProductSessionsService.getProductSessions();
            res.json(ProductSessions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}