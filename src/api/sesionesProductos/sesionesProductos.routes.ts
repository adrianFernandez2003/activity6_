import express from 'express'
import { userController } from './sesionesProductos.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',userController.getProductSessions)
ProductSessionsRouter.get('/:id',userController.getProductSessionById)

export default ProductSessionsRouter