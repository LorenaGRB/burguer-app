import React from 'react'
import classes from './button.module.scss'

function Button({ id, label, type }) {
  return (
    <>
      <button 
      data-testid={id}
      id={id}
      type={type}
      className={classes.button}
      >
        { label }
      </button>
    </>
  )
}

export default Button