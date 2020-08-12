import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from './../AutoDismissAlert/messages'
const Plan = (props) => {
  const [plan, setPlan] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { msgAlert } = props
  console.log(props)
  useEffect(() => {
    axios({
      url: `${apiUrl}/fitnessPlans/${props.match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(res => {
        console.log(res.data)
        setPlan(res.data)
      })
      .then(() => msgAlert({
        heading: 'Showing selected plan',
        message: messages.showListSuccess,
        variant: 'primary'
      }))
      .catch(error => {
        setPlan({ date: '', plan: '', nutrition: '' })
        msgAlert({
          heading: 'Failed to show plan ' + error.message,
          message: messages.showPlanFailure,
          variant: 'danger'
        })
      })
  }, [])
  const destroy = () => {
    axios({
      url: `${apiUrl}/fitnessPlans/${props.match.params.id}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => msgAlert({
        heading: 'Plan Deleted',
        message: messages.deletePlanSuccess,
        variant: 'success'
      }))
      .catch(error => {
        setPlan({ date: '', plan: '', nutrition: '' })
        msgAlert({
          heading: 'Failed to delete' + error.message,
          message: messages.deletePlanFailure,
          variant: 'danger'
        })
      })
  }
  if (!plan) {
    return <p>Loading...</p>
  }
  if (deleted) {
    return (
      <Redirect to={{
        pathname: '/plans', state: { msg: 'Plan deleted!' }
      }} />
    )
  }

  return (
    <div className="list-style">
      <h4>{plan.date}</h4>
      <p>{plan.plan}</p>
      <p>{plan.nutrition}</p>
      <div className="center">
      </div>
      <br />
      <div>
        <button className="button btn btn-danger" onClick={destroy}>Remove Plan</button>
        <Link to={`/plans/${plan.id}/edit`}>
          <button className="button btn btn-warning">Edit Plan</button>
        </Link>
      </div>
      <div>
        <Link to='/plans'>Back to all plans</Link>
      </div>
    </div>
  )
}
export default Plan
