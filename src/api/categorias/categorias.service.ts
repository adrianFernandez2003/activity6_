import connection from '../../bd/mysqlConnection';
import { Category } from '../categorias/categorias.interface';

export class categoryService {

    static async getCategoryById(idAdress: string): Promise<Category | undefined> {
        return new Promise<Category>((resolve, reject) => {
            const query = `SELECT * FROM categorias WHERE idCategoria = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getCategories(): Promise<Category | undefined> {
        return new Promise<Category>((resolve, reject) => {
            const query = `SELECT * FROM categorias`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createGenders(GendersData: Omit<Category, 'idCategoria'>): Promise<Category> {
        return new Promise<Category>((resolve, reject) => {
            const query = `INSERT INTO categorias SET ?`;
            connection.query(query, GendersData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idCategoria: insertedId, ...GendersData });
                }
            });
        });
    }
} 