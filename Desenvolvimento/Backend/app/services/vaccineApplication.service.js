const vaccineApplicationController = require('../controllers/vaccineApplication.controller')
module.exports = {
  getAll: async () => {
    let res = await vaccineApplicationController.getAll()
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
