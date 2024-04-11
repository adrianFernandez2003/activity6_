import express from 'express'
import { userController } from './productos.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',userController.getProducts)
ProductSessionsRouter.get('/:id',userController.getProductById)

export default ProductSessionsRouter