import express from 'express'
import { genderController } from './genero.controller';

const ProductSessionsRouter = express.Router();

ProductSessionsRouter.get('/',genderController.getGenders)
ProductSessionsRouter.get('/:id',genderController.getGenderById)

export default ProductSessionsRouter