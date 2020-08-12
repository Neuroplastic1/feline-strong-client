import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import PlanForm from '../shared/PlanForm'
import messages from './../AutoDismissAlert/messages'

const PlanEdit = props => {
  const [plan, setPlan] = useState({
    name: '',
    description: ''
  })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props
  //  functions like a componentDidMount
  useEffect(() => {
    axios({
      url: `${apiUrl}/fitnessPlans/${props.match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${props.user.token}`
      }
    })
      .then(res => setPlan(res.data))
      .catch(console.error)
  }, [])
  const handleChange = event => {
    event.persist()
    setPlan(prevPlan => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedPlan = Object.assign({}, prevPlan, updatedField)
      return editedPlan
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/fitnessPlans/${props.match.params.id}/`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token ${props.user.token}`
      },
      data: { fitnessPlan: plan }
    })
      .then(() => setUpdated(true))
      // .catch(console.error)
      .then(() => msgAlert({
        heading: 'Edited Plan',
        message: messages.editPlanSuccess,
        variant: 'success'
      }))
      .catch(error => {
        setPlan({ name: '', description: '' })
        msgAlert({
          heading: 'Failed to update ' + error.message,
          message: messages.editPlanFailure,
          variant: 'danger'
        })
      })
  }
  if (updated) {
    return <Redirect to={`/plans/${plan.id}/`} />
  }
  return (
    <div>
      <PlanForm
        plan={plan}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/fitnessPlans/${props.match.params.id}/`}
      />
    </div>
  )
}
export default PlanEdit
