import React from 'react'
import Card from './Card.jsx'

const App = () => {

  const jobsData = [
    {
      id: 1,
      company: "Meta",
      logo: "∞",
      time: "5 days ago",
      role: "Frontend Engineer",
      type: "Full Time",
      level: "Junior Level",
      salary: "$65/hour",
      location: "Mumbai, India"
    },
    {
      id: 2,
      company: "Google",
      logo: "G",
      time: "2 days ago",
      role: "React Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$80/hour",
      location: "Bangalore, India"
    }
  ]

  return (
    <div>
      {
        jobsData.map((jobs) => (
          <Card
            key={jobs.id}
            company={jobs.company}
            logo={jobs.logo}
            time={jobs.time}
            role={jobs.role}
            type={jobs.type}
            level={jobs.level}
            salary={jobs.salary}
            location={jobs.location}
          />
        ))
      }
    </div>
  )
}

export default App
