import React from 'react'
import "./Icon.css";
const Icon = ({text, color}) => {
  return (
    <div className="icon" style={
      {
        backgroundColor:color,
      }
    }>{text}</div>
  )
}

export default Icon