const examController = require('../controllers/exam.controller')
module.exports = {
  getAll: async () => {
    let res = await examController.getAll()
    return res
  },
  get: async data => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async data => {
    return 'not implemented yet'
  }
}
