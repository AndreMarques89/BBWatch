const contactController = require('../controllers/contact.controller')
module.exports = {
  getAll: async () => {
    let res = await contactController.getAll()
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
