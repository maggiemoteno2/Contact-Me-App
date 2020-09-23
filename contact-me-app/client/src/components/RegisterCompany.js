import React, { useState} from 'react'
import axios from 'axios'

function DisplayDetails () {
  const [credentials, setCredentials] = useState({
    name: "", physical_address: "", email: "", website_address: "", Phone_Number: ""
  })
 

  const submit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('http://localhost:3000/company', credentials)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <div class="signup-form">
        <form onSubmit={(e) => submit(e)}>
          <h2>Register Company</h2>
          <p class="hint-text">Register Below</p>
          <div class="form-group">
            <div class="row">
              <div class="col"> <input type="name" class="form-control"
                name="name"
                value={credentials.name}
                placeholder="enter name"
                required
                onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} /></div>
            </div>
          </div>

          <div class="form-group">
            <input type="text"
              class="form-control"
              name="website_address"
              value={credentials.website_address}
              placeholder="enter your website address"
              required
              onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
            <input type="email"
              class="form-control"
              name="email"
              value={credentials.email}
              placeholder=" enter email"
              required
              onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
          <input name="Phone_Number"
              class="form-control"
              required
            value={credentials.Phone_Number} type="number" placeholder="Phone_Number"
            onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} />
          </div>
          <br />
          <div class="form-group">
            <input name="physical_address"
              class="form-control"
              value={credentials.physical_address}
              required
              type="text" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })} placeholder="physical_address" />
          </div>
          <br />
          <div class="form-group">
          <input class="btn btn-success btn-lg btn-block" type="submit" />
          </div>
        </form>
        <a href='/company'>View Registered Companies</a>
          
      </div>
    </div>
  )
}

export default DisplayDetails