const Customer = require('./../model/customerModel')

const customerQuestion = (server) => {
  server.post('/customer', async (req, res) => {
    const { name, email, surname, Mobile_Number,Question} = req.body
   
    try {
      const user = await new Customer({
        name,
        email,
        surname,
        Mobile_Number,
        Question

        
      }).save()
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
    }

  })
}

module.exports = {customerQuestion}


