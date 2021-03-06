const Sequelize = require('sequelize')
const db = require('../../config/db')
const child = require('./child.model')

const exam = db.define(
  'Exame',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url_pedido_digitalizado: { type: Sequelize.STRING },
    url_resultado_digitalizado: { type: Sequelize.STRING },
    realizado: { type: Sequelize.TINYINT },
    data_pedido: { type: Sequelize.DATE },
    data_realizacao: { type: Sequelize.DATE },
    observacao: { type: Sequelize.STRING },
    id_crianca: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: child,
        key: 'id'
      }
    }
  },
  { tableName: 'Exame' }
)

module.exports = exam
