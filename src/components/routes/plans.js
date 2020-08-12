import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from './../../apiConfig'

import messages from './../AutoDismissAlert/messages'

const Plans = (props) => {
  const [plans, setPlans] = useState([])

  const { msgAlert } = props
  console.log(props)
  useEffect(() => {
    axios({
      url: `${apiUrl}/fitnessPlans`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(res => {
        console.log(res.data)
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
    <div className="list-style">
      <h4>Fitness Plan</h4>
      <div className="center">
        <div className="list-display">
          <ul>
            {plansJsx}
          </ul>
        </div>
      </div>
      <Link to={'/create-plan/'}>
        <button className="button btn btn-success" >Create plan</button>
      </Link>
    </div>
  )
}

export default Plans
