import express from 'express'
import { userController } from './sesiones.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',userController.getSessions)
ProductSessionsRouter.get('/:id',userController.getSessionById)

export default ProductSessionsRouter