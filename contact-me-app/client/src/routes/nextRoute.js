import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'
import ListOfCompanies from './../components/ListOfCompanies'
import CustomerSection from './../components/CustomerSection'
import RegisterCompany from './../components/RegisterCompany'


function route () {
  return (
    <div>
      <Router history={history}>
        <Route exact path='/company' component={props => <ListOfCompanies {...props} />} />
        <Route exact path='/customer' component={props => <CustomerSection {...props} />} />
        <Route exact path='/' component={props => <RegisterCompany {...props} />} />
      </Router>
    </div>
  )
}

export default route