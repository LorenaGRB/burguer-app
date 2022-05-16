import React, { useState } from 'react'
import classes from './input.module.scss'

export default function Input({ id, label, type, inputRef, size }) {
  const [active, setActive] = useState(false)
  const typeInput = type ? type : 'text'
  const sizeInput = size ? size : ''

  const handleCapture = (e) => {
    const { value } = e.target;
    if (value) setActive(true)
    else setActive(false)
  }

  return (
    <div className={[classes[`input__${sizeInput}`],classes.input ].join(' ')}>
      <input
        data-testid={id}
        ref={inputRef}
        className={classes.input__input}
        onKeyPress={handleCapture}
        onChangeCapture={handleCapture}
        type={typeInput}
      />
        <label
          className={[classes[`${active && 'input__label--active'}`], classes.input__label].join(' ')}
        >
          {label}
      </label>
    </div>
  )
}