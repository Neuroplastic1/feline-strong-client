import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from './../../apiConfig'

import messages from './../AutoDismissAlert/messages'

const Plans = (props) => {
  const [plans, setPlans] = useState([])

  const { msgAlert } = props
  useEffect(() => {
    axios({
      url: `${apiUrl}/fitnessPlans`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(res => {
        setPlans(res.data)
      })
      .then(() => msgAlert({
        heading: 'Showing all plans',
        message: messages.showPlansSuccess,
        variant: 'primary'
      }))
      .catch(error => {
        setPlans({ date: '', plan: '', nutrition: '' })
        msgAlert({
          heading: 'Failed to show all lists ' + error.message,
          message: messages.showPlansFailure,
          variant: 'danger'
        })
      })
  }, [])

  const plansJsx = plans.map(plan => (
    <div key={plan.id}>
      <li>
        <Link to={`/plans/${plan.id}/`}>{plan.date}</Link>
      </li>
    </div>
  ))
  return (
    <div className="list-style, list-display, center">
      <h4>Fitness Plans</h4>
      <div>
        <ul>
          {plansJsx}
        </ul>
      </div>
      <div>
        <Link to={'/create-plan/'}>
          <button className="button btn btn-primary" >Create plan</button>
        </Link>
      </div>
    </div>
  )
}

export default Plans
