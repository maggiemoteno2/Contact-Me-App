const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname : { type: String, required: true },
  Mobile_Number : { type: String, required: true },
  email: { type: String, required: true },
  Question :{type:String , required: true},
 

})

var Customer = mongoose.model('Customer', CustomerSchema )


module.exports = Customer

