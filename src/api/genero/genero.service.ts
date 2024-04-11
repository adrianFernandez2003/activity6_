import connection from '../../bd/mysqlConnection';
import { Gender } from '../genero/genero.interface';

export class GenderService {

    static async getGenderById(idGender: string): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM genero WHERE IdGendero = ?`;
            connection.query(query, [idGender], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getGenders(): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM genero`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createGenders(GendersData: Omit<Gender, 'idGenero'>): Promise<Gender> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `INSERT INTO genero SET ?`;
            connection.query(query, GendersData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idGenero: insertedId, ...GendersData });
                }
            });
        });
    }
} 