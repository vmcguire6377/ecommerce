const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('ecommerce_db', 'root', 'Drm71vmm77!', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    // create connection to our database, pass in your MySQL information for username and password
/*const sequelize = new Sequelize('ecommerce', 'root', 'Drm71vmm77!', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});*/

module.exports = sequelize;
