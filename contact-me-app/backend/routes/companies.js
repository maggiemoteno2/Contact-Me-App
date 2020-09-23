const Company = require('./../model/companiesModel')

const postCompanies = (server) => {
  server.post('/company', async (req, res) => {
    const { name, email, website_address, physical_address,Phone_Number} = req.body
    try {
      const company = await new Company({
        name,
        email,
        website_address,
        physical_address,
        Phone_Number


      }).save()
      res.status(201).json(company)
    } catch (e) {
      console.log(e)
    }

  })
}

const getCompanies = (server) => {
  server.get('/company', async (req, res) => {
    try {
      const getAllCompanies = await Company.find()
      res.status(200).json(getAllCompanies)
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports = { postCompanies, getCompanies }