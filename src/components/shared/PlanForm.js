import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
const PlanForm = ({ props, plan, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Date</label>
      <Form.Control
        placeholder="date"
        value={plan.date}
        name="date"
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <Form.Label>Plan</Form.Label>
      <Form.Control
        placeholder="plan"
        value={plan.plan}
        name="plan"
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label>Nutrition</label>
      <Form.Control
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
  </Form>
)

export default PlanForm
