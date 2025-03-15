import React from 'react'

export default function LoadingBar(props) {
  return (
    <li className="skills-item">

    <div className="title-wrapper">
      <h5 className="h5">{props.title}</h5>
      <data value="80">{props.value}</data>
    </div>

    <div className="skill-progress-bg">
      <div className="skill-progress-fill" style={{width: "80%"}}></div>
    </div>

  </li>
  )
}
