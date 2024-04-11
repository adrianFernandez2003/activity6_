import { Request, Response } from "express";
import { ProductSessionsService } from "./sesiones.service";

export class userController  {
    static async getSessionById(req: Request, res: Response) {
        try {
            const productSession = req.params.id;
            const session = await ProductSessionsService.getSessionById(productSession);
            res.json(session);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getSessions(_req: Request, res: Response) {
        try {
            const sessions = await ProductSessionsService.getSessions();
            res.json(sessions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}