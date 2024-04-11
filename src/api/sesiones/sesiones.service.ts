import connection from '../../bd/mysqlConnection';
import { Session } from '../sesiones/sesiones.interface';

export class ProductSessionsService {

    static async getSessionById(idSesion: string): Promise<Session | undefined> {
        return new Promise<Session>((resolve, reject) => {
            const query = `SELECT * FROM sesiones WHERE idSesion = ?`;
            connection.query(query, [idSesion], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getSessions(): Promise<Session | undefined> {
        return new Promise<Session>((resolve, reject) => {
            const query = `SELECT * FROM sesiones`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createProductSessions(ProductSessionsData: Omit<Session, 'idSesion'>): Promise<Session> {
        return new Promise<Session>((resolve, reject) => {
            const query = `INSERT INTO sesiones SET ?`;
            connection.query(query, ProductSessionsData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idSesion: insertedId, ...ProductSessionsData });
                }
            });
        });
    }
} 