import mysql from "mysql";
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'alecrmjafm',
    user: 'adrian',
    password: '123'
});

export default connection;  