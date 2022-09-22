import mysql from 'mysql';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dlinenode'
});

export {connection};