import connection from '../../bd/mysqlConnection';
import { Adress } from '../direccion/direccion.interface';

export class GenderService {

    static async getGenderById(idAdress: string): Promise<Adress | undefined> {
        return new Promise<Adress>((resolve, reject) => {
            const query = `SELECT * FROM direccion WHERE IdDireccion = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getAdress(): Promise<Adress | undefined> {
        return new Promise<Adress>((resolve, reject) => {
            const query = `SELECT * FROM direccion`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createGenders(GendersData: Omit<Adress, 'idDireccion'>): Promise<Adress> {
        return new Promise<Adress>((resolve, reject) => {
            const query = `INSERT INTO direccion SET ?`;
            connection.query(query, GendersData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idDireccion: insertedId, ...GendersData });
                }
            });
        });
    }
} 