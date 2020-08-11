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
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => setPlans(res.data))
      // .catch(console.error)

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
    <li key={plan.id}>
      <Link to={`/fitnessPlans/${plan.id}/`}>{plan.date}</Link>
    </li>
  ))
  return (
    <div className="list-style">
      <h4></h4>
      <div className="center">
        <div className="list-display">
          <ul>
            {plansJsx}
          </ul>
        </div>
      </div>
      <Link to={'/create-plans/'}>
        <button className="button btn btn-success" >Create plan</button>
      </Link>
    </div>
  )
}

export default Plans
