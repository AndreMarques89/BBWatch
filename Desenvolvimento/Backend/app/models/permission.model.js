const Sequelize = require('sequelize')
const db = require('../../config/db')

const permission = db.define(
  'Permissao',
  {
    nome: { type: Sequelize.STRING }
  },
  { tableName: 'Permissao_teste' }
)

module.exports = permission
