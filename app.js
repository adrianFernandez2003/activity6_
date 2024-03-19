var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'alecrmjafm',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion establecida');
    }
})
conexion.end();