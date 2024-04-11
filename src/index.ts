import express from 'express'
import userRouter from './api/usuarios/usuarios.routes';
import sessionRouter from './api/sesionesProductos/sesionesProductos.routes';
import sesionRouter from './api/sesiones/sesiones.routes';
import productRouter from './api/productos/productos.routes';
import genderRouter from "./api/genero/genero.routes"
import adressRouter from "./api/direccion/direccion.routes"
import customerRouter from "./api/clientes/clientes.routes"
import categoryRouter from "./api/categorias/categorias.routes"
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get('/', (_req,res) => {
    res.send('Hello world!!')
});
app.use('/api/user', userRouter)
app.use('/api/user', userRouter)
app.use('/api/productSession', sessionRouter)
app.use('/api/session', sesionRouter)
app.use('/api/Product', productRouter)
app.use('/api/Gender', genderRouter)
app.use('/api/Adress', adressRouter)
app.use('/api/Customer', customerRouter)
app.use('/api/Category', categoryRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});