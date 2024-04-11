import express from 'express'
import { adressController } from './direccion.controller';

const adressRouter = express.Router();

adressRouter.get('/',adressController.getAdress)
adressRouter.get('/:id',adressController.getAdressById)

export default adressRouter