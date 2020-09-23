import React, { useState } from 'react'
import axios from 'axios'

function CompanyInformation () {
  const [credentials, setCredentials] = useState({
    name: "", surname: "", email: "", Mobile_Number: "",
    Question: ""
  })
  const submit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/customer', credentials)
      setCredentials(data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <h1>Company information</h1>
      <br/>
      <form onSubmit={(e) => submit(e)}>
      <div class="input-group">
        <input type='text' placeholder='name' name="name" class="form-control"
          value={credentials.name}
          required
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
        <br />
        <div class="input-group">
        <input type='text' placeholder='Surname' name="surname" class="form-control"
          value={credentials.surname} required
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
        <br />
        <div class="input-group">
        <input type='number' placeholder='Mobile Number' name="Mobile_Number" class="form-control"
        required
          value={credentials.Mobile_Number}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
        <br />
        <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input type='email' placeholder='email address' name="email" class="form-control"
        required
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
        <br />
        <div class="form-group">
        <label for="question">Question:</label>
        <textarea placeholder='post your question' name="Question"
        required
          value={credentials.Question} class="form-control" rows="5" id="question"
          onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
        <br />
        <input type='submit' class="btn btn-primary"/>
      </form>
    <br/>
      <a href='/company' class="btn btn-info" role="button">back</a>
    </div>
  )
}

export default CompanyInformation