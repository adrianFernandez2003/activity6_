import mysql from "mysql";
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'alecrmjafm',
    user: 'root',
    password: ''
});

export default connection;