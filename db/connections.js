const { Sequelize } = require('sequelize');
require('dotenv').config();

const enviroment = process.env.NODE_ENV || 'dev';
let connection = {};

if(enviroment == 'production'){
  connection = {
    dbname: process.env.PRODDATABASE,
    dbuser: process.env.PRODDATABASEUSER,
    dbpw: process.env.PRODDATABASEPW,
    host: process.env.PRODDATABASEHOST,
  }
}else{
  connection = {
    dbname: process.env.DEVDATABASE,
    dbuser: process.env.DEVDATABASEUSER,
    dbpw: process.env.DEVDATABASEPW,
    host: process.env.DEVDATABASEHOST,
  }
}

const sequelize = new Sequelize(connection.dbname, connection.dbuser, connection.dbpw, {
  host: connection.host,
  port: 3306,
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;
