import connection from '../../bd/mysqlConnection';
import { Product } from '../productos/productos.interface';

export class ProductsService {

    static async getProductById(idProduct: string): Promise<Product | undefined> {
        return new Promise<Product>((resolve, reject) => {
            const query = `SELECT * FROM productos WHERE IdProducto = ?`;
            connection.query(query, [idProduct], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getProducts(): Promise<Product | undefined> {
        return new Promise<Product>((resolve, reject) => {
            const query = `SELECT * FROM productos`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createProducts(ProductsData: Omit<Product, 'idProduct'>): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            const query = `INSERT INTO productos SET ?`;
            connection.query(query, ProductsData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idProduct: insertedId, ...ProductsData });
                }
            });
        });
    }
} 