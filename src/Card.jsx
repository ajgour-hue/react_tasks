import React from 'react'
import './index.css'

const Card = (props) => {
  return (
    <div className="card">

      <div className="header">
        <div className="company">

          <div className="logo">{props.logo}</div>

          <div className="company-info">
            <span className="name">{props.company}</span>
            <span className="time">{props.time}</span>
          </div>

        </div>

        <button className="save-btn">Save 🔖</button>
      </div>


      <h2 className="job-title">{props.role}</h2>


      <div className="tags">
        <span>{props.type}</span>
        <span>{props.level}</span>
      </div>


      <div className="footer">

        <div>
          <div className="salary">{props.salary}</div>
          <div className="location">{props.location}</div>
        </div>

        <button className="apply-btn">Apply Now</button>

      </div>

    </div>
  )
}

export default Card
