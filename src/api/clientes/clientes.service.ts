import connection from '../../bd/mysqlConnection';
import { Customer } from '../clientes/clientes.interface';

export class customerService {

    static async getCustomerById(idAdress: string): Promise<Customer | undefined> {
        return new Promise<Customer>((resolve, reject) => {
            const query = `SELECT * FROM clientes WHERE idCliente = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getCustomer(): Promise<Customer | undefined> {
        return new Promise<Customer>((resolve, reject) => {
            const query = `SELECT * FROM clientes`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

    static async createGenders(GendersData: Omit<Customer, 'idCliente'>): Promise<Customer> {
        return new Promise<Customer>((resolve, reject) => {
            const query = `INSERT INTO clientes SET ?`;
            connection.query(query, GendersData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ idCliente: insertedId, ...GendersData });
                }
            });
        });
    }
} 