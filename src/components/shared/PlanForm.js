import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
const PlanForm = ({ props, plan, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group, center">
      <label>Date</label>
      <Form.Control
        placeholder="date"
        value={plan.date}
        name="date"
        onChange={handleChange}
      />
      <Form.Label>Plan</Form.Label>
      <Form.Control
        placeholder="plan"
        value={plan.plan}
        name="plan"
        onChange={handleChange}
      />
      <Form.Label>Nutrition</Form.Label>
      <Form.Control
        placeholder="Kibbles"
        value={plan.nutrition}
        name="nutrition"
        onChange={handleChange}
      />

      <br />
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to={cancelPath}>
        <button className="btn btn-danger">Cancel</button>
      </Link>
    </div>
  </Form>
)

export default PlanForm
