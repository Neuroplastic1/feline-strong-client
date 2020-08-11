import React from 'react'
import { Link } from 'react-router-dom'

const PlanForm = ({ props, plan, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Date</label>
      <input
        placeholder="date"
        value={plan.date}
        name="date"
        onChange={handleChange}
      />
    </div>
    <div>
      <label>plan</label>
      <input
        placeholder="plan"
        value={plan.plan}
        name="plan"
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Nutrition</label>
      <input
        placeholder="Kibbles"
        value={plan.nutrition}
        name="nutrition"
        onChange={handleChange}
      />
    </div>
    <br />
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to={cancelPath}>
      <button className="btn btn-danger">Cancel</button>
    </Link>
  </form>
)

export default PlanForm
