import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
// drop table
sequelize.sync({ force: true });

export { Sequelize, sequelize };
