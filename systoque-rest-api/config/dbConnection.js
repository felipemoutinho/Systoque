const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'systoque'
});

console.log('pool criada');

connection.on('release', () => console.log('pool => conexão retornada'));

process.on('SIGINT',()=>
    connection.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechada');
        process.exit(0);
    })
);

module.exports = connection;