import { Request, Response } from "express";
import { customerService } from "./clientes.service";

export class customerController  {
    static async getCustomerById(req: Request, res: Response) {
        try {
            const customerId = req.params.id;
            const customer = await customerService.getCustomerById(customerId);
            res.json(customer);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getCustomers(_req: Request, res: Response) {
        try {
            const Adress = await customerService.getCustomer();
            res.json(Adress);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}