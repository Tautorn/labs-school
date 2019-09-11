import React from 'react';
import './style.css'

const Button = (props) => {
  const { color, children } = props

  return (
    <button className={`button ${color}`}>{children}</button>
  )
}

export default Button