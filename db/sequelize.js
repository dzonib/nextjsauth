const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://dzonib:123456@localhost:5433/nextauth')


module.exports = sequelize