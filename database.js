const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root', 
    password : '', 
    database : 'register_db' 
}).promise();
module.exports = dbConnection;