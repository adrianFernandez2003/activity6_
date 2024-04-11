
import connection from '../../bd/mysqlConnection';
import { ProductSessions } from '../sesionesProductos/sesionesProductos.interface';

export class ProductSessionsService {

    static async getProductSessionById(fk_sesion: string): Promise<ProductSessions | undefined> {
        return new Promise<ProductSessions>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos WHERE fk_sesion = ?`;
            connection.query(query, [fk_sesion], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getProductSessions(): Promise<ProductSessions | undefined> {
        return new Promise<ProductSessions>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createProductSessions(ProductSessionsData: Omit<ProductSessions, 'fk_sesion'>): Promise<ProductSessions> {
        return new Promise<ProductSessions>((resolve, reject) => {
            const query = `INSERT INTO sesiones_productos SET ?`;
            connection.query(query, ProductSessionsData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ fk_sesion: insertedId, ...ProductSessionsData });
                }
            });
        });
    }
    
    
}