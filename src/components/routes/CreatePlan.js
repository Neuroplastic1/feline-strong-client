import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PlanForm from './../shared/PlanForm'
import messages from './../AutoDismissAlert/messages'

const PlanCreate = (props) => {
  const [plan, setPlan] = useState({ date: '', plan: '', nutrition: '' })

  const [createdPlanId, setCreatedPlanId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedPlan = Object.assign({}, plan, updatedField)
    setPlan(editedPlan)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const { msgAlert } = props
    axios({
      url: `${apiUrl}/fitnessPlans/`,
      method: 'POST',
      headers: {
        'Authorization': `Token ${props.user.token}`
      },
      data: { fitnessPlan: plan }
    })
      // .then(res => console.log(res))
      .then(res => setCreatedPlanId(res.data.id))
      .then(() => msgAlert({
        heading: 'Plan Created',
        message: messages.createListSuccess,
        variant: 'success'
      }))
      .catch(error => {
        setPlan({ date: '', plan: '', nutrition: '' })
        msgAlert({
          heading: 'Create plan failed: ' + error.message,
          message: messages.createListFailure,
          variant: 'danger'
        })
      })
  }

  if (createdPlanId) {
    return <Redirect to={`/plans/${createdPlanId}`} />
  }

  return (
    <div className= "center">
      <h4>Create Fitness Plan Form</h4>
      <PlanForm
        plan={plan}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/fitnessPlans/'
      />
    </div>
  )
}

export default PlanCreate
