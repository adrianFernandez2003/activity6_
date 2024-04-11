import express from 'express'
import { customerController } from './clientes.controller';

const adressRouter = express.Router();

adressRouter.get('/',customerController.getCustomers)
adressRouter.get('/:id',customerController.getCustomerById)

export default adressRouter