const Customer = require('./../model/customerModel')

const getActiveEnquiries  = (server) => {
    server.get('/enquires', async (req, res) => {
      try {
        const getAllEnquiries = await Customer.find()
        res.status(200).json(getAllEnquiries)
      } catch (e) {
        console.log(e)
      }
    })
  }

  module.exports = {getActiveEnquiries}